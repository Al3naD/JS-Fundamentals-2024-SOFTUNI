function reverseAnArrayOfNumbers(n, array) {

    let newArray = array.slice(0, n);
    let reversedArr = newArray.reverse();
    console.log(reversedArr.join(' '));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);


function reverseAnArrayOfNumbers(n, array) {

    let newArray = [];

    for (let index = 0; index < n; index++) {
        let currNum = array[index];
        newArray.unshift(currNum);
    }
    console.log(newArray.join(' '));
    
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);