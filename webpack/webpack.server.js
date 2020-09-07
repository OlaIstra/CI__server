const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const { server } = require('./webpack.common.config');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const isWebpackBar = isDev ? new WebpackBar({ name: 'server' }) : '';

module.exports = merge(server, {
    devtool: isDev ? 'source-map' : false,
    output: {
        filename: '[name].js',
    },
    optimization: {
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
    },
    plugins: [isWebpackBar],
});
