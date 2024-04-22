function addAndSubtract(num1, num2, num3) {

    let tempResult = sum(num1, num2);
    let result = subtract(tempResult, num3);

    function sum(x, y) {
        return x + y;
    }

    function subtract(a, b) {
        return a - b;
    }

    console.log(result);
}
addAndSubtract(23, 6, 10);