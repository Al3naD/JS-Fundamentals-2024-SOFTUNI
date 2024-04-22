function specialNumbers(num) {

  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = i % 10 + parseInt(i / 10);

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }

  }

}
specialNumbers(15);