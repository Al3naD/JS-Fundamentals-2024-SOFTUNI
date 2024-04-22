function cutAndReverse(text) {

    let index = text.length / 2;
    let firstSentence = text.substring(0, index).split('').reverse().join('');
    let secondSentence = text.substring(index, text.length).split('').reverse().join('');

    console.log(firstSentence);
    console.log(secondSentence);
}
// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')