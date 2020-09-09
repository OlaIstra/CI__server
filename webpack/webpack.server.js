const path = require('path');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const { common } = require('./webpack.common.config');
const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
console.log('isDev', isDev);
const isWebpackBar = isDev ? new WebpackBar({ name: 'server' }) : '';

const root = process.cwd();
// const stylesInTsLoader = require('./styles-in-ts-loader');

const optimization = isDev
    ? {}
    : {
          minimize: isDev,
          minimizer: [
              new TerserPlugin({
                  cache: true,
                  parallel: true,
                  sourceMap: true,
                  terserOptions: {
                      output: {
                          comments: false,
                          /* eslint-disable-next-line @typescript-eslint/camelcase */
                          ascii_only: true,
                      },
                  },
              }),
          ],
      };

module.exports = merge(common, {
    target: 'node',
    entry: {
        server: path.join(root, 'server/index.ts'), // TODO add server here
    },
    output: {
        path: path.join(root, 'dist', 'server'),
    },
    devtool: isDev ? 'source-map' : false,
    optimization: optimization,
    plugins: [isWebpackBar],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // {
                    //     loader: stylesInTsLoader, // WHAT is it
                    //     query: {
                    //         mode: isDev ? 'emit' : 'verify', // WHAT is it
                    //     },
                    // },
                    {
                        loader: 'css-loader', // WHAT is it
                        options: {
                            localsConvention: 'camelCaseOnly', // WHAT is it
                            modules: {
                                mode: 'local', // WHAT is it
                                localIdentName: '[name]__[local]--[hash:base64:5]', // WHAT is it
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    externals: [nodeExternals()],
    node: {
        __dirname: false,
        __filename: false,
    },
});
