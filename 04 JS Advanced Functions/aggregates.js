function aggregate(input) {
    function reducer(array, func) {
        let result = array[0];
        for (let element of array.slice(1)) {
            result = func(result, element);
        }
        return result;
    }

    console.log('Sum = ' + reducer(input, (a, b) => {
            return (a + b)
        }));
    console.log('Min = ' + reducer(input, (a, b) => {
            if (a < b)
                return a;
            else
                return b;
        }));
    console.log('Max = ' + reducer(input, (a, b) => {
            if (a > b)
                return a;
            else
                return b;
        }));
    console.log('Product = ' + reducer(input, (a, b) => {
            return (a * b)
        }));
    console.log('Join = ' + reducer(input, (a, b) => {
            return (String(a) + b)
        }));
}
