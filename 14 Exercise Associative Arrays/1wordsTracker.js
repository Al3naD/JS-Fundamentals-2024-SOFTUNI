function wordsTracker(arr) {

    let searchedWords = arr.shift().split(' ');
    let wordOcurrances = {};

    for (let word of searchedWords) {
        wordOcurrances[word] = 0;

    }

    for (let currWord of arr) {
        if (currWord in wordOcurrances) {
            wordOcurrances[currWord]++;
        }
    }

    let entries = Object.entries(wordOcurrances).sort((a, b) => b[1] - a[1]);

    for (let [word, occurenceCount] of entries) {
        console.log(`${word} - ${occurenceCount}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);