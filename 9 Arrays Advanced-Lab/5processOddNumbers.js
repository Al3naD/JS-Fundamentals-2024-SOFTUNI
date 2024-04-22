function processOddNumbers(arr) {

    let sum = 0;
    let newArr = [];
    for (let index = 1; index < arr.length; index++) {
        let num = Number(arr[index]);
        if (index % 2 !== 0) {
            sum = num * 2;
            newArr.unshift(sum);
        }
    }
    console.log(newArr.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);