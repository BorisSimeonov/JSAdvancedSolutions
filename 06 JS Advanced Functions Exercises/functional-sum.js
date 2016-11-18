function add(num) {
    function calculate(x) {
        return add(num + x);
    }

    calculate.toString = () => {
        return num;
    };
    return calculate;
}
