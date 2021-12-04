'use strict';

// Testing ES6 JSP
import { methods, info } from '../index.js';

(async () => {
    console.warn(await methods.publish('Hello world!'));
    console.warn(info);
})();