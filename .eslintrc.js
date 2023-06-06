/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
    'prettier',
  ],
  env: {
    'cypress/globals': true,
  },
  plugins: ['cypress'],
  settings: {
    jest: {
      version: 28,
    },
  },
}
