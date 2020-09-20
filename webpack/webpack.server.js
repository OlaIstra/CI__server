const path = require('path');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const { common } = require('./webpack.common.config');

const _DEV_ = process.env.NODE_ENV !== 'production';

const root = process.cwd();

const devTool = _DEV_ ? 'source-map' : false;
const optimization = _DEV_
    ? {}
    : {
          minimize: true,
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
        server: path.join(root, 'server/index.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.join(root, 'dist', 'server'),
    },
    devtool: devTool,
    optimization: optimization,
    plugins: [new WebpackBar({ name: 'server' })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'isomorphic-style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            localsConvention: 'camelCaseOnly',
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
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
