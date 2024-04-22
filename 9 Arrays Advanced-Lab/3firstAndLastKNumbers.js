function firstAndLastKNumbers(input) {

    let howMany = input.shift();

    let firstK = input.slice(0, howMany);
    let lastK = input.slice(input.length - howMany,)

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers
    ([2, 7, 8, 9]);