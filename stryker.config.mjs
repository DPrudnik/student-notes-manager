/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
export default {
  mutate: [
    'src/**/*.ts',
    '!src/tests/**/*.ts',
    '!src/database/index.ts', // не мутуємо ініціалізацію БД
  ],
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off',
};
