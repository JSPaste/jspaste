import {describe, expect, test} from "bun:test";
import JSP from "../lib/JSP.ts";

// TODO: Bun reimplementation of jest.retryTimes()
//jest.retryTimes(3, {logErrorsBeforeRetry: true});
describe("JSP#", () => {
    const jsp = new JSP();
    let resource: string;
    let secret: string;

    test.todo(".publish()", async () => {
        const x = await jsp.publish("Lorem ipsum dolor sit amet");

        expect(x).toBeInstanceOf(Object);
        expect(x.res.resource).toBeDefined();
        expect(x.res.secret).toBeDefined();
        expect(x.req.valid).toBeTruthy();
        console.debug(x)

        resource = <string>x.res.resource
        secret = <string>x.res.secret
    }, 10000);

    test.todo(".access() -> valid", async () => {
        const x = await jsp.access(resource);

        expect(x).toBeInstanceOf(Object);
        expect(x.res.payload).toBeDefined();
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    }, 10000);

    test.todo(".access() -> invalid", async () => {
        const x = await jsp.access(".invalid.");

        expect(x).toBeInstanceOf(Object);
        expect(x.res.payload).toBeUndefined();
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    }, 10000);

    test.todo(".remove() -> valid", async () => {
        const x = await jsp.remove(resource, secret);

        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    }, 10000);

    test.todo(".remove() -> invalid", async () => {
        const x = await jsp.remove(resource, ".invalid.");

        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    }, 10000);
});