function* reverseArrayGenerator(array) {
    let idx = array.length - 1;
    while(idx >= 0) {
        yield array[idx--];
    }
}

let arr = [10, 20, 30];
for (let item of reverseArrayGenerator(arr)) {
    console.log(item);
}
