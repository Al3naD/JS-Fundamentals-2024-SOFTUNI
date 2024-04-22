function specialNumbers(number) {
    let isTrue = "";
    let sum = 0;

    for (let i = 1; i <= number; i++) {

        sum = i % 10 + parseInt(i / 10);

        isTrue = sum === 5 || sum === 7 || sum === 11;
        console.log(isTrue ? `${i} -> True` : `${i} -> False`);
        sum = 0;

    }
}

specialNumbers(15);