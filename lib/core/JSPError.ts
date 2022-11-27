export class JSPError extends Error {
    constructor(type: string, msg: string, extra?: string) {
        if (typeof extra !== "undefined") {
            msg = msg + "\n" + extra;
        }

        super(msg);
        this.name = "JSP" + type;
    }
}