'use strict';

import { JSP } from './src/JSP.js';

(async () => {
    console.info(await JSP.publish('Hello world!'));
})();