// Types
export type TMethod = "GET" | "POST" | "DELETE";
export type TError = "InternalError" | "TestError";

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
export const default_api_url: string = "https://jspaste.ml/";
export const api = {
    documents: "documents/"
};

// TODO: Messages
export const msg = {
    err: {
        // ...
    },

    info: {
        // ...
    },

    warn: {
        // ...
    }
};