function maxNumber(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let curNumber = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNumber = arr[j];

            if (curNumber <= rightNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            newArr.push(curNumber);
        }
    }
    console.log(newArr.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);