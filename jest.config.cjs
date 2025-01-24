module.exports = {
  preset: "ts-jest", // Usa o ts-jest para suporte ao TypeScript
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Trata arquivos TypeScript como módulos ES
  testEnvironment: 'jsdom', // Simula o ambiente do navegador para testes
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json', // Usa um tsconfig dedicado para testes
      },
    ],
    '^.+\\.[tj]sx?$': 'babel-jest', // Usa o babel-jest para processar arquivos JS e JSX
    '\\.svg$': 'jest-transform-stub', // Mock para arquivos SVG
  },
  transformIgnorePatterns: [
    'node_modules/(?!(module-to-transform)/)', // Certifique-se de transformar módulos problemáticos aqui
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Configurações globais para testes
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mapeia arquivos CSS para evitar erros
    '^@/(.*)$': '<rootDir>/src/$1', // Suporte a aliases como @/path
    '^@/components/(.*)$': '<rootDir>/src/components/$1', // Alias específico para components
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js', // Mock para SVGs
  },
};
