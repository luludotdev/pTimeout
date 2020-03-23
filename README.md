# ⌛ pTimeout
[![NPM version](https://img.shields.io/npm/v/@lolpants/ptimeout.svg?maxAge=3600)](https://www.npmjs.com/package/@lolpants/ptimeout)
[![NPM downloads](https://img.shields.io/npm/dt/@lolpants/ptimeout.svg?maxAge=3600)](https://www.npmjs.com/package/@lolpants/ptimeout)
[![Build status](https://travis-ci.com/lolPants/pTimeout.svg)](https://travis-ci.com/lolPants/pTimeout)
[![Dependencies](https://img.shields.io/david/lolpants/ptimeout.svg?maxAge=3600)](https://david-dm.org/lolpants/ptimeout)
[![Coverage Status](https://coveralls.io/repos/github/lolPants/pTimeout/badge.svg?branch=master)](https://coveralls.io/github/lolPants/pTimeout?branch=master)

_Set a limit on promise execution time._
Written in TypeScript, compiled down to ES2017 for use in any Node.js >=10.x!

## 💾 Installation
The package is on the NPM registry as `@lolpants/ptimeout`. Simply install it with your NPM client of choice.

## 🔧 Usage
```ts
// Import (CommonJS)
const pTimeout = require('@lolpants/ptimeout')

// Import (ESM)
import pTimeout from '@lolpants/ptimeout'

// Use
const longPromise = () => new Promise(/* something that takes ages */)
await pTimeout(() => longPromise(), 1000 * 10)
// Will throw an error if timeout takes longer than 10s
```
