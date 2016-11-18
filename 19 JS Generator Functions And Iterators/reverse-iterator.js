function reverseArrayIterator(array) {
    let index = array.length - 1;
    function next() {
        return (index >= 0) ? {
            value: array[index--],
            done: false
        } :
        {done: true};
    }
    return {next: next};
}


let iterator = reverseArrayIterator([10, 20, 30]);
while (true) {
    let item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}
