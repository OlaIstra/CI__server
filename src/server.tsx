/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';

export function ssrSupport(app: any) {
    app.use(express.static(path.join(__dirname, '../../public')));

    // if (false) {
    //     /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    //     const { default: webpackConfig } = require('../webpack.config.js');
    //     /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    //     const webpackDevMiddleware = require('webpack-dev-middleware');
    //     /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    //     const webpack = require('webpack');

    //     const compiler = webpack(webpackConfig);

    //     app.use(
    //         webpackDevMiddleware(compiler, {
    //             logLevel: 'silent',
    //             publicPath: '/dist/web',
    //             writeToDisk(filePath: string) {
    //                 return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
    //             },
    //         }),
    //     );
    // }

    // const nodeStats = path.resolve(__dirname, '../../dist/node/loadable-stats.json');

    const webStats = path.resolve(__dirname, '../../dist/client/loadable-stats.json');

    app.get('*', (req: any, res: any) => {
        const nodeExtractor = new ChunkExtractor({ statsFile: webStats, entrypoints: ['client'] });
        const { default: App } = nodeExtractor.requireEntrypoint();

        // const webExtractor = new ChunkExtractor({ statsFile: webStats });
        const jsx = nodeExtractor.collectChunks(<App />);

        const html = renderToString(jsx);

        res.set('content-type', 'text/html');
        res.send(`
      <!DOCTYPE html>
      <html>
        <head>
        ${nodeExtractor.getLinkTags()}
        ${nodeExtractor.getStyleTags()}
        </head>
        <body>
          <div id="main">${html}</div>
          ${nodeExtractor.getScriptTags()}
        </body>
      </html>
    `);
    });
}
