"use strict";

import globals from "globals";
import javascript from "./javascript";
import typescriptEslint from "typescript-eslint";

export default [
  ...javascript,
  ...typescriptEslint.configs.recommendedTypeChecked,
  ...typescriptEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      // Enabling this rule would force us to `await` any function that returns a promise.
      // One example is a function that itself `await`s `updateComplete`. The rule is a bit
      // cumbersome in practice.
      "@typescript-eslint/no-floating-promises": "off",

      // allow unused vars starting with _,
      // handy for destructuring and declaring all events
      // for greater context.
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],

      // Allow primitives to safely ignore this rule, since it is sometimes useful to use `||` instead of `??` with them.
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        { ignorePrimitives: true },
      ],

      // much concise
      "@typescript-eslint/prefer-optional-chain": "error",

      // we want to know if it's fixed
      "@typescript-eslint/prefer-ts-expect-error": "error",

      // Forces type imports to be separate from value imports
      "@typescript-eslint/consistent-type-imports": "error",

      // If a class member is private or public, we want to enforce a leading underscore for consistency
      // Based on: https://typescript-eslint.io/rules/naming-convention/#enforce-that-private-members-are-prefixed-with-an-underscore
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "memberLike",
          modifiers: ["private"],
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "require",
        },
        {
          // The same as `memberLike`, but excluding `method` to avoid issues with redefining methods from external libraries
          selector: [
            "classicAccessor",
            "autoAccessor",
            "enumMember",
            "property",
            "parameterProperty",
          ],
          modifiers: ["protected"],
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "require",
        },
        {
          // If the class member is public explicitly or implicitly, prevent a leading underscore (similar to the `no-underscore-dongle` rule)
          //  The same as `memberLike`, but only targeting `classProperty` values (not function or type properties) and excluding `method`
          selector: [
            "classicAccessor",
            "autoAccessor",
            "enumMember",
            "classProperty",
            "parameterProperty",
          ],
          modifiers: ["public"],
          format: null,
          leadingUnderscore: "forbid",
        },
      ],
    },
  },
  {
    files: ["*.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,gjs}", "tests/**/*.*ts"],
    // These rules don't apply to JavaScript. And for tests they're annoying
    // due to how much of "@open-wc/testing" is typed as `any` or inconsistently.
    // `expect`, for example, results sometimes in a promise and other times something
    // else depending on what it's chained with.
    ...typescriptEslint.configs.disableTypeChecked,
  },
];
