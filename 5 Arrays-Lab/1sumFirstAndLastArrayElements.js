function sumFirstAndLastArrayElements(input) {

    let firstEl = input[0];
    let lastEl = input[input.length - 1];
    let sum = firstEl + lastEl;

    console.log(sum);

}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);