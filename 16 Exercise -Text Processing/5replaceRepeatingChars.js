function replaceRepeatingChars(text) {

    let newStr = '';

    for (let index in text) {

        if (index === 0) {
            newStr += text[index];
        } else {
            if (text[index] != text[index - 1]) {
                newStr += text[index];
            }
        }
    }
    console.log(newStr);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')