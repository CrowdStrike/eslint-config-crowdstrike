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
    'eqeqeq': 'error',
    'indent': ['error', 2, {
      'MemberExpression': 1,
      'SwitchCase': 1,
    }],
    'max-params': ['error', 3],
    'no-constant-condition': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-restricted-globals': ['error', 'event'],
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true,
      'avoidEscape': true,
    }],
    'require-await': 'error',
    'semi': 'error',

    // spacing
    'arrow-spacing': 'error',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'comma-spacing': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'generator-star-spacing': [
      'error',
      {
        named: 'after',
        anonymous: 'after',
      },
    ],
    'key-spacing': 'error',
    'keyword-spacing': ['error', {}],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'rest-spread-spacing': 'error',
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'ignore',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      'block': {
        'balanced': true,
        'exceptions': ['*'],
      },
    }],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': 'error',
    'yield-star-spacing': 'error',
  },
};
