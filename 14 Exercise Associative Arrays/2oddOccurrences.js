function oddOccurrences(input) {
    let words = input.split(' ').map(el => el.toLowerCase());
    let collection = {};
    let uniqueWords = [];

    for (let curWord of words) {
        if (!collection[curWord]) {
            uniqueWords.push(curWord)
        }

        if (collection[curWord]) {
            collection[curWord] += 1;
        } else {
            collection[curWord] = 1;
        }
    }

    let result = uniqueWords.filter(curWord => collection[curWord] % 2 !== 0);

    console.log(result.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');