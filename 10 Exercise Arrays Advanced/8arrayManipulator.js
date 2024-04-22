function arrayManipulator(nums, commands) {

  for (let command of commands) {
    let tokens = command.split(' ');
    let action = tokens.shift();

    if (action === 'add') {
      let index = Number(tokens.shift());
      let item = Number(tokens.shift());
      nums.splice(index, 0, item);
    }
    else if (action === 'addMany') {
      let index = Number(tokens.shift());

      for (let item of tokens) {
        item = Number(item);
        nums.splice(index, 0, item);
        index++;
      }
    }
    else if (action === 'contains') {
      let item = Number(tokens.shift());
      let index = nums.indexOf(item);
      console.log(index);
    }
    else if (action === 'remove') {
      let index = Number(tokens.shift());
      nums.splice(index, 1);
    }
    else if (action === 'shift') {
      let rotations = Number(tokens.shift());
      for (let curRotation = 1; curRotation <= rotations; curRotation++) {
        let firstItem = nums.shift();
        nums.push(firstItem);
      }
    }
    else if (action === 'sumPairs') {
      let pairedNums = [];

      for (let i = 0; i < nums.length; i += 2) {
        if (i + 1 < nums.length) {
          let pairSum = nums[i] + nums[i + 1];
          pairedNums.push[pairSum];
        } else {
          pairedNums.push(nums[i]);
        }
      }
      nums = pairedNums;
    }
    else if (action === 'print') {
      console.log(`[ ${nums.join(', ')} ]`);
    }
  }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
  ['add 1 8', 'contains 1', 'contains 3', 'print']);