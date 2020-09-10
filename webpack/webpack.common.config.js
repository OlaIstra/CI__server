/* eslint-disable sonarjs/no-duplicate-string */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { config: dotenvConfig } = require('dotenv');

const babelrc = require('../babel.config');

const root = process.cwd();
dotenvConfig({ path: path.resolve(root, '.env') });

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const common = {
    mode: isDev ? 'development' : 'production',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@src': path.resolve(root, 'src/'),
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

module.exports = {
    common,
};
