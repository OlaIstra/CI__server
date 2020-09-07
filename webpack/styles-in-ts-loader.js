const { readFile, writeFile } = require('fs');
const LineDiff = require('line-diff');
const { basename, dirname, join } = require('path');

const stylesModuleExport = 'declare const stylesExports: StylesExports;\nexport = stylesExports;\n';

const getNoDeclarationFileError = ({ filename }) =>
    new Error(
        `Generated type declaration does not exist. Run webpack and commit the type declaration for '${filename}'`,
    );

const getTypeMismatchError = ({ filename, expected, actual }) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const diff = new LineDiff(enforceLFLineSeparators(actual), expected).toString();

    return new Error(
        `Generated type declaration file is outdated. Run webpack and commit the updated type declaration for '${filename}'\n\n${diff}`,
    );
};

const stylesModuleToInterface = stylesModuleKeys => {
    const interfaceFields = stylesModuleKeys
        .sort()
        .map(key => `  ${key}: string;`)
        .join('\n');

    return `interface StylesExports {${interfaceFields ? `\n${interfaceFields}\n` : ''}}`;
};

const filenameToTypingsFilename = filename => {
    const dirName = dirname(filename);
    const baseName = basename(filename);
    return join(dirName, `${baseName}.d.ts`);
};

const enforceLFLineSeparators = text => {
    if (text) {
        return text.replace(/\r\n/g, '\n');
    } else {
        return text;
    }
};

const compareText = (contentA, contentB) => {
    return enforceLFLineSeparators(contentA) === enforceLFLineSeparators(contentB);
};

const validModes = ['emit', 'verify'];

const isFileNotFound = err => err && err.code === 'ENOENT';

const makeDoneHandlers = (callback, content, rest) => ({
    failed: e => callback(e),
    success: () => callback(null, content, ...rest),
});

const makeFileHandlers = filename => ({
    read: handler => readFile(filename, { encoding: 'utf-8' }, handler),
    write: (content, handler) => writeFile(filename, content, { encoding: 'utf-8' }, handler),
});

const stylesModule = (module.exports = function(content, ...rest) {
    let match;
    const { mode: queryMode } = this.query;
    const { failed, success } = makeDoneHandlers(this.async(), content, rest);
    const filename = this.resourcePath;
    const { mode = 'emit' } = queryMode;

    if (!validModes.includes(mode)) {
        return failed(new Error(`Invalid mode option: ${mode}`));
    }

    const stylesModuleInterfaceFilename = filenameToTypingsFilename(filename);
    const { read, write } = makeFileHandlers(stylesModuleInterfaceFilename);
    const keyRegex = /"([^\\"]+)":/g;
    const stylesModuleKeys = [];
    const localExports = content.split('exports.locals')[1];

    while ((match = keyRegex.exec(localExports))) {
        if (stylesModuleKeys.indexOf(match[1]) < 0) {
            stylesModuleKeys.push(match[1]);
        }
    }

    const stylesModuleDefinition = `${stylesModuleToInterface(
        stylesModuleKeys,
    )}\n${stylesModuleExport}`;

    if (mode === 'verify') {
        read((err, fileContents) => {
            if (isFileNotFound(err)) {
                return failed(
                    getNoDeclarationFileError({
                        filename: stylesModuleInterfaceFilename,
                    }),
                );
            }

            if (err) {
                return failed(err);
            }

            if (!compareText(stylesModuleDefinition, fileContents)) {
                return failed(
                    getTypeMismatchError({
                        filename: stylesModuleInterfaceFilename,
                        expected: stylesModuleDefinition,
                        actual: fileContents,
                    }),
                );
            }

            return success();
        });
    } else {
        read((_, fileContents) => {
            if (!compareText(stylesModuleDefinition, fileContents)) {
                write(stylesModuleDefinition, err => {
                    if (err) {
                        failed(err);
                    } else {
                        success();
                    }
                });
            } else {
                success();
            }
        });
    }
});

stylesModule.stylesInTsLoader = require.resolve(__filename);
