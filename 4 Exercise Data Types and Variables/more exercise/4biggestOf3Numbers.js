function biggestOf3Numbers(a, b, c) {

    let biggestNum = 0;
    if (a >= b && a >= c) {
        biggestNum = a;
    } else if (b >= a && b >= c) {
        biggestNum = b;
    } else if (c >= a && c >= b) {
        biggestNum = c;
    }
    console.log(biggestNum);

}
// biggestOf3Numbers(2, 2, 2);
biggestOf3Numbers(130,5,99);