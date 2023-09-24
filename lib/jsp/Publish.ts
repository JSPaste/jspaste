import Request from "../Request.ts";
import {api} from "../static/api/v1.ts";

export default async function publish(payload: any): Promise<IPublishRes> {
    const res = await new Request(api.url + api.route.documents).publish(String(payload));

    return {
        req: {
            valid: res.coreRes.statusMessage === "OK",
            payload: payload
        },
        res: {
            url: api.url + res.body.key,
            raw: res.body,
            resource: res.body.key,
            secret: res.body.secret
        }
    }
}

export interface IPublishRes {
    req: {
        valid: boolean;
        payload: any;
    };
    res: {
        url: string;
        raw: any;
        resource: string | undefined;
        secret: string | undefined;
    };
}