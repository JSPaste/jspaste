<div align="center">
<a href="https://jspaste.tnfangel.xyz/"><img alt="JSPaste" height="300" src="https://static.geo.inetol.net/media/jspaste.avif"/></a>

[![](https://flat.badgen.net/npm/v/jspaste)](https://www.npmjs.com/package/jspaste)
[![](https://flat.badgen.net/npm/dt/jspaste)](https://www.npmjs.com/package/jspaste)
[![](https://flat.badgen.net/codecov/c/github/jspaste/jspaste)](https://app.codecov.io/gh/jspaste/jspaste)
[![](https://flat.badgen.net/packagephobia/install/jspaste)](https://packagephobia.com/result?p=jspaste)
[![](https://flat.badgen.net/bundlephobia/minzip/jspaste)](https://bundlephobia.com/package/jspaste)

<h4>Powerful library to easily interact with JSPaste API</h4>
</div>

## Features

🔸 **Tough as nails;** Built with TypeScript in mind, you can rely on it not giving you trouble when you need it most. \
🔸 **Light as a feather;** Uses just [ONE](https://wikipedia.org/wiki/1) ultra-lightweight dependency. \
🔸 **Easy to use;** Gives you back what you need when you need it. Period. \
🔸 **Seamlessly compatible;** We support [ESModules](https://nodejs.org/api/esm.html#modules-ecmascript-modules) and
prehistoric [CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules) alike.

## Install

With [**npm**](https://github.com/npm/cli):

```
$ npm i --save jspaste
```

With [**pnpm**](https://github.com/pnpm/pnpm):

```
$ pnpm add jspaste
```

With [**yarn**](https://github.com/yarnpkg/berry):

```
$ yarn add jspaste
```

## Get started

Start building something awesome straight from your IDE, or if you prefer having all the documentation on a separate
book, have a look at our [documentation](https://paka.dev/npm/jspaste).

### Example

With [**ESModules**](https://nodejs.org/api/esm.html#modules-ecmascript-modules):

```js
import JSP from 'jspaste';

new JSP().access('ujcbfrryaqoclfea').then(console.info);
```

With [**CommonJS**](https://nodejs.org/api/modules.html#modules-commonjs-modules):

```js
const JSP = require('jspaste');

new JSP().access('ujcbfrryaqoclfea').then(console.info);
```
