function makeIterable(passedObject) {
    let keys = Object.keys(passedObject).sort((a, b) => b.localeCompare(a));
    let index = 0;
    return {
        next: function () {
            return (index < keys.length) ? {
                done: false,
                value: keys[index++]
            } :
            {done: true}
        }
    }
}


let obj = {name: "gosho", "13": true, book: "Lord of the Drinks", 2: 2, age: 15, passportNumber: 12345678};
let iterator = makeIterable(obj);
while (true) {
    let res = iterator.next();
    if (res.done) break;
    console.log(res.value);
}

