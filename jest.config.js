/* eslint-disable no-undef */

module.exports = {
  rootDir: '.',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist', 'test-helper'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!dist/**', '!**/node_modules/**'],
  preset: 'ts-jest',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'junit', outputName: 'junit.xml' }]
  ]
}
