function oddAndEvenSum(num) {

    let numAsStr = num.toString();
    let [evenSum, oddSum] = resultEvenSum(numAsStr);

    function resultEvenSum(str) {
        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < numAsStr.length; i++) {
            let char = Number(numAsStr[i]);

            if (char % 2 === 0) {
                evenSum += char;
            } else {
                oddSum += char;
            }
        }
        return [evenSum, oddSum];
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435);



// function oddAndEvenSum(num) {

//     let numAsStr = num.toString();
//     let evenSum = 0;
//     let oddSum = 0;

//     for (let i = 0; i < numAsStr.length; i++) {
//         let char = Number(numAsStr[i]);

//         if (char % 2 === 0) {
//             evenSum += char;
//         } else {
//             oddSum += char;
//         }
//     }
//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
// }