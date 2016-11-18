function* lookAndSay(start) {
    let sequence = start.toString().split('').map(Number);
    while(true) {
        changeSequence();
        yield sequence.join('');
    }

    function changeSequence() {
        let previousNumber,
            previousCount,
            newSequence = [];
        for(let i = 0; i < sequence.length; ++i) {
            if(previousNumber !== sequence[i]) {
                if(previousNumber !== undefined) {
                    newSequence.push(previousCount);
                    newSequence.push(previousNumber);
                }
                previousNumber = sequence[i];
                previousCount = 1;
            } else {
                ++previousCount;
            }

            if(i === sequence.length -1) {
                newSequence.push(previousCount);
                newSequence.push(previousNumber);
            }
        }
        sequence = newSequence;
    }
}

let lookSequence = lookAndSay(1);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log();
let lookSequenceTwo = lookAndSay(113);
console.log(lookSequenceTwo.next().value);
console.log(lookSequenceTwo.next().value);
console.log(lookSequenceTwo.next().value);
console.log(lookSequenceTwo.next().value);
console.log(lookSequenceTwo.next().value);



