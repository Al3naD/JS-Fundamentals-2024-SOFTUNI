function arrayManipulations(input) {

    let arr = input.shift().split(' ').map(Number);

    for (let elements of input) {
        let [command, firstNum, secondNum] = elements.split(' ');

        switch (command) {
            case 'Add': arr.push(Number(firstNum));
                break;
            case 'Remove': arr = arr.filter(num => num !== Number(firstNum));
                break;
            case 'RemoveAt': arr.splice(firstNum, 1);
                break;
            case 'Insert': arr.splice(secondNum, 0, firstNum);
                break;
        }
    }
    console.log(arr.join(' '));

}
arrayManipulations
    (['4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3']);