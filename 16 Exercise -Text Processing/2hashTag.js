function hashTag(text) {
    let textSplit = text.split(' ');
    let allHashTags = textSplit.filter(word => word.startsWith('#') && word.length > 1);

    for (let hashTag of allHashTags) {
        let specialWord = hashTag.slice(1);

        let pattern = /\b[A-Za-z]+\b/;

        if (pattern.test(specialWord)) {
            console.log(specialWord);
        }
    }
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')