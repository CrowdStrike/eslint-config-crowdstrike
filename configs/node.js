import nodePlugin from 'eslint-plugin-n';
import jsonFiles from 'eslint-plugin-json-files';
import globals from 'globals';
import javascript from './javascript.js';

export default [
  nodePlugin.configs['flat/recommended'],
  ...javascript,
  {
    files: ['**/*.json'],
    plugins: {
      'json-files': jsonFiles,
    },
    processor: 'json-files/json',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      strict: 'error',
      'json-files/require-engines': 'error',
      'json-files/require-license': 'error',

      'json-files/restrict-ranges': ['error', {
        pinUnstable: true,
      }],
    },
  },
];
