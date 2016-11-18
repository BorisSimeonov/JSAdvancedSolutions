let expect = require("chai").expect;
let rgbToHexColor = require("../rgb-to-hex").rgbToHexColor;

describe("Test rgbToHexColor(red, green, blue)", () => {
    describe("Nominal cases (valid input)", () => {
        it("Should return #FFFFFF for (255,255,255)", () => {
            expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
            expect(rgbToHexColor(255,255,255)).to.be.an('string');
        });
        it("Should return #000000 for (255,255,255)", () => {
            expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
        });
        it("Should return '#826464' for (130, 100, 100)", () => {
            expect(rgbToHexColor(130, 100, 100)).to.be.equal('#826464');
        });
        it("Should return '#1E0A0A' for (30, 10, 10)", () => {
            expect(rgbToHexColor(30, 10, 10)).to.equal('#1E0A0A');
        });
        it("Should return '#1E0A0A' for (30, 10, 10, 22, 33)", () => {
            expect(rgbToHexColor(30, 10, 10, 22, 33)).to.equal('#1E0A0A');
        });
    });
    describe("Special cases (invalid input)", () => {
        describe("Values bigger than 255", () => {
            it("Should return undefined for (256, 0, 0)", () => {
                expect(rgbToHexColor(256,0,0)).to.be.undefined;
            });
            it("Should return undefined for (0, 256, 0)", () => {
                expect(rgbToHexColor(0,256,0)).to.be.undefined;
            });
            it("Should return undefined for (0, 0, 256)", () => {
                expect(rgbToHexColor(0,0,256)).to.be.undefined;
            });
        });
        describe("Values lower than 0", () => {
            it("Should return undefined for (-1, 0, 0)", () => {
                expect(rgbToHexColor(-1,0,0)).to.be.undefined;
            });
            it("Should return undefined for (0, -1, 0)", () => {
                expect(rgbToHexColor(0,-1,0)).to.be.undefined;
            });
            it("Should return undefined for (0, 0, -1)", () => {
                expect(rgbToHexColor(0,0,-1)).to.be.undefined;
            });
        });
        describe("Invalid argument count", () => {
            it("Should return undefined for ()", () => {
                expect(rgbToHexColor()).to.be.undefined;
            });
            it("Should return undefined for (0)", () => {
                expect(rgbToHexColor(0)).to.be.undefined;
            });
            it("Should return undefined for (0,0)", () => {
                expect(rgbToHexColor(0,0)).to.be.undefined;
            });
        });
        describe("Invalid argument type", () => {
            it("Should return undefined for ('Ivan')", () => {
                expect(rgbToHexColor("Ivan")).to.be.undefined;
            });
            it("Should return undefined for ([1,2,3])", () => {
                expect(rgbToHexColor([1,2,3])).to.be.undefined;
            });
            it("Should return undefined for ({})", () => {
                expect(rgbToHexColor({})).to.be.undefined;
            });
        });
    });
});