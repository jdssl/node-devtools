const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/**/tests/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
	watchPathIgnorePatterns: ['globalConfig']
}