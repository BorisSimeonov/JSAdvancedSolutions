"use strict";
let expect = require('chai').expect;
let assert = require('chai').assert;
let sortedList = require('../sorted-list').SortedList;

describe('Test for SortedList', () => {
    let slInstance;
    beforeEach(function () {
        slInstance = new sortedList();
    });
    describe('Test for properties', () => {
        it('Should have property add()', () => {
           expect(slInstance).have.property('add');
        });
        it('Should have property remove()', () => {
            expect(slInstance).have.property('remove');
        });
        it('Should have property get()', () => {
            expect(slInstance).have.property('get');
        });
        it('Should have property size', () => {
            expect(slInstance).have.property('size');
        });
    });
    describe('Test for get() and remove()', () => {
        describe('Test with empty collection', () => {
            it('Should throw error on call of get() on empty list', (done) => {
                try {
                    slInstance.get();
                    assert.fail();
                } catch(error) {
                    done();
                }
            });
            it('Should throw error on call of remove() on empty list', (done) => {
                try {
                    slInstance.remove();
                    assert.fail();
                } catch(error) {
                    done();
                }
            });
        });
        describe('Test with negative index', () => {
            it('Should throw error on call of get() with negative index', (done) => {
                try {
                    slInstance.add(2);
                    slInstance.get(-1);
                    assert.fail();
                } catch(error) {
                    done();
                }
            });
            it('Should throw error on call of remove() with negative index', (done) => {
                try {
                    slInstance.add(2);
                    slInstance.remove(-1);
                    assert.fail();
                } catch(error) {
                    done();
                }
            });
        });
        describe('Test with index outside the collection', () => {
            it('Should throw error on call of get() with index outside the collection', (done) => {
                try {
                    slInstance.add(2);
                    slInstance.get(11);
                    assert.fail();
                } catch(error) {
                    done();
                }
            });
            it('Should throw error on call of remove() with index outside the collection', (done) => {
                try {
                    slInstance.add(2);
                    slInstance.remove(11);
                    assert.fail();
                } catch(error) {
                    done();
                }
            });
        });
    });
    describe('Test for size property', () => {
        it('Should return 0 on empty collection', () => {
            expect(slInstance.size).to.equal(0);
        });
        it('Should return 2 after two adds', () => {
            slInstance.add(2);
            slInstance.add(3);
            expect(slInstance.size).to.equal(2);
        });
    });
    describe('Test for add(), get() and remove()', () => {
        it('Should return 2 after two adds', () => {
            slInstance.add(2);
            slInstance.add(3);
            slInstance.remove(0);
            expect(slInstance.get(0)).to.equal(3);
        });
        it('Should return 2 after two adds', () => {
            slInstance.add(2);
            slInstance.add(3);
            slInstance.remove(1);
            expect(slInstance.get(0)).to.equal(2);
        });
        it('Should return 2 after two adds', () => {
            slInstance.add(-5);
            slInstance.add(-4);
            slInstance.add(-3);
            expect(slInstance.get(2)).to.equal(-3);
        });
    });
    describe('Test for sort in ascending state', () => {
       it('Should keep the collection in ascending order', () => {
           slInstance.add(22);
           slInstance.add(11);
           slInstance.add(5);
           expect(slInstance.get(2)).to.equal(22);
           slInstance.add(12);
           expect(slInstance.get(2)).to.equal(12);
           slInstance.add(55);
           expect(slInstance.get(0)).to.equal(5);
           expect(slInstance.get(4)).to.equal(55);
       });
    });
});