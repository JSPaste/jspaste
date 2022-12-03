import {JSPError} from "../lib/core";

describe("JSPError", () => {
    test("# (test error)", () => {
        const x = "This is a test error";

        expect(() => {
            throw new JSPError("TestError", x, "foobar");
        }).toThrow(x);
    });
});