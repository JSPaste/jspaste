'use strict';

// Testing CommonJS JSP
const {methods, info} = require('../index.js');

(async () => {
    console.warn(await methods.publish('Hello world!'));
    console.warn(info);
})();