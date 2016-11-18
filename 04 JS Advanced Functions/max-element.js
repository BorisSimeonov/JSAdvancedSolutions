function commandProcessor(input) {
    let largest = input.splice(0, 1);
    for (let num of input) {
        largest = Math.max(largest, num);
    }
    return largest;
}
