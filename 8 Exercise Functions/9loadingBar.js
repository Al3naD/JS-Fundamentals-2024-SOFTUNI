function loadingBar(number) {
   
    let diggit = number / 10
    let dotResult =10 - diggit;

    let procentageRepeat = '%'.repeat(diggit);
    let dotRepeat = '.'.repeat(dotResult);
    

    if (number < 100) {
        console.log(`${number}% [${procentageRepeat}${dotRepeat}]`);
        console.log(`Still loading...`);
    } else if (number === 100) {
        console.log(`100% Complete!`);
        console.log(`[${procentageRepeat}]`);
    }
}
loadingBar(100);