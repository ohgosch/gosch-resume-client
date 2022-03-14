module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/types/**/*.d.ts',
    '!src/styles/**/*.ts',
  ],
};
