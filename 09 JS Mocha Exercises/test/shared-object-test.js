let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require('../shared-object').sharedObject;


describe("Test for sharedObject functionality", () => {
    let sharedObj;
    let html;
    beforeEach(() => {
        sharedObj = Object.create(sharedObject);
        document.body.innerHTML =
            `<div id="wrapper">
            <input type="text" id="name">
            <input type="text" id="income">
            </div>`;
    });
    describe("Test sharedObject type, initial values of name/income and functions", () => {
        it("Should be object", () => {
            expect(typeof sharedObj).to.equal('object');
        });
        it("Should have property named 'name'", () => {
            expect(sharedObj).to.have.property('name');
        });
        it("Should return null for property 'name'", () => {
            expect(sharedObj.name).to.equal(null);
        });
        it("Should have property named 'income'", () => {
            expect(sharedObj).to.have.property('income');
        });
        it("Should return null for property 'income'", () => {
            expect(sharedObj.income).to.equal(null);
        });
        it("Should have property named 'changeIncome'", () => {
            expect(sharedObj).to.have.property('changeIncome');
        });
        it("Should return function for property type of 'changeIncome'", () => {
            expect(typeof sharedObj.changeIncome).to.equal('function');
        });
        it("Should have property named 'changeName'", () => {
            expect(sharedObj).to.have.property('changeName');
        });
        it("Should return function for property type of 'changeName'", () => {
            expect(typeof sharedObj.changeName).to.equal('function');
        });
        it("Should have property named 'updateName'", () => {
            expect(sharedObj).to.have.property('updateName');
        });
        it("Should return function for property type of 'changeName'", () => {
            expect(typeof sharedObj.updateName).to.equal('function');
        });
        it("Should have property named 'updateIncome'", () => {
            expect(sharedObj).to.have.property('updateIncome');
        });
        it("Should return function for property type of 'changeName'", () => {
            expect(typeof sharedObj.updateIncome).to.equal('function');
        });
    });
    describe("Test functionality", () => {
        describe("Test changeName(name)", () => {
            it("Should update the name property and name element value to 'newName'", () => {
                let newName = "newName";
                sharedObj.changeName(newName);
                expect(sharedObj.name).to.equal(newName);
                expect($('#name').val()).to.equal(newName);
            });
            it("Should not update name property and id=#name element value to ''", () => {
                let newName = "Ivan";
                sharedObj.changeName(newName);
                sharedObj.changeName("");
                expect(sharedObj.name).to.equal(newName);
                expect($('#name').val()).to.equal(newName);
            });
            it("Should not update name property and id=#name element value to ''", () => {
                let newName = "";
                sharedObj.changeName(newName);
                expect(sharedObj.name).to.equal(null);
            });
            /*it("Should not update name property and id=#name element value to {}", () => {
                let newName = {name:"Ivan"};
                sharedObj.changeName(newName);
                expect(sharedObj.name).to.equal(null);
                expect($('#name').val()).to.equal("");
            });*/
        });
        describe("Test changeIncome(income)", () => {
            it("Should update the income property and income element value to 22", () => {
                let newIncome = 22;
                sharedObj.changeIncome(newIncome);
                expect(sharedObj.income).to.equal(newIncome);
                expect($('#income').val()).to.equal(String(newIncome));
            });
            it("Should not update the income property and income element value to 0", () => {
                let newIncome = 0;
                sharedObj.changeIncome(newIncome);
                expect(sharedObj.income).to.equal(null);
                expect($('#income').val()).to.equal('');
            });
            it("Should not update the income property and income element value to -1", () => {
                let newIncome = -1;
                sharedObj.changeIncome(newIncome);
                expect(sharedObj.income).to.equal(null);
                expect($('#income').val()).to.equal('');
            });
            it("Should not update the income property and income element value to 'Goshko'", () => {
                let newIncome = 'Goshko';
                sharedObj.changeIncome(newIncome);
                expect(sharedObj.income).to.equal(null);
                expect($('#income').val()).to.equal('');
            });
            it("Should not update the income property and income element value to 1.5", () => {
                let newIncome = 1.5;
                sharedObj.changeIncome(newIncome);
                expect(sharedObj.income).to.equal(null);
                expect($('#income').val()).to.equal('');
            });
            it("Should not update the income property and income element value to ''", () => {
                let newIncome = '';
                sharedObj.changeIncome(newIncome);
                expect(sharedObj.income).to.equal(null);
                expect($('#income').val()).to.equal('');
            });
        });
        describe("Test updateName()", () => {
            it("Should change the name property with 'GoshkoAgain'", () => {
                let newNameValue = 'GoshkoAgain';
                $('#name').val(newNameValue);
                sharedObj.updateName();
                expect(sharedObj.name).to.equal(newNameValue);
            });
            it("Should not change the name property from null to ''", () => {
                let newNameValue = '';
                $('#name').val(newNameValue);
                sharedObj.updateName();
                expect(sharedObj.name).to.equal(null);
            });
        });
        describe("Test updateName()", () => {
            it("Should change the income property with 224", () => {
                let newIncomeValue = 224;
                $('#income').val(newIncomeValue);
                sharedObj.updateIncome();
                expect(sharedObj.income).to.equal(newIncomeValue);
            });
            it("Should change the income property with '224'", () => {
                let newIncomeValue = '224';
                $('#income').val(newIncomeValue);
                sharedObj.updateIncome();
                expect(sharedObj.income).to.equal(Number(newIncomeValue));
            });
            it("Should change the income property with 224.22", () => {
                let newIncomeValue = 224.22;
                $('#income').val(newIncomeValue);
                sharedObj.updateIncome();
                expect(sharedObj.income).to.equal(null);
            });
            it("Should change the income property with '223.1'", () => {
                let newIncomeValue = '223.1';
                $('#income').val(newIncomeValue);
                sharedObj.updateIncome();
                expect(sharedObj.income).to.equal(null);
            });
            it("Should change the income property with 'GoshkoThree'", () => {
                let newIncomeValue = 'GoshkoThree';
                $('#income').val(newIncomeValue);
                sharedObj.updateIncome();
                expect(sharedObj.income).to.equal(null);
            });
            it("Should change the income property with ''", () => {
                sharedObj.updateIncome();
                expect(sharedObj.income).to.equal(null);
            });
        });
    });
});