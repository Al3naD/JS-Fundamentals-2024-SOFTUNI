function passwordGenerator(arr) {

    let [str1, str2, replacementStr] = arr;
    let concatenatedStr = str1 + str2;

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let index = 0;

    for (let curLetter of concatenatedStr) {
        if (vowels.includes(curLetter)) {
            concatenatedStr = concatenatedStr.replace(curLetter, replacementStr[index].toUpperCase());
            index++;

            if (index >= replacementStr.length) {
                index = 0;
            }
        }
    }
    let password = concatenatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange']);