function sumFirstAndLast(arr) {

    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());

    console.log(firstNum + lastNum);
}
sumFirstAndLast(['20', '30', '40']);