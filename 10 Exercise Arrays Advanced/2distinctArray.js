function distinctArray(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    console.log(newArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);