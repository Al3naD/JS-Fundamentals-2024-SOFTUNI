function revealWords(wordsStr, text) {
    let words = wordsStr.split(', ');

    for (let word of words) {

        let wordLength = word.length;
        let starTemplate = '*'.repeat(wordLength)
        text = text.replace(starTemplate, word);

    }
    console.log(text);
}

// revealWords('great',
// 'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')