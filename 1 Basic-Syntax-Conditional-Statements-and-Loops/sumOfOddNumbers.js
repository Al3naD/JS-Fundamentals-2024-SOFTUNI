function sumOfOddNumbers (number) {

    let ourNumber = number;
    let sum = 0;

    let countNumbers = 0;
    let currentValue = 1;

    while (countNumbers !== ourNumber) {
        if (currentValue % 2 !== 0) {
            console.log(currentValue);

            countNumbers++;
            sum += currentValue;
        }
        currentValue++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);