function simpleCalculator(numOne, numTwo, operator) {

    let res = 0;
    switch (operator) {
        case 'multiply':
            res = (a, b) => a * b;
            break;
        case 'divide':
            res = (a, b) => a / b;
            break;
        case 'add':
            res = (a, b) => a + b;
            break;
        case 'subtract':
            res = (a, b) => a - b;
            break;
    }
    console.log(res(numOne, numTwo));
}
simpleCalculator(5, 5, 'multiply');