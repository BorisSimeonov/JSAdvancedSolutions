function* fibonacci() {
    let counter = -1;
    let first = 0,
        second = 0;
    while(true) {
        let sum = first + second;
        if(sum < 1) {
            yield 1;
            second = 1;
            continue;
        }

        yield sum;
        first = second;
        second = sum;
    }
}

let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);


/*let fib = fibonacci();

for (let number of fib) {
    console.log(number);
}*/
