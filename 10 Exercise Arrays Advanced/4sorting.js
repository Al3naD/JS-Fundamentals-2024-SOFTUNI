function sorting(arr) {

    let newArr = [];

    arr.sort((a, b) => {            //сортираме масива към по=голямото число :
        return a - b               // => [1, 2, 3, 18, 21, 31, 52, 63, 69, 94]
    });

    while (arr.length > 0) {

        let biggestNum = arr.pop(); //премахва последното число от [1, 2, 3, 18, 21, 31, 52, 63, 69, 94]
        newArr.push(biggestNum);
        let smallestNum = arr.shift(); ////премахва първото число от [1, 2, 3, 18, 21, 31, 52, 63, 69, 94]
        newArr.push(smallestNum);
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);