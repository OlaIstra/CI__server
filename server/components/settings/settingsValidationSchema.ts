export const settingsValidatonSchema = {
    repoName: {
        in: ['body'],
        isEmpty: {
            errorMessage: 'repoName is required',
            negated: true,
        },
    },
    buildCommand: {
        in: ['body'],
        isEmpty: {
            errorMessage: 'buildCommand is required',
            negated: true,
        },
        matches: {
            errorMessage: 'buildCommand should start from npm...',
            options: [/^npm/],
        },
    },
    mainBranch: {
        in: ['body'],
        isString: true,
    },
    timePeriod: {
        in: ['body'],
        isInt: true,
        toInt: true,
    },
};
