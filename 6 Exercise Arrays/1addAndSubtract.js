function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;
    let newArr= [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = Number(arr[i]);
        oldSum += curNum;

        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }

        newArr.push(curNum);
        newSum += curNum;
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);