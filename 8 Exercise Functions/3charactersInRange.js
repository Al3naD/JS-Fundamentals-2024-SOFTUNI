function charactersInRange(a, b) {

    let startChar = '';
    let endChar = '';
    let result = [];

    if (a.charCodeAt() > b.charCodeAt()) {
        startChar = b.charCodeAt();
        endChar = a.charCodeAt();
    } else {
        startChar = a.charCodeAt();
        endChar = b.charCodeAt();
    }

    for (let i = startChar + 1; i < endChar; i++) {
        let con = String.fromCharCode(i);
        result.push(con);
    }
    console.log(result.join(' '));

}
charactersInRange('a', 'd');