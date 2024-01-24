# jspaste

The official library to interact with JSPaste API

[![JS Standard](https://cdn.jsdelivr.net/gh/standard/standard@c127e7e7358d1755248f4131100ca51ab673d0f3/badge.svg)](https://github.com/standard/standard)

## This package is deprecated

Due to organisation restructuring, this library is no longer functional. To continue using JSPaste you can refer an
official list of available libraries here: https://github.com/jspaste/awesome-jspaste

### Features

🔸 __Right out the oven;__ Aligned to work with the latest and greatest features of ES2022 spec. \
🔸 __Compatibility;__ Native support for Bun and Node.js _(ESM & CJS)_. \
🔸 __Ease of use;__ Gives you what you need when you need it, period.

### Get started

Start building something awesome straight from your [IDE](https://code.visualstudio.com/docs/editor/intellisense), or if
you prefer having all the documentation on a separate booklet, have a look at our documentation.

```js
import { JSP } from 'jspaste'

const jsp = new JSP()
const { req, res } = await jsp.access('foobar')

console.info('Retrieved from:', req.resource) // Retrieved from: foobar
console.info('Retrieved data:', res.payload) // Retrieved data: Hello world!
```