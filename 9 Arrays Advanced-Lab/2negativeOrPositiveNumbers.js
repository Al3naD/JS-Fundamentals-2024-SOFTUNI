function negativeOrPositiveNumbers(arr) {

    let arrAsNum = arr.map(n => Number(n));
    let newArr=[];

    for (let i = 0; i < arrAsNum.length; i++) {
       let curNum= arr[i];

       if (curNum < 0){
        newArr.unshift(arr[i]);
       }else{
        newArr.push(arr[i]);
       }
    }
    console.log(newArr.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);