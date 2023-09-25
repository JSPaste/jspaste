export default class JSPError extends Error {
    constructor(type: TError, err: any, description?: string) {
        if (description) err += "\n* " + description;

        super(err);
        this.name = "JSP" + type;
    }
}

type TError = "InternalError" | "APIError";