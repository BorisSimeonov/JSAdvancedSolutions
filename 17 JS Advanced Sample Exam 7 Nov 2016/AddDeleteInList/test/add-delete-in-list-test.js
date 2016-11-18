let expect = require('chai').expect;
let list = require('../add-delete-in-list');

describe('Test for list object.', () => {
    beforeEach(function () {
        let hasRemoved;
        do {
            hasRemoved = list.delete(0);
        } while(hasRemoved);
    });
    it('Should return list = []', () => {
        expect(`list = [${list}]`).to.equal('list = []');
    });
    it('Should return list = [1]', () => {
        list.add(1);
        expect(`list = [${list}]`).to.equal('list = [1]');
    });
    it('Should return list = [1, tow, 3]', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(`list = [${list}]`).to.equal('list = [1, two, 3]');
    });
    it('Should return deleted: = two & list = [1, 3]', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        expect("deleted: " + list.delete(1)).to.equal('deleted: two');
        expect(`list = [${list}]`).to.equal('list = [1, 3]');
    });
    it('Should return undefined', () => {
        list.add(1);
        list.add(3);
        expect(list.delete(-1)).to.equal(undefined);
        expect(list.toString()).to.equal('1, 3');
    });
    it('Should return undefined', () => {
        list.add(1);
        list.add(3);
        expect(list.delete(2)).to.equal(undefined);
        expect(list.toString()).to.equal('1, 3');
    });
    it('Should return undefined', () => {
        list.add(1);
        list.add(3);
        expect(list.delete('ivan')).to.equal(undefined);
        expect(list.toString()).to.equal('1, 3');
    });
    it('Should return undefined', () => {
        expect(list.delete()).to.equal(undefined);
        expect(list.toString()).to.equal('');
    });
});