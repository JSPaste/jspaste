// Types
export type TMethod = "GET" | "POST" | "DELETE";
export type TError = "InternalError" | "APIError" | "TestError";

// Interfaces
export interface IPublishRes {
    req: {
        valid: boolean,
        payload: any
    },
    res: {
        url: string,
        raw: any,
        resource: string | undefined,
        secret: string | undefined
    }
}

export interface IAccessRes {
    req: {
        valid: boolean,
        resource: string
    },
    res: {
        url: string,
        raw: any,
        payload: any | undefined
    }
}

export interface IRemoveRes {
    req: {
        valid: boolean,
        resource: string,
        secret: string
    },
    res: {
        raw: any
    }
}

// API
export const api = "https://jspaste.ml/";
export const api_route = {
    documents: "documents/"
};

export const msg = {
    err: {
        "INTERNAL": "Don't worry, it's not your fault.",
        "INTERNAL_EXTRA": "This should (or should not) work and this message should not (or should) appear. In short, this error must NEVER appear and if it does then the developers have not done their job properly. Please report this error to their GitHub repository.",
        "API_TIMEOUT_EXTRA": "The server is not responding and we can't hold the door open any longer, which is why you are seeing this message. Your connection to the server \"may\" not be stable, or the server \"may\" be busy or down at the moment.",
        "API_INVALID_RESPONSE": "We are unable to process your request right now. Try again later.",
        "API_INVALID_RESPONSE_EXTRA": "We HAVE received a response from the server, but it is not what we expected. It is \"possible\" that the server has triggered protection against your IP being temporarily blocked."
    },

    info: {
        // ...
    },

    warn: {
        // ...
    }
};

// Other
export const timeout = 7000