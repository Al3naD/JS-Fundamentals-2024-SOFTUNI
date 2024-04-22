function bombNumbers(arr1, arr2) {

    let sum = 0;

    let [bomb, power] = arr2;
    let indexBomb = arr1.indexOf(bomb);


    while (arr1.includes(bomb)) {

        let numsToRemove = (power * 2) + 1;
        let startIndex = indexBomb - power;


        if (startIndex < 0) {
            numsToRemove += startIndex;
            startIndex = 0;
        }
        arr1.splice(startIndex, numsToRemove);

    }

    for (let i = 0; i < arr1.length; i++) {
        let num = Number(arr1[i]);
        sum += num;
    }

    console.log(sum);
}
bombNumbers([1, 2, 3, 4, 2, 2, 2, 9], [3, 3]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);