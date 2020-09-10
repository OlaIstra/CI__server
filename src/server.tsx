/* eslint-disable @typescript-eslint/no-unused-vars */

import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { parse as parseUrl } from 'url';
import { html as htmlTemplate, oneLineTrim } from 'common-tags';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

import App from './pages/App/App';

const root = process.cwd();

export const ssrFunction = (app: {
    use: (arg0: import('express-serve-static-core').Handler) => void;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    get: (arg0: string, arg1: (req: any, res: any) => void) => void;
}) => {
    app.use(express.static('./dist/client'));

    app.get('/*', (req, res) => {
        try {
            const url = req.originalUrl || req.url;

            const indexFile = path.resolve(root, 'dist/client/index.html');
            const statsFile = path.resolve(root, 'dist/client/loadable-stats.json');
            const context: StaticRouterContext = {};
            const location = parseUrl(url);

            const webExtractor = new ChunkExtractor({ statsFile, entrypoints: ['client'] });
            const scriptTags = webExtractor.getScriptTags();
            const styleTags = webExtractor.getStyleTags();
            const jsx = webExtractor.collectChunks(
                <ChunkExtractorManager extractor={webExtractor}>
                    <StaticRouter location={location} context={context}>
                        <App />
                    </StaticRouter>
                </ChunkExtractorManager>,
            );
            const html = renderToString(jsx);

            const css = new Set();

            fs.readFile(indexFile, 'utf8', (err, data) => {
                if (err) {
                    // eslint-disable-next-line no-console
                    console.log('Something went wrong:', err);
                    return res.status(500).send('Oops, better luck next time!');
                }
                // data = data.replace('__STYLES__', stylesTags);
                // data = data.replace('__SCRIPTS__', scriptTags);
                data = data.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
                console.log(data);
                return res.send(data);
            });
        } catch (error) {
            console.log('ERROR!!!', error);
        }
    });
};
