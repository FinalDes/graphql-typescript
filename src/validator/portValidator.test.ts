import "mocha";
import { PortValidator } from "./portValidator";
import should = require("chai");

should.should();
const alternative = 3000;

describe("Validate Port Number", () => {
    it("alternative port number should be valid", () => {
        PortValidator.validate(alternative).should.be.equal(alternative);
    });
    it("3000 return 3000", () => {
        PortValidator.validate(3000).should.be.equal(3000);
    });
    it("'3000' return 3000", () => {
        PortValidator.validate("3000").should.be.equal(3000);
    });
    it("undefined return -1", () => {
        PortValidator.validate(undefined).should.be.equal(-1);
    });
    it("null return -1", () => {
        PortValidator.validate(null).should.be.equal(-1);
    });
    it("0 return alternative", () => {
        PortValidator.validate(0, 3000).should.be.equal(3000);
    });
    it("70000 return -1", () => {
        PortValidator.validate(70000).should.be.equal(-1);
    });
    it("'asdf' return -1", () => {
        PortValidator.validate("asdf").should.be.equal(-1);
    });

    it("'asdf' return alternative value", () => {
        PortValidator.validate("asdf", alternative).should.be.equal(alternative);
    });

});
