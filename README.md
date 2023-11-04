# jspaste

The official library to interact with JSPaste API

[![](https://badgen.net/npm/v/jspaste)](https://www.npmjs.com/package/jspaste)
[![](https://badgen.net/packagephobia/install/jspaste)](https://packagephobia.com/result?p=jspaste)
[![](https://badgen.net/codecov/c/github/jspaste/jspaste)](https://app.codecov.io/gh/jspaste/jspaste)
[![](https://badgen.net/github/checks/jspaste/jspaste)](https://github.com/jspaste/jspaste)

[![JS Standard](https://cdn.jsdelivr.net/gh/standard/standard@master/badge.svg)](https://github.com/standard/standard)

## Features

🔸 __Right out the oven;__ Aligned to work with the latest and greatest features of ES2022 spec. and TypeScript 5.\
🔸 __Light as a feather;__ Uses just ONE dependency. \
🔸 __Compatibility;__ With first-class support for Bun and the latest releases of Node.js up to the old v16.11.0. \
🔸 __Ease of use;__ Gives you what you need when you need it, period.

## Get started

Start building something awesome straight from your [IDE](https://paka.dev/npm/jspaste), or if you prefer having all the
documentation on a separate
book, have a look at our [documentation](https://github.com/jspaste/jspaste/wiki/Get-started).

```js
import JSP from 'jspaste';

const jsp = new JSP();
const {req, res} = await jsp.access("foo")

console.info("Retrieved from:", req.resource) // Retrieved from: foo
console.info("Retrieved data:", res.payload) // Retrieved data: Hello World!
```