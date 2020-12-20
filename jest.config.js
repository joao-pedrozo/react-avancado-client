module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], //Antes de todos os testes vai rodar eses arquivo,
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
