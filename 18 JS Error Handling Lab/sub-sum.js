function subsum(elements, startIndex, endIndex) {
    if(elements.constructor !== Array) return NaN;
    if(startIndex < 0) startIndex = 0;
    if(endIndex > elements.length - 1) endIndex = elements.length - 1;

    let sum = 0;
    for(let i = startIndex; i <= endIndex; ++i) {
        sum += Number(elements[i]);
    }

    return sum;
}


console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum([], 0, 0));
console.log(subsum('text', 0, 2));