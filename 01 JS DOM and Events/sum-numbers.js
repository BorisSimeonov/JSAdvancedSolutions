function calc() {
    return function () {
        let numOne = 0, numTwo = 0, sum = 0;
        numOne = Number(document.getElementById('num1').value);
        numTwo = Number(document.getElementById('num2').value);
        sum = numOne + numTwo;
        document.getElementById('sum').value = sum;
    }
}
