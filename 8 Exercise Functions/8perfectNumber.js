function perfectNumber(num) {

    let isPerfect = true;
    let sum = 0;


    for (let i = 1; i < num; i++) {
        let divisor = Number(i);
        let result = num / divisor;

        if (result % 1 === 0) {
            sum += divisor;
        }

        if (sum !== num) {
            isPerfect = false;
        } else {
            isPerfect = true;
        }

    }

    if (isPerfect) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(1236498);