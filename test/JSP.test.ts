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

const jsp = new JSP();
const resource = "fxynzgtuntekaknbsovyod";
describe("JSP#api", () => {
    test(".access()", async () => {
        const x = await jsp.api.access(resource);

        expect(x).toBeDefined();
        expect(x).toBeInstanceOf(Object);
        expect(x.req.resource).toBe(resource);
        expect(x.req.valid).toBeTruthy();
    });
});