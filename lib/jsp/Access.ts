import Request from "../Request.ts";
import {api} from "../static/api/v1.ts";

export default async function access(resource: string): Promise<IAccessRes> {
    const res = await new Request(api.url + api.route.documents).access(resource);

    return {
        req: {
            valid: res.coreRes.statusMessage === "OK",
            resource: resource
        },
        res: {
            url: api.url + resource,
            raw: res.body,
            payload: res.body.data
        }
    }
}

export interface IAccessRes {
    req: {
        valid: boolean;
        resource: string;
    };
    res: {
        url: string;
        raw: any;
        payload: any | undefined;
    };
}