function equalArrays(arr1, arr2) {
  let num1 = 0;
  let num2 = 0;
  let areEqual = true;
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    num1 = Number(arr1[i]);
    sum+= num1;

    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;

    } else if (arr1[i] === arr2[2]) {
      areEqual= true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    num2 = Number(arr2[i]);
  }

  if (areEqual === true) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1'], ['10']);