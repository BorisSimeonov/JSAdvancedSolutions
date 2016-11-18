"use strict";
let createList = require('../list-add-swap-shift-left-right');
let expect = require('chai').expect;

describe('', () => {
    let list;
    beforeEach(function () {
        list = createList();
    });
    describe('Test add() and toString()', () => {
        it('Should return "1, two, 1,2,ivan, " at the end', () => {
            expect(list.toString()).to.equal('');
            list.add(1);
            expect(list.toString()).to.equal('1');
            list.add('two');
            list.add([1, 2, 'ivan']);
            list.add();
            expect(list.toString()).to.equal('1, two, 1,2,ivan, ');
        });
    });
    describe('Tests for shiftLeft()', () => {
        it('Should shift with rotation', () => {
            list.shiftLeft();
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.equal('1');
            list.add(2);
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.equal('2, 3, 1');
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.equal('1, 2, 3');
        });
    });
    describe('Tests for shiftRight()', () => {
        it('Should shift with rotation', () => {
            list.shiftRight();
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.equal('1');
            list.add(2);
            list.add(3);
            list.shiftRight();
            expect(list.toString()).to.equal('3, 1, 2');
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.equal('1, 2, 3');
        });
    });
    describe('Tests for swap()', () => {
        it('Should not change for swap()', () => {
            list.add(1);
            list.add(2);
            expect(list.swap()).to.equal(false);
            expect(list.toString()).to.equal('1, 2');
        });
        it('Should not change for swap(1)', () => {
            list.add(1);
            list.add(2);
            expect(list.swap(1)).to.equal(false);
            expect(list.toString()).to.equal('1, 2');
        });
        it('Should not change for swap(1,1)', () => {
            list.add(1);
            list.add(2);
            expect(list.swap(1,1)).to.equal(false);
            expect(list.toString()).to.equal('1, 2');
        });
        it('Should not change for wap(-1,1)', () => {
            list.add(1);
            list.add(2);
            expect(list.swap(-1,0)).to.equal(false);
            expect(list.toString()).to.equal('1, 2');
        });
        it('Should not change for swap(1,2) - 2 is outside', () => {
            list.add(1);
            list.add(2);
            expect(list.swap(0,2)).to.equal(false);
            expect(list.toString()).to.equal('1, 2');
        });
        it('Should swap and return true for swap(0,1)', () => {
            list.add(1);
            list.add(2);
            expect(list.swap(0,1)).to.equal(true);
            expect(list.toString()).to.equal('2, 1');
        });
        it('Should swap and return true for swap(1,0)', () => {
            list.add(1);
            list.add(2);
            expect(list.swap(1,0)).to.equal(true);
            expect(list.toString()).to.equal('2, 1');
        });
        it('Should not change for swap(0, "1")', () => {
            list.add(1);
            list.add('string');
            expect(list.swap(0,'1')).to.equal(false);
            expect(list.toString()).to.equal('1, string');
        });
        it('Should not change for swap("0", 1)', () => {
            list.add(1);
            list.add('string');
            expect(list.swap('0',1)).to.equal(false);
            expect(list.toString()).to.equal('1, string');
        });
        it('Should return true first and then false for swap(0,1,2) and swap(0,3,1)', () => {
            list.add(1);
            list.add('string');
            list.add(2);
            expect(list.swap(0,1,2)).to.equal(true);
            expect(list.swap(0,3,1)).to.equal(false);
            expect(list.toString()).to.equal('string, 1, 2');
        });
    });
});