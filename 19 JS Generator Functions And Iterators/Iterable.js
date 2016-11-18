function reverseArrayIterable(array) {
    let index = array.length - 1;

    return {
        [Symbol.iterator]: function () {
            return this;
        },
        next: function () {
            return (index >= 0) ? {
                value: array[index--],
                done: false
            } :
            {done: true};
        }
    }
}

for (let item of reverseArrayIterable([10, 20, 30])) {
    console.log(item);
}
