let expect = require("chai").expect;
let isSymmetric = require("../isSymmetric").isSymmetric;


describe("Test isSymmetric(arr)", function () {
    it("Should return true for [1,2,1]", function () {
        let isSymmetricBool = isSymmetric([1, 2, 1]);
        let expected = true;
        expect(isSymmetricBool).to.be.equal(expected);
    });
    it("Should return false for [1,2,3]", function () {
        let isSymmetricBool = isSymmetric([1, 2, 3]);
        let expected = false;
        expect(isSymmetricBool).to.be.equal(expected);
    });
    it("Should return false for 'string'", function () {
        let isSymmetricBool = isSymmetric("string");
        let expected = false;
        expect(isSymmetricBool).to.be.equal(expected);
    });
    it("Should return false for 'string'", function () {
        let isSymmetricBool = isSymmetric("string");
        let expected = false;
        expect(isSymmetricBool).to.be.equal(expected);
    });
    it("Should return true for [1, {name:'Ivan'}, [1,2,3], {name:'Ivan'}, 1]", function () {
        let isSymmetricBool = isSymmetric([1, {name:"Ivan"}, [1,2,3], {name:"Ivan"}, 1]);
        let expected = true;
        expect(isSymmetricBool).to.be.equal(expected);
    });
});
