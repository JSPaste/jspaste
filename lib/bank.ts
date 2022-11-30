// package.json
export {default as pkg} from "../package.json";

// API
export const default_api_url: string = "https://jspaste.ml/";
export const api: any = {
    documents: "documents/"
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
        // ...
    }
};

// OTHER
import {pkg} from "./bank";

export const version_semver: string = pkg.version.match(/([0-9]+(\.[0-9]+)+)/i)![1];
export const useragent: string = "JSPaste/" + version_semver;