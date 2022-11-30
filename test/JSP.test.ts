import {JSP} from "../lib";

describe("JSP", () => {
    test(".version", () => {
        const x = JSP.version;

        expect(x).toBeDefined();
        expect(typeof x).toBe("string")
        console.info("JSP version detected: " + x);
    });

    test("# (default)", () => {
        const x = new JSP();

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(JSP);
    });
});

describe("JSP#api", () => {
    const jsp = new JSP();
    let resource: string;
    let secret: string;

    test(".publish()", async () => {
        const x = await jsp.api.publish("Lorem ipsum dolor sit amet");

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.info(x)

        resource = x.res.resource
        secret = x.res.secret
    });

    test(".access()", async () => {
        const x = await jsp.api.access(resource);

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.valid).toBeTruthy();
        console.info(x)
    });
});