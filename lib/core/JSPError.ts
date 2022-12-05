import {TError} from '../bank.js';

export class JSPError extends Error {
    constructor(type: TError, msg: string, extra?: string) {
        if (typeof extra !== "undefined") {
            msg = msg + "\n" + extra;
        }

        super(msg);
        this.name = "JSP" + type;
    }
}