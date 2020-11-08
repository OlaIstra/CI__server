/* eslint-disable @typescript-eslint/no-unused-vars */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { parse as parseUrl } from 'url';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import RootStore from '@core/store/rootStore';
import { StoreContext } from '@core/store/helpers/storeContext.ts';
import App from './pages/App/App';
import { getInitialStore } from '@core/store/getInitialStore';

const root = process.cwd();

export const ssrFunction = (app: {
    use: (arg0: import('express-serve-static-core').Handler) => void;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    get: (arg0: string, arg1: (req: any, res: any) => void) => void;
}) => {
    app.use(express.static('./dist/client'));

    app.get('/*', async (req, res) => {
        const store = new RootStore();

        const initialStore = await getInitialStore(store);

        try {
            const url = req.originalUrl || req.url;

            const indexFile = path.resolve(root, 'public/index.html');
            const statsFile = path.resolve(root, 'dist/client/loadable-stats.json');
            const context: StaticRouterContext = {};
            const location = parseUrl(url);

            const webExtractor = new ChunkExtractor({ statsFile, entrypoints: ['client'] });
            const scriptTags = webExtractor.getScriptTags();
            const styleTags = webExtractor.getStyleTags();
            const jsx = webExtractor.collectChunks(
                <ChunkExtractorManager extractor={webExtractor}>
                    <StoreContext.Provider value={store}>
                        <StaticRouter location={location} context={context}>
                            <App />
                        </StaticRouter>
                    </StoreContext.Provider>
                </ChunkExtractorManager>,
            );
            const html = renderToString(jsx);

            const css = new Set();

            fs.readFile(indexFile, 'utf8', (err, data) => {
                if (err) {
                    return res.status(500).send('Oops, better luck next time!');
                }
                data = data.replace('__STYLES__', styleTags);
                data = data.replace('__SCRIPTS__', scriptTags);
                data = data.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
                data = data.replace(
                    'window.__INITIAL_STATE__ = {}',
                    `window.__INITIAL_STATE__ = ${JSON.stringify(store.settingsStore.settings)}`,
                );
                return res.send(data);
            });
        } catch (error) {
            throw new AppError('Cannot create application', HttpCode.FORBIDDEN);
        }
    });
};
