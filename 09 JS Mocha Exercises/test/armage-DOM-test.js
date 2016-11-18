let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = require('../armageDOM').nuke;

describe("Test for nuke(selector1, selector2)", () => {
    beforeEach(() => {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some <span>more</span> text</span>
                </div>
            </div>`
    });
    describe("Test normal functionality", () => {
        it("Should remove all elements that have '.nested .target' selectors only", () => {
            let initialTargetCount = $('.target').length;
            let initialNestedTargetCount = $('.nested').filter('.target').length;
            let initialNestedCount = $('.nested').length;
            nuke('.nested', '.target');
            expect($('.nested').filter('.target')
                .length)
                .to.equal(0);
            expect($('.target').length)
                .to.equal(initialTargetCount - initialNestedTargetCount);
            expect($('.nested').length)
                .to.equal(initialNestedCount - initialNestedTargetCount);
        });
    });
    describe("Test invalid input", () => {
        it("Should not make changes with invalid first selector", () => {
            let targetLast = $('#target').html();
            nuke('iAmInvalidAsHell', '.inside');
            expect($('#target').html()).to.equal(targetLast);
        });
        it("Should not make changes for only one selector", () => {
            let targetLast = $('#target').html();
            nuke('#target');
            expect($('#target').html()).to.equal(targetLast);
        });
        it("Should not make changes for same selectors", () => {
            let targetLast = $('body').html();
            nuke('.target', '.target');
            expect($('body').html()).to.equal(targetLast);
        });
        it("Should not make changes for same selectors", () => {
            let targetLast = $('body').html();
            nuke(true, true);
            expect($('body').html()).to.equal(targetLast);
        });
    });
});