// /* eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const { config: dotenvConfig } = require('dotenv');

// const { stylesInTsLoader } = require('./styles-in-ts-loader');
const { common } = require('./webpack.common.config');

const root = process.cwd();

dotenvConfig({ path: path.resolve(root, '.env') });

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const DEBUG = JSON.stringify(process.env.DEBUG === 'true');

console.log(`ENV = ${isDev ? 'development' : 'production'}`);
console.log(`DEBUG = ${DEBUG}`);

const config = merge(common, {
    target: 'web',
    entry: {
        client: path.join(root, 'src/index.tsx'),
    },
    output: {
        path: path.join(root, 'dist', 'client'),
    },
    resolve: {
        modules: [root, path.resolve(root, 'src'), path.resolve(root, 'public'), 'node_modules'],
    },
    node: {
        // WHAT is it
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dgram: 'empty',
        ['child_process']: 'empty',
    },
    plugins: [
        new LoadablePlugin(), // WHY there are no other plugins?
        new HtmlWebpackPlugin({
            favicon: path.resolve(root, 'src/favicon.ico'),
            template: path.resolve(root, 'src', 'index.html'),
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            },
        }),
        new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru/),
        new webpack.DefinePlugin({ DEBUG, isDev }), // plugin to define global constants TODO take isDev from .env
        new WebpackBar({ name: 'client', color: 'orange' }),
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

// OLD CONFIG

// const config = merge(client, {
//     output: {
//         filename: isDev ? 'assets/js/[name].js' : 'assets/js/[name]-[hash:8].js',
//         chunkFilename: isDev ? 'assets/js/[name].js' : 'assets/js/[name]-[chunkhash:8].js',
//     },

//     resolve: {
//         modules: [root, path.resolve(root, 'src'), path.resolve(root, 'public'), 'node_modules'],
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             favicon: path.resolve(root, 'src/favicon.ico'),
//             template: 'src/index.html',
//             minify: {
//                 removeComments: isProd,
//                 collapseWhitespace: isProd,
//             },
//         }),
//         new MiniCssExtractPlugin({
//             filename: 'assets/css/[name].[contenthash:8].css',
//             chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
//         }),
//         new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru/),
//         new webpack.DefinePlugin({ DEBUG, isDev }), // plugin to define global constants TODO take isDev from .env
//         new WebpackBar({ name: 'client', color: 'orange' }),
//     ],

//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 exclude: /\.test\.tsx?$/,
//                 include: isDev
//                     ? [path.resolve(root, 'src')]
//                     : [path.resolve(root, 'src'), path.resolve(root, 'node_modules')],
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
//                     // {
//                     //     loader: stylesInTsLoader,
//                     //     query: {
//                     //         mode: isDev ? 'emit' : 'verify', // WHAT is it
//                     //     },
//                     // },
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             localsConvention: 'camelCaseOnly',
//                             modules: {
//                                 mode: 'local',
//                                 localIdentName: '[name]__[local]--[hash:base64:5]',
//                             },
//                         },
//                     },
//                     {
//                         loader: 'sass-loader',
//                     },
//                 ],
//             },
//         ],
//     },
//     optimization: {
//         minimizer: [
//             new TerserPlugin({
//                 cache: true,
//                 parallel: true,
//                 sourceMap: false,
//                 terserOptions: {
//                     mangle: false,
//                     output: {
//                         beautify: true,
//                     },
//                 },
//             }),
//         ],
//         splitChunks: {
//             cacheGroups: {
//                 commons: {
//                     test: /[\\/]node_modules[\\/].*\.(jsx?|tsx?)/,
//                     name: 'vendor',
//                     chunks: 'all',
//                 },
//                 styles: {
//                     test: /\.(scss|css)$/,
//                     name: 'styles',
//                     chunks: 'all',
//                 },
//             },
//         },
//     },
// });

if (isDev) {
    // TODO how to use it
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
