module.exports = {
  testEnvironment: 'hardhat/dist/jsdom',
  moduleNameMapper: {
    '.scss$': '<rootDir>/test/scssStub',
    '.(png|svg)$': '<rootDir>/test/imageStub',

    // Jest does not always resolve src/test (probably because of babel's TypeScript transpilation):
    '^test/*': '<rootDir>/src/test',

    '@surge/conedison/format': '@surge/conedison/dist/format.js',
    '@surge/conedison/provider': '@surge/conedison/dist/provider/index.js',
  },
  setupFiles: ['<rootDir>/test/setup.ts'],
  setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/test/setup-jest.ts'],
}
