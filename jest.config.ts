module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverageFrom: [
    '_src/**/*.ts(x)?',
    '!_src/types/**/*.d.ts',
    '!_src/styles/**/*.ts',
    '!_src/pages/**/*.tsx',
    '!_src/visual/**/*.ts',
  ],
  modulePaths: ['<rootDir>/_src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
};
