module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    'object-curly-spacing': [2, 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
  },
}
