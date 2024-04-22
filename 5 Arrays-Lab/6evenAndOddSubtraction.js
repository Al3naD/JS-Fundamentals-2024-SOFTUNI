function evenAndOddSubtraction(arr) {

    let sum = 0;

    for (let diggit = 0; diggit < arr.length; diggit++) {
        let number = Number(arr[diggit]);

        if (number % 2 === 0) {
            sum += number;
        } else {
            sum -= number;
        }
    }
    console.log(sum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);