'use strict';

class ErrorHandler {

    /**
     * @param e Error code output
     * @param s Error text output
     *
     * @return Error
     */

    static Error(e, s) {
        throw new Error('[JSP Error ' + e + '] => ' + s)
    };
}

module.exports = {ErrorHandler};