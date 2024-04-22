function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let fixedNum = num.toFixed(precision);

    console.log(parseFloat(fixedNum));

}
rounding(10.5, 3)