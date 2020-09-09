module.exports = {
    presets: ['@babel/env', '@babel/react', '@babel/typescript'],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        ['@babel/plugin-proposal-class-properties'],
        ['@loadable/babel-plugin'],
    ],
};
