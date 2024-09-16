"use strict";

import ember from "eslint-plugin-ember";
import eslintPluginEmberRecommended from "eslint-plugin-ember/configs/recommended";
import javascript from "./javascript.js";

export default [
  ...javascript,
  ...eslintPluginEmberRecommended,
  {
    plugins: {
      ember,
    },
    rules: {
      "ember/routes-segments-snake-case": "off",
    },
  },
];
