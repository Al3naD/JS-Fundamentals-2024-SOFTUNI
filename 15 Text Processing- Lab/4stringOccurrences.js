function stringOccurrences(text, word) {

    let stringInWords = text.split(' ');
    let counter = 0;

    for (curWord of stringInWords) {
        if (curWord === word) {
            counter++;
        }
    }
    console.log(counter);
}
stringOccurrences(
    'This is a word and it also is a sentence',
    'is')