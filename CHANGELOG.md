# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [11.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v11.0.0-beta.0...v11.0.0) (2024-08-09)


### Features

* use newest beta of eslint-config-crowdstrike-node, drop self-de… ([#97](https://github.com/CrowdStrike/eslint-config-crowdstrike/issues/97)) ([dc26929](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/dc269290fb1bd4fe4305bb7ab96471c1a6ac6aa3))

## [11.0.0-beta.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v10.1.0...v11.0.0-beta.0) (2024-08-09)


### Features

* explicitly set project registry ([ecd5b1d](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/ecd5b1d4089a1f30b24bf0fd1a89b35f3a2c9d5f))
* include @eslint/js as dependency, since we direclty import it in index.js ([0497955](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/0497955c8a8fda38ac8b535e6e51fa9a9ba43727))
* pull in new veta version of eslint-config-crowdstrike-node ([5991447](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/599144703ed90c919e7b10ef57d7f34c2ecf41e4))
* run 'npx @eslint/migrate-config .eslintrc.js' ([a442a7b](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/a442a7b4b0a8444401f55daf6d3dd57ae7bd6979))
* run 'npx @eslint/migrate-config index.js' ([f89cc79](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/f89cc7997697eee71dfe117738325ea2c68c4a22))


### Bug Fixes

* pin eslint-config-crowdstrike to published version, ([59cbfe5](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/59cbfe59ccabf9a4765ba999b81c970141443948))
* remove duplicate eslint/js reference in devDeps ([6a3fd9b](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/6a3fd9b41b79ec05221419c421538920742d5368))

## [10.1.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v10.0.0...v10.1.0) (2023-03-31)


### Features

* bump ecmaVersion to 2022 ([f972be7](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/f972be78e753ed647d06337ec2fa6d17fa41f7c9))

## [10.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v9.0.0...v10.0.0) (2023-03-30)


### ⚠ BREAKING CHANGES

* add no-eval rule
* update generator-star-spacing to match our prettier code

### Features

* add no-eval rule ([329d978](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/329d9781a81554ff5a9b85fec492b81cd9c9df06))


### Bug Fixes

* update generator-star-spacing to match our prettier code ([43d3736](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/43d373673e6c1bcc14c988e61270d1a6ce495105))

## [9.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v8.0.0...v9.0.0) (2023-01-06)


### ⚠ BREAKING CHANGES

* add eqeqeq

### Features

* add eqeqeq ([a982582](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/a98258243ff045ceb28694a4a2a41a8748ae0e46))

## [8.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v7.0.0...v8.0.0) (2022-09-16)


### ⚠ BREAKING CHANGES

* add no-multi-spaces rule

### Features

* add no-multi-spaces rule ([e0b3788](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/e0b37888a8acab5a73f2d926a03fadcf1e23c61d))

## [7.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v6.0.0...v7.0.0) (2022-08-09)


### ⚠ BREAKING CHANGES

* add `object-shorthand` always

### Features

* add `object-shorthand` always ([10e6734](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/10e6734135e4690e86098d6203733c6031459abd))

## [6.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v5.0.0...v6.0.0) (2022-08-09)


### ⚠ BREAKING CHANGES

* add more spacing rules

### Features

* add more spacing rules ([8d6d772](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/8d6d7724619dbfcb536e06d273d3d4fe42746280))

## [5.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v4.0.1...v5.0.0) (2022-08-03)


### ⚠ BREAKING CHANGES

* add no-trailing-spaces rule

### Features

* add no-trailing-spaces rule ([625af39](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/625af395b21df76be02c0ec5eceacd36c20bfd6d))

### [4.0.1](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v4.0.0...v4.0.1) (2021-10-12)


### Bug Fixes

* revert accidental eslint peer deps bump ([c1bfbef](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/c1bfbefdf5d1003fd657ec950acdb45aeb01e79d))

## [4.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v3.1.0...v4.0.0) (2021-09-10)


### ⚠ BREAKING CHANGES

* add eol-last rule

### Features

* add eol-last rule ([d7d7e49](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/d7d7e498781ae147be10b09ab2f22b1fc1909977))

## [3.1.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v3.0.2...v3.1.0) (2021-06-15)


### Features

* bump `ecmaVersion` to `2020` ([029945a](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/029945ad5b8f088918fed301f4aa409a0280da16))

### [3.0.2](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v3.0.1...v3.0.2) (2021-06-15)

### [3.0.1](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v3.0.0...v3.0.1) (2020-11-20)


### Bug Fixes

* remove `strict` ([3d6bb3d](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/3d6bb3dff7798a92f9b089afe1e89a5d0fe1a84c))

## [3.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v2.0.0...v3.0.0) (2020-10-16)


### ⚠ BREAKING CHANGES

* bump to node 10

### Features

* bump to node 10 ([d0c4f30](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/d0c4f30741494fbdba7a817a4bfea9282253e944))

## [2.0.0](https://github.com/CrowdStrike/eslint-config-crowdstrike/compare/v1.0.0...v2.0.0) (2020-02-05)


### ⚠ BREAKING CHANGES

* Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/event)
use of this property is not recommended in new code:

> You *should* avoid using this property in new code, and should instead
> use the `Event` passed into the event handler function. This property
> is not universally supported and even when supported introduces
> potential fragility to your code.

I just came across a usage of it which was I believe unintended (we
forgot to name the parameter which was being passed to the event
handling function) and I think we sholud enable this rule to clean up
other instances...

### Bug Fixes

* error on use of global `window.event` property ([1c05cc1](https://github.com/CrowdStrike/eslint-config-crowdstrike/commit/1c05cc13374ac6d040b9ca2fee2e159bedc14cc4))
