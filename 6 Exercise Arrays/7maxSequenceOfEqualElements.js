function maxSequenceOfEqualElements(arr) {

    let repeatedElement = 1;
    let length = 1;
    let indexOfLength = 1;

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] === arr[i + 1]) {
            repeatedElement++;

        } else {
            if (repeatedElement > length) {
                length = repeatedElement;
                indexOfLength = i - repeatedElement + 1;
            }
            
            repeatedElement = 1;
        }
    }
    let result = arr.slice(indexOfLength, indexOfLength + length);
    console.log(result.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);