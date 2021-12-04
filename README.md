![logo](https://jspaste.tk/logo.png)

# JSPaste

- JSPaste Official API wrapper for Node.js. Publish, get, and remove [JSPaste](https://jspaste.tk/) documents.

- Lightweight module, with modern JS and async / await.

- Package developed by `tnfAngel#6557`.

# Docs

**Declare**

- For declare JSPaste in your code, just write:

```js
const jsp = require('jspaste');
```

**Methods**

- Publish | `.publish(body: string, deleteTime?: number)` -> Object(ResponseData)

Publish a document to JSPaste.

```js
await JSP.publish('Hello world!');

/* 
 This should return something like this:
    
 {
    url: 'https://jspaste.tk/ocev',
    key: 'ocev',
    secret: 'x5pz.22gu.r5qa.tobw'
 }
 */

// You also can do this if you want the data:

const data = await JSP.publish('Hello world!');

console.log(data.url); // https://jspaste.tk/ocev

// OR:

const data = await JSP.publish('Hello world!', 10000); // Document will be deleted after 10000 milliseconds.

console.log(data.url); // https://jspaste.tk/sdsf
```

- Get | `.get(key: string)` -> String(JSPasteDocument)

Gets a document from JSPaste by its key.

```js
await JSP.get('iRhkODYUYG'); // Hello world!

// OR:

const data = await JSP.get('iRhkODYUYG');

console.log(data); // Hello world!
```

- Check | `.check(key: string)` -> Boolean(JSPasteDocument)

Checks if a document exists in JSPaste by its key.

```js
await JSP.check('rza'); // true

await JSP.check(); // Error

await JSP.check('Rr3rFE32frr'); // false

// OR

const exists = await JSP.check('rza');

console.log(exists); // true
```

- Remove | `.remove(key: string, secret: string)` -> Boolean(DeleteState)

Deletes a document from JSPaste by its key and secret.

```js
await JSP.remove('key', 'secret');

// OR

const deleted = await JSP.remove('rza', '2ads.fdfw.32ww.fwt4');

console.log(deleted); // true
```

# Full example

- Full example using JSPaste

```js
const JSP = require('jspaste');
const response = await JSP.publish('Hello world!');

console.log(response.url);

const data = await JSP.get(response.key);

console.log(data);
```

_If you have issues, please join our [Discord support server](https://discord.gg/8RNAdpK)._