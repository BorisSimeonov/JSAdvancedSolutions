let expect = require("chai").expect;
let lookupChar = require("../char-lookup").lookupChar;

describe("Test for lookupChar(string, index)", () => {
    describe("Tests for valid input", () => {
        it("Should return s for ('string', 0)", () => {
            expect(lookupChar('string', 0)).to.equal('s');
        });
        it("Should return s for ('string', 5)", () => {
            expect(lookupChar('string', 5)).to.equal('g');
        });
        it("Should return s for ('string', 3)", () => {
            expect(lookupChar('string', 3)).to.equal('i');
        });
    });
    describe("Tests for argument type validation", () => {
        it("Should return undefined for (2, 2)", () => {
            expect(lookupChar(2, 2)).to.be.undefined;
        });
        it("Should return undefined for (2, '2')", () => {
            expect(lookupChar('2', '2')).to.be.undefined;
        });
        it("Should return undefined for ('string', 2.2)", () => {
            expect(lookupChar('string', 2.2)).to.be.undefined;
        });
        it("Should return undefined for ({}, 0)", () => {
            expect(lookupChar({}, 0)).to.be.undefined;
        });
    });
    describe("Tests for index range validation", () => {
        it("Should return undefined for ('string', -1)", () => {
            expect(lookupChar('string', -1)).to.equal('Incorrect index');
        });
        it("Should return undefined for ('string', 6)", () => {
            expect(lookupChar('string', 6)).to.equal('Incorrect index');
        });
        it("Should return undefined for ('string', 22)", () => {
            expect(lookupChar('string', 22)).to.equal('Incorrect index');
        });
    });
    describe("Tests for incorrect or missing arguments", () => {
        it("Should return undefined for ('string')", () => {
            expect(lookupChar('string')).to.be.undefined;
        });
        it("Should return undefined for (0)", () => {
            expect(lookupChar(0)).to.be.undefined;
        });
        it("Should return undefined for ()", () => {
            expect(lookupChar()).to.be.undefined;
        });
    });
});
