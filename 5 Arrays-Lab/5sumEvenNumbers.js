function sumEvenNumbers(arr) {
    let sum = 0;

    for (let diggit = 0; diggit < arr.length; diggit++) {
        let number = Number(arr[diggit]);

        if (number % 2 === 0) {
            sum += number;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3','5','7','9']);