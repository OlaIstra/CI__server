const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');
const { config: dotenvConfig } = require('dotenv');

const { stylesInTsLoader } = require('./styles-in-ts-loader');
const { common } = require('./webpack.common.config');

const root = process.cwd();

dotenvConfig({ path: path.resolve(root, '.env') });

const _DEV_ = process.env.NODE_ENV !== 'production';
const DEBUG = JSON.stringify(process.env.DEBUG === 'true');

const config = merge(common, {
    target: 'web',
    entry: {
        client: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true',
            path.join(root, 'src/index.tsx'),
        ],
    },
    output: {
        path: path.join(root, 'dist', 'client'),
    },
    resolve: {
        modules: [root, path.resolve(root, 'src'), path.resolve(root, 'public'), 'node_modules'],
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dgram: 'empty',
        ['child_process']: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    _DEV_
                        ? 'style-loader'
                        : {
                              loader: MiniCssExtractPlugin.loader,
                              options: {
                                  hmr: false,
                              },
                          },
                    {
                        loader: stylesInTsLoader,
                        query: {
                            mode: _DEV_ ? 'emit' : 'verify',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: _DEV_ ? `bundle.css` : `bundle.[hash].css`,
        }),
        new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru/),
        new webpack.DefinePlugin({ DEBUG, _DEV_ }), // plugin to define global constants TODO take _DEV_ from .env
        new WebpackBar({ name: 'client', color: 'orange' }),
        new LoadablePlugin({
            filename: `loadable-stats.json`,
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                terserOptions: {
                    mangle: false,
                    output: {
                        beautify: true,
                    },
                },
            }),
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/].*\.(jsx?|tsx?)/,
                    name: 'vendor',
                    chunks: 'all',
                },
                styles: {
                    test: /\.(scss|css)$/,
                    name: 'styles',
                    chunks: 'all',
                },
            },
        },
    },
});

if (_DEV_) {
    config.devServer = {
        host: process.env.WEBPACK_DEV_HOST,
        port: process.env.WEBPACK_DEV_PORT,
        contentBase: __dirname + '/public',
        writeToDisk: true,
        proxy: {
            '/api': process.env.WEBPACK_DEV_API,
            '/graphql': process.env.WEBPACK_DEV_API,
        },
        historyApiFallback: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        stats: {
            assets: true,
            children: false,
            chunks: false,
            cached: true,
            colors: true,
            errorDetails: false,
            errors: true,
            hash: false,
            modules: false,
            publicPath: false,
            reasons: false,
            source: false,
            timings: true,
            version: false,
            warnings: true,
        },
        watchOptions: {
            ignored: /node_modules/,
        },
    };
    config.output.publicPath = `/`;
    config.devtool = false;
}

module.exports = config;
