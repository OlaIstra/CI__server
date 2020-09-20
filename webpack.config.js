const { resolve } = require('path');

const target = process.env.TARGET || 'client';

module.exports = require(resolve(__dirname, 'webpack', `webpack.${target}`));
