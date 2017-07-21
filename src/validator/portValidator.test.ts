import { PortValidator } from "./portValidator";

const alternative = 3000;

describe("Validate Port Number", () => {
    it("alternative port number should be valid", () => {
        expect(PortValidator.validate(alternative)).toBe(alternative);
        // PortValidator.validate(alternative).should.be.equal(alternative);
    });
    it("3000 return 3000", () => {
        expect(PortValidator.validate(3000)).toBe(3000);
    });
    it("'3000' return 3000", () => {
        expect(PortValidator.validate("3000")).toBe(3000);
    });
    it("undefined return -1", () => {
        expect(PortValidator.validate(undefined)).toBe(-1);
    });
    it("null return -1", () => {
        expect( PortValidator.validate(null)).toBe(-1);
    });
    it("0 return alternative", () => {
        expect(PortValidator.validate(0, 3000)).toBe(3000);
    });
    it("70000 return -1", () => {
        expect(PortValidator.validate(70000)).toBe(-1);
    });
    it("'asdf' return -1", () => {
        expect(PortValidator.validate("asdf")).toBe(-1);
    });

    it("'asdf' return alternative value", () => {
        expect(PortValidator.validate("asdf", alternative)).toBe(alternative);
    });

});
