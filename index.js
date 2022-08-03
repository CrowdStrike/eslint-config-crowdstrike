'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': 'error',
    'indent': ['error', 2, {
      'MemberExpression': 1,
      'SwitchCase': 1,
    }],
    'keyword-spacing': ['error', {}],
    'max-params': ['error', 3],
    'no-constant-condition': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-restricted-globals': ['error', 'event'],
    'one-var': ['error', 'never'],
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true,
      'avoidEscape': true,
    }],
    'require-await': 'error',
    'semi': 'error',
    'spaced-comment': ['error', 'always', {
      'block': {
        'balanced': true,
        'exceptions': ['*'],
      },
    }],
    'template-curly-spacing': ['error', 'never'],
    'no-trailing-spaces': 'error',
  },
};
