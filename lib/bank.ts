// TYPES
// TODO: ???
export type APIVersion = 1;

// API
export const default_api_url: string = "https://jspaste.ml/";
export const default_api_version: APIVersion = 1;
export const api: any = {
    v1: {
        documents: "/documents/",
    }
};

// TODO: MSG
export const msg: any = {
    err: {
        // ...
    },

    info: {
        // ...
    },

    warn: {
        INVOKE: {
            gateway_version: "This route does not exist or is currently not implemented. Switching to v" + default_api_version + "..."
        }
    }
};

// OTHER
export const {version}: { version: string } = require("../package.json");
export const version_semver: string = version.match(/([0-9]+(\.[0-9]+)+)/i)![1];
export const useragent: string = "JSPaste/" + version_semver;