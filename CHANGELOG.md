# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
