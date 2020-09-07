const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const { config: dotenvConfig } = require('dotenv');

const { stylesInTsLoader } = require('./styles-in-ts-loader');

const root = process.cwd();
dotenvConfig({ path: path.resolve(root, '.env') });

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const common = {
    context: path.resolve(root, 'src'),
    mode: isDev ? 'development' : 'production',
    bail: !isDev,
    output: {
        path: path.join(root, 'dist'),
        publicPath: '/',
    },
    resolve: {
        mainFields: ['browser', 'main', 'module'], // WHAT is it
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '@core': path.resolve(__dirname, 'src/core'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@atoms': path.resolve(__dirname, 'src/core/atoms'),
            '@server': path.resolve(__dirname, 'server/'),
        },
    },
    devtool: isDev ? 'inline-source-map' : false,
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(css)$/,
                /* eslint-disable-next-line sonarjs/no-duplicate-string */
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
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }],
                    ],
                },
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
                test: /\.s?css$/,
                use: [
                    { loader: 'isomorphic-style-loader' }, // WHAT is it
                    {
                        loader: stylesInTsLoader, // WHAT is it
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
