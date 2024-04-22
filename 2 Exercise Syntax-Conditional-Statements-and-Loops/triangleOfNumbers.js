function triangleOfNumbers(maxNum) {

    for(let curNum=1 ; curNum <= maxNum; curNum++){
        console.log(`${curNum} `.repeat(curNum));
    }

}
triangleOfNumbers(6);