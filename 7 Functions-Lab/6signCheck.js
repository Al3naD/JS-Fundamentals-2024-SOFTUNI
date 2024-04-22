function signCheck(num1, num2, num3) {

    function num1Andnum2Multiplied(one, two) {
        return one * two;
    }

    let num1Andnum2Result = num1Andnum2Multiplied(num1, num2);
    let finalResult = num1Andnum2Result * num3;

    if (finalResult < 0) {
        console.log(`Negative`);
    } else {
        console.log(`Positive`);
    }
}
signCheck(5, 12, -15);