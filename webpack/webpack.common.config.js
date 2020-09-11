/* eslint-disable sonarjs/no-duplicate-string */
const path = require('path');
const { config: dotenvConfig } = require('dotenv');

const babelrc = require('../babel.config');

const root = process.cwd();
dotenvConfig({ path: path.resolve(root, '.env') });

const _DEV_ = process.env.NODE_ENV !== 'production';

const common = {
    mode: _DEV_ ? 'development' : 'production',
    bail: !_DEV_,
    resolve: {
        mainFields: ['browser', 'main', 'module'],
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@src': path.resolve(root, 'src/'),
            '@core': path.resolve(root, 'src/core'),
            '@pages': path.resolve(root, 'src/pages'),
            '@atoms': path.resolve(root, 'src/core/atoms'),
            '@server': path.resolve(root, 'server/'),
        },
    },
    devtool: _DEV_ ? 'inline-source-map' : false,
    devServer: {
        port: 5000,
        hot: _DEV_,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: _DEV_ ? `bundle.css` : `bundle.[hash].css`,
    //     }),
    // ],
    module: {
        rules: [
            // {
            //     test: /\.(css)$/,
            //     use: [_DEV_ ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            // },
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
