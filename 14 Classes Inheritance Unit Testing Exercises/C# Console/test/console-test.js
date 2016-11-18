"use strict";
let expect = require("chai").expect;
let assert = require('chai').assert;
let Console = require("../console").Console;

describe("Test for Console class", () => {
    describe("Test for Console.writeLine(string)", () => {
        it("Should not change the string", () => {
            expect(Console.writeLine("This must be returned"))
                .to.equal("This must be returned");
        });
    });
    describe("Test for Console.writeLine(object)", () => {
        it("Should return the object after JSON.stringify", () => {
            let testObj = { name: "Ivan", age: 44 };
            expect(Console.writeLine(testObj))
                .to.equal(JSON.stringify(testObj));
        });
    });
    describe("Valid input behaviour", () => {
        it("Should replace the placeholders with supplied parameters", () => {
            let tempString = "I {0} template {1}{2}";
            expect(Console.writeLine(tempString, "am", "string", "."))
                .to.equal("I am template string.");
        });
        it("Should replace the placeholders with supplied parameters", () => {
            let tempString = "I {0} other than string: {1}{2}";
            expect(Console.writeLine(tempString, "am", 22, [1,2]))
                .to.equal("I am other than string: 221,2");
        });
    });
    describe("Invalid input behaviour", () => {
        it("Should throw TypeError", (done) => {
            try {
                expect(Console.writeLine(22, "am", 22, [1,2]));
                assert.fail();
            } catch(e) {
                if(e.constructor.name === "TypeError") {
                    done();
                } else {
                    assert.fail();
                }
            }
        });
        it("Should throw RangeError", (done) => {
            try {
                expect(Console.writeLine("Three parameters, two placeholders {0}",
                    "First", "Second"));
                assert.fail();
            } catch(e) {
                if(e.constructor.name === "RangeError") {
                    done();
                } else {
                    assert.fail();
                }
            }
        });
        it("Should throw RangeError", (done) => {
            try {
                expect(Console.writeLine("Three parameters, two placeholders {0}{1}{2}",
                    "First"));
                assert.fail();
            } catch(e) {
                if(e.constructor.name === "RangeError") {
                    done();
                } else {
                    assert.fail();
                }
            }
        });
        it("Should throw RangeError", (done) => {
            try {
                expect(Console.writeLine("Three parameters, two placeholders {12}",
                    "First"));
                assert.fail();
            } catch(e) {
                if(e.constructor.name === "RangeError") {
                    done();
                } else {
                    assert.fail();
                }
            }
        });
    });
});