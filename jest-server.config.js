module.exports = {
    moduleFileExtensions: ['js', 'ts'],
    moduleNameMapper: {
        '^root/(.*)': '<rootDir>/$1',
        '@shared/(.*)': '<rootDir>/shared/$1',
        '@core/(.*)': '<rootDir>/src/core/$1',
        '@src/(.*)': '<rootDir>/src/$1',
    },
};
