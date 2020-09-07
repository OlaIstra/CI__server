/* eslint-disable sonarjs/no-duplicate-string */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const { config: dotenvConfig } = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelrc = require('../babel.config');
// const { stylesInTsLoader } = require('./styles-in-ts-loader');

const root = process.cwd();
dotenvConfig({ path: path.resolve(root, '.env') });

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

// OLD

// const common = {
//     // context: path.resolve(root, 'src'),
//     mode: isDev ? 'development' : 'production',
//     bail: !isDev,
//     output: {
//         path: path.join(root, 'dist'),
//         publicPath: '/',
//     },
//     resolve: {
//         mainFields: ['browser', 'main', 'module'], // WHAT is it
//         extensions: ['.ts', '.tsx', '.js', '.json'],
//         alias: {
//             '@core': path.resolve(root, 'src/core'),
//             '@pages': path.resolve(root, 'src/pages'),
//             '@atoms': path.resolve(root, 'src/core/atoms'),
//             '@server': path.resolve(root, 'server/'),
//         },
//     },
//     devtool: isDev ? 'inline-source-map' : false,
//     optimization: {
//         splitChunks: {
//             chunks: 'all',
//         },
//     },
//     module: {
//         strictExportPresence: true,
//         rules: [
//             {
//                 test: /\.(css)$/,
//                 /* eslint-disable-next-line sonarjs/no-duplicate-string */
//                 use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     // { loader: 'isomorphic-style-loader' }, // WHAT is it
//                     // {
//                     //     loader: stylesInTsLoader, // WHAT is it
//                     //     query: {
//                     //         mode: isDev ? 'emit' : 'verify', // WHAT is it
//                     //     },
//                     // },
//                     {
//                         loader: 'css-loader', // WHAT is it
//                         options: {
//                             localsConvention: 'camelCaseOnly', // WHAT is it
//                             modules: {
//                                 mode: 'local', // WHAT is it
//                                 localIdentName: '[name]__[local]--[hash:base64:5]', // WHAT is it
//                             },
//                         },
//                     },
//                     'sass-loader',
//                 ],
//             },
//             {
//                 test: /\.tsx?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: babelrc,
//                 },
//             },
//             {
//                 test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
//                 use: [
//                     {
//                         loader: 'url-loader',
//                         options: {
//                             limit: 8192,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
// };

const common = {
    // context: path.resolve(__dirname, 'src'),
    mode: isDev ? 'development' : 'production',
    output: {
        // filename: isDev ? `bundle.js` : `bundle.[hash].js`,
        // path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@core': path.resolve(root, 'src/core'),
            '@pages': path.resolve(root, 'src/pages'),
            '@atoms': path.resolve(root, 'src/core/atoms'),
            '@server': path.resolve(root, 'server/'),
        },
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: {
        port: 5000,
        hot: isDev,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDev ? `bundle.css` : `bundle.[hash].css`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isDev
                        ? 'style-loader'
                        : {
                              loader: MiniCssExtractPlugin.loader,
                              options: {
                                  hmr: isDev,
                                  reloadAll: true,
                              },
                          },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: babelrc,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
};

const client = merge(common, {
    target: 'web',
    entry: {
        client: path.join(root, 'src/index.tsx'),
    },
    output: {
        path: path.join(root, 'dist', 'client'),
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
    ],
});

const server = merge(common, {
    target: 'node',
    entry: {
        server: path.join(root, 'web-api/main.ts'), // TODO add server here
    },
    output: {
        path: path.join(root, 'dist', 'server'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // { loader: 'isomorphic-style-loader' }, // Это не нужно
                    {
                        // loader: stylesInTsLoader, // WHAT is it
                        query: {
                            mode: isDev ? 'emit' : 'verify', // WHAT is it
                        },
                    },
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

module.exports = {
    common,
    client,
    server,
};
