module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: './tsconfig.test.json'
    }],
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    '\\.svg$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!styled-components)/"
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};