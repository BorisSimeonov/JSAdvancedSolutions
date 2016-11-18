let expect = require("chai").expect;
let createCalculator = require("../addSubtract").createCalculator;

describe("Test createCalculator()", () => {
    let calculator;
    beforeEach(() => {
        calculator = createCalculator();
    });
    describe("Test return object", () => {
        it ("Should return object", () => {
            expect(calculator).to.be.object;
        });
        it ("Should have function add", () => {
            expect(calculator).to.have.property('add');
        });
        it ("Should have function add", () => {
            expect(calculator).to.have.property('subtract');
        });
        it ("Should have function add", () => {
            expect(calculator).to.have.property('get');
        });
    });
    describe("Test object properties execution", () => {
        describe("Test add function", () => {
            it("Should return 1 for add(1)", () => {
                calculator.add(1);
                expect(calculator.get()).to.equal(1);
            });
            it("Should return 1 for add('1')", () => {
                calculator.add('1');
                expect(calculator.get()).to.equal(1);
            });
            it("Should return 15 for add(5), add(10)", () => {
                calculator.add(5);
                calculator.add(10);
                expect(calculator.get()).to.equal(15);
            });
            it("Should return 1.5 for add(0.5), add(1.0)", () => {
                calculator.add(0.5);
                calculator.add(1.0);
                expect(calculator.get()).to.equal(1.5);
            });
        });
        describe("Test subtract function", () => {
            it("Should return -1 for subtract(1)", () => {
                calculator.subtract(1);
                expect(calculator.get()).to.equal(-1);
            });
            it("Should return -1 for subtract(1)", () => {
                calculator.subtract('1');
                expect(calculator.get()).to.equal(-1);
            });
            it("Should return -5 for subtract(-5), subtract(10)", () => {
                calculator.subtract(-5);
                calculator.subtract(10);
                expect(calculator.get()).to.equal(-5);
            });
            it("Should return -1.5 for subtract(0.5), subtract(1.0)", () => {
                calculator.subtract(0.5);
                calculator.subtract(1.0);
                expect(calculator.get()).to.equal(-1.5);
            });
        });
        describe("Test get function", () => {
            it("Should return 0", () => {
                expect(calculator.get()).to.equal(0);
            });
        });
    });
});
