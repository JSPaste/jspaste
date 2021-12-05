'use strict';

// Testing ES6 JSP
import {info, JSP} from '../index.js';

(async () => {
    console.warn(await JSP.publish('Hello world!'));
    console.warn(info);
})();