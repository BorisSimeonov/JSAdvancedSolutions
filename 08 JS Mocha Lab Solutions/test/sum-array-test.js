let expect = require("chai").expect;
let sum = require("../sum").sum;


describe("Test sum(arr)", function () {
    it("should return 3 for [1,2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 0 for []", function () {
        expect(sum([])).to.be.equal(0);
    });
    it("should return 10 for [1,2,3,4,5,10,-10]", function () {
        expect(sum([1, 2, 3, 4, 5, 5, -10])).to.be.equal(10);
    });
    it("should return NaN for ['pesho']", function () {
        expect(sum(['pesho'])).to.be.NaN;
    })
});