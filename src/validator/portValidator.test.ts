import { PortValidator } from './portValidator';
import 'mocha';
import should = require('chai');

should.should();

describe("Validate Port Number",()=>{
    it('3000 return 3000',()=>{
        PortValidator.validate(3000).should.be.equal(3000);
    });
    it("'3000' return 3000",()=>{
        PortValidator.validate('3000').should.be.equal(3000);
    });
    it('0 return false',()=>{
        PortValidator.validate(0).should.be.false;
    });
    it('70000 return false',()=>{
        PortValidator.validate(70000).should.be.false;
    });
    it("'asdf' return false",()=>{
        PortValidator.validate('asdf').should.be.false;
    });

});