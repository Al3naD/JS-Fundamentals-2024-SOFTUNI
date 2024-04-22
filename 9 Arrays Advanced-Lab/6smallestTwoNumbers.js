function smallestTwoNumbers(arr) {

    arr.sort((a, b) => {
        return a - b;
    });

    let newArr = [arr[0], arr[1]];
    console.log(newArr.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);