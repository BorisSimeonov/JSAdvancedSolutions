function fib(size) {
    "use strict";
    let getFibSequence = (() => {
        let fibNumbers = [];
        return function (seqSize) {
            for (let i = 0; i < seqSize; ++i) {
                if (i < 2) {
                    fibNumbers.push(1);
                } else {
                    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
                }
            }
            return fibNumbers;
        }
    })();

    return getFibSequence(size);
}
