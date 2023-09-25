import {describe, expect, test} from "bun:test";
// @ts-ignore
import PureJSP from "../lib/JSP.ts";
// @ts-ignore
import DistJSP from "../dist/index.js";

describe("pure JSP#", () => {
    const jsp = new PureJSP();
    let resource: string;
    let secret: string;

    test(".publish()", async () => {
        const x = await jsp.publish("Lorem ipsum dolor sit amet");

        expect(x).toBeInstanceOf(Object);
        expect(x.res.resource).toBeDefined();
        expect(x.res.secret).toBeDefined();
        expect(x.req.valid).toBeTruthy();
        console.debug(x)

        resource = <string>x.res.resource
        secret = <string>x.res.secret
    });

    test(".access() -> invalid", async () => {
        const x = await jsp.access(".invalid.");

        expect(x).toBeInstanceOf(Object);
        expect(x.res.payload).toBeUndefined();
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    });

    test(".access() -> valid", async () => {
        const x = await jsp.access(resource);

        expect(x).toBeInstanceOf(Object);
        expect(x.res.payload).toBeDefined();
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    });

    test(".remove() -> invalid", async () => {
        const x = await jsp.remove(resource, ".invalid.");

        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    });

    test(".remove() -> valid", async () => {
        const x = await jsp.remove(resource, secret);

        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    });
});

describe("dist JSP#", () => {
    const jsp = new DistJSP();
    let resource: string;
    let secret: string;

    test(".publish()", async () => {
        const x = await jsp.publish("Lorem ipsum dolor sit amet");

        expect(x).toBeInstanceOf(Object);
        expect(x.res.resource).toBeDefined();
        expect(x.res.secret).toBeDefined();
        expect(x.req.valid).toBeTruthy();
        console.debug(x)

        resource = <string>x.res.resource
        secret = <string>x.res.secret
    });

    test(".access() -> invalid", async () => {
        const x = await jsp.access(".invalid.");

        expect(x).toBeInstanceOf(Object);
        expect(x.res.payload).toBeUndefined();
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    });

    test(".access() -> valid", async () => {
        const x = await jsp.access(resource);

        expect(x).toBeInstanceOf(Object);
        expect(x.res.payload).toBeDefined();
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    });

    test(".remove() -> invalid", async () => {
        const x = await jsp.remove(resource, ".invalid.");

        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeFalsy();
        console.debug(x)
    });

    test(".remove() -> valid", async () => {
        const x = await jsp.remove(resource, secret);

        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.debug(x)
    });
});