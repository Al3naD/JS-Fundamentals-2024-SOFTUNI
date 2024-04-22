function repeatString(string, repeatCount) {

    let result = [];
    for (let i = 1; i <= repeatCount; i++) {

        result += string;
    }
    console.log(result);
  
}
repeatString("abc", 3)



 // console.log(string.repeat(repeatCount)); //с метода REPEAT