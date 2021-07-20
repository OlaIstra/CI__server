module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'],
    resetMocks: false,
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/src/mocks/assets.js',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/src/mocks/assets.js',
        '\\.(css|less|scss|sass)$': 'jest-transform-css',
        '^root/(.*)': '<rootDir>/$1',
        '@core/(.*)': '<rootDir>/src/core/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@shared/(.*)': '<rootDir>/shared/$1',
        '@atoms/(.*)': '<rootDir>/src/core/atoms/$1',
        '@src/(.*)': '<rootDir>/src/$1',
    },
};
