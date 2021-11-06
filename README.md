![logo](https://jspaste.tk/logo.png)

# JSPaste
 - JSPaste Official API wrapper for Node.js. Publish, get, and delete [JSPaste](https://jspaste.tk/) documents.

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

await jsp.publish('Hello world!');

/* 
This should return something like this: {
  url: 'https://jspaste.tk/ocev',
  key: 'ocev',
  secret: 'x5pz.22gu.r5qa.tobw'
}
*/

// You also can do this if you want the data:

const data = await jsp.publish('Hello world!');

console.log(data.url); // https://jspaste.tk/ocev

// OR:

const data = await jsp.publish('Hello world!', 10000); // Document will be deleted after 10000 milliseconds.

console.log(data.url); // https://jspaste.tk/sdsf

```

- Get | `.get(key: string)` -> String(JSPasteDocument)

Gets a document from JSPaste by its key.

```js

await jsp.get('iRhkODYUYG'); // Hello world!

// OR:

const data = await jsp.get('iRhkODYUYG');

console.log(data); // Hello world!

```

- Exists | `.exists(key: string)` -> Boolean(JSPasteDocument)

Checks if a document exists in JSPaste by its key.

```js

await jsp.exists('rza'); // true

await jsp.exists(); // Error

await jsp.exists('Rr3rFE32frr'); // false 


// OR

const exists = await jsp.exists('rza');

console.log(exists); // true

```

- Delete | `.delete(key: string, secret: string)` -> Boolean(DeleteState)

Deletes a document from JSPaste by its key and secret.

```js

await jsp.delete('key', 'secret');

// OR

const deleted = await jsp.delete('rza', '2ads.fdfw.32ww.fwt4');

console.log(deleted); // true

```
# Full example

- Full example using JSPaste

```js

const jsp = require('jspaste');

const response = await jsp.publish('Hello world!');

console.log(response.url);

const data = await jsp.get(response.key);

console.log(data);

```

# Installation

_If you have installation issues, please join our [Discord support server](https://discord.gg/8RNAdpK)._

**Node Package Manager**

`npm install jspaste`

**Yarn**

`yarn add jspaste`