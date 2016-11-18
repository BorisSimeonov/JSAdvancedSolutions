function result() {
    return (function () {
        let sOne, sTwo, sResult;

        let modifier = {
            init: (selectorOne, selectorTwo, resultSelector) => {
                this.sOne = $(selectorOne);
                this.sTwo = $(selectorTwo);
                this.sResult = $(resultSelector);
            },
            add: () => {
                this.sResult.val(
                    (Number(this.sOne.val()) + Number(this.sTwo.val()))
                );
            },
            subtract: () => {
                this.sResult.val(
                    (Number(this.sOne.val()) - Number(this.sTwo.val()))
                );
            }
        };
        return modifier;
    })();
}
