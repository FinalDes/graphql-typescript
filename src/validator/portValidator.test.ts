/* tslint:disable */

import "mocha";
import { PortValidator } from "./portValidator";
import should = require("chai");

should.should();

describe("Validate Port Number", () => {
    it("3000 return 3000", () => {
        PortValidator.validate(3000).should.be.equal(3000);
    });
    it("'3000' return 3000", () => {
        PortValidator.validate("3000").should.be.equal(3000);
    });
    it("undefined return false", () => {
        PortValidator.validate(undefined).should.be.false;
    });
    it("null return false", () => {
        PortValidator.validate(null).should.be.false;
    });
    it("0 return false", () => {
        PortValidator.validate(0).should.be.false;
    });
    it("70000 return false", () => {
        PortValidator.validate(70000).should.be.false;
    });
    it("'asdf' return false", () => {
        PortValidator.validate("asdf").should.be.false;
    });

});
