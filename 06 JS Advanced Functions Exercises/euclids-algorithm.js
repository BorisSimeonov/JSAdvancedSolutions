function greatestCommonDivisor(numOne, numTwo) {
    let remain;
    let multiplier;

    do {
        multiplier = Math.floor(numOne / numTwo);
        remain = numOne % numTwo;
        numOne = numTwo;
        numTwo = remain;

    } while (remain !== 0);
    return numOne;
}
