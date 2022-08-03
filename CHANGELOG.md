# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
