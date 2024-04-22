function reverseString(word) {

    let newWord = ' ';

    for (i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    console.log(newWord);
}
reverseString('Hello');