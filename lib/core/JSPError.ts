export default class JSPError extends Error {
    constructor(type: TError, msg: any, extra?: string) {
        if (extra) msg += "\n* " + extra;

        super(msg);
        this.name = "JSP" + type;
    }
}

type TError = "MissingPackage" | 'InternalError' | 'APIError' | 'TestError';