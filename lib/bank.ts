// Types
export type TMethod = "GET" | "POST" | "DELETE";
export type TError = "InternalError"

// Interfaces
export interface IPublishRes {
    req: {
        valid: boolean,
        payload: any
    },
    res: {
        raw: object,
        url: string,
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
        raw: object,
        url: string,
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
        raw: object
    }
}

// API
export const default_api_url: string = "https://jspaste.ml/";
export const api: any = {
    documents: "documents/"
};

// TODO: Messages
export const msg: any = {
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