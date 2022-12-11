import {TError} from '../bank';

export class JSPError extends Error {
    constructor(type: TError, msg: string, extra?: string) {
        if (extra) msg += "\n* " + extra;

        super(msg);
        this.name = "JSP" + type;
    }
}