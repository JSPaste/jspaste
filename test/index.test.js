'use strict';

import { info, JSP as Methods } from '../index.js';

// JSP Class
const JSP = new Methods();

// Testing ES6 JSP
(async () => {
    console.warn(await JSP.publish('Hello world!'));
    console.warn(info);
})();