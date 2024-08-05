'use strict';
const crowdstrikeNodeConfig = require('eslint-config-crowdstrike-node');

module.exports = [
  ...crowdstrikeNodeConfig,
  {
    ignores: ['!**/.*'],
    files: ['**/*.json'],
    rules: {
      'json-files/require-engines': 'off',
    },
  }];
