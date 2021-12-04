<a href="https://jspaste.tk">
<img src="https://jspaste.tk/logo.png" alt="JSPaste Logo" width="250" height="250" align="right"/>
</a>

# JSPaste

- [JSPaste](https://jspaste.tk) official API wrapper for **NodeJS**. Publish, get, and remove documents with ease.
- Lightweight module, **ES6** and **CommonJS** compatible.
- Package developed by `tnfAngel#6557`

## Docs

### Declare

- To declare JSPaste in your code you can do it with ...

```js
// ES6
import { JSP } from 'jspaste';


// CommonJS (default)
const { JSP } = require('jspaste');
```

### Methods

##### Publish | `.publish(body: string)` -> Object(ResponseData)

Publish a document to JSPaste ...

```js
await JSP.publish('Hello world!').catch(console.error).then(r => {

    console.info(r);

    /**
     * {
     *     url: 'https://jspaste.tk/rza',
     *     key: 'rza',
     *     secret: 'x5pz.22gu.r5qa.tobw'
     * }
     */

    // ... Other code ... //

});

// OR

const data = await JSP.publish('Hello world!');
console.info(data.url); // https://jspaste.tk/rza
```

##### Get | `.get(key: string)` -> String(JSPasteDocument)

Gets a JSPaste document using the key ...

```js
await JSP.get('rza').catch(console.error).then(r => {

    console.info(r); // Hello world!

    // ... Other code ... //

});

// OR

const data = await JSP.get('rza');
console.info(data); // Hello world!
```

##### Check | `.check(key: string)` -> Boolean(JSPasteDocument)

Validate if any JSPaste document exists using that key ...

```js
await JSP.check('rza').catch(console.error).then(r => {

    console.info(r); // true

    // ... Other code ... //

});

// OR

const exists = await JSP.check('rza');
console.info(exists); // true
```

##### Remove | `.remove(key: string, secret: string)` -> Boolean(DeleteState)

Delete a JSPaste document using the key and secret ...

```js
await JSP.remove('rza', '2ads.fdfw.32ww.fwt4').catch(console.error).then(r => {

    console.info(r); // true

    // ... Other code ... //

});

// OR

const deleted = await JSP.remove('rza', '2ads.fdfw.32ww.fwt4');
console.info(deleted); // true
```

## Example

```js
// ES6
import { JSP } from 'jspaste';

const response = await JSP.publish('Hello world!');
console.info(response);

console.info(await JSP.get(response.key));
```

```js
// CommonJS (default)
const { JSP } = require('jspaste');

const response = await JSP.publish('Hello world!');
console.info(response);

console.info(await JSP.get(response.key));
```

_If you have any issues or want to make any suggestions, don't forget to join
our [Discord server](https://discord.gg/8RNAdpK)_