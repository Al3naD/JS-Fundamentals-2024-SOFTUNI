function stringSubstring(word,text) {
    let textAsWords= text.toLowerCase().split(' ');

        if(textAsWords.includes(word)){
            console.log(word);
        }else{
            console.log(`${word} not found!`);
        }
    }


stringSubstring('javascript',
'JavaScript is the best programming language');

stringSubstring('python',
'JavaScript is the best programming language');