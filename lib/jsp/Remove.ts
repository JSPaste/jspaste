import Request from "../Request.ts";
import {api} from "../static/api/v1.ts";

export default async function remove(resource: string, secret: string): Promise<IRemoveRes> {
    const res = await new Request(api.url + api.route.documents).remove(resource, secret);

    return {
        req: {
            valid: res.coreRes.statusMessage === "OK",
            resource: resource,
            secret: secret
        },
        res: {
            url: api.url + resource,
            raw: res.body
        }
    }
}

export interface IRemoveRes {
    req: {
        valid: boolean;
        resource: string;
        secret: string;
    };
    res: {
        url: string;
        raw: any;
    };
}