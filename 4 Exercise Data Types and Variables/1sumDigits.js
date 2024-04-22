function sumDigits(num) {
    let sum = 0;
    let inString = num.toString();

    for (i = 0; i < inString.length; i++) {
        sum += Number(inString[i]);
    }
    console.log(sum);
}
sumDigits(245678);