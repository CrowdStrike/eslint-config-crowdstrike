'use strict';
import node from './configs/node.js';

export default [
  ...node,
  {
    ignores: ['!**/.*'],
    files: ['**/*.json'],
    rules: {
      'json-files/require-engines': 'off',
    },
  }];
