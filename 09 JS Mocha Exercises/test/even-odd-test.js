let expect = require("chai").expect;
let isOddOrEven = require("../even-odd").isOddOrEven;

describe("Test for isOddOrEven(string)", () => {
    describe("Valid input tests", () => {
        it("Should return even for ('Ivan')", () => {
            expect(isOddOrEven('Ivan')).to.equal('even');
        });
        it("Should return even for ('')", () => {
            expect(isOddOrEven('')).to.equal('even');
        });
        it("Should return odd for ('Judge')", () => {
            expect(isOddOrEven('Judge')).to.equal('odd');
        });
    });
    describe("Invalid input tests", () => {
        it("Should return undefined for (23)", () => {
            expect(isOddOrEven(23)).to.be.undefined;
        });
        it("Should return undefined for ({})", () => {
            expect(isOddOrEven({})).to.be.undefined;
        });
        it("Should return undefined for ([])", () => {
            expect(isOddOrEven([])).to.be.undefined;
        });
    })
});
