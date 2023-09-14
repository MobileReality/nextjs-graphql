module.exports = {
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js', '<rootDir>/src/__mocks__/matchMedia.js', '<rootDir>/src/__mocks__/useRouterMock.js', '<rootDir>/src/__mocks__/intersectionObserverMock.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)':
            '<rootDir>/src/__mocks__/fileMock.js',
        '\\.(css)$': '<rootDir>/src/__mocks__/styleMock.js',
    },
    globals: {
        'window': {}
    }
};
