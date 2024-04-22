function passwordValidator(password) {

    let isValidLength = checkLength(password);
    let hasOnlyLettersDiggits = checkOnlyLettersDiggits(password);
    let hasMinTwoDiggits = checkDiggitsCount(password);

    if (isValidLength === true && hasOnlyLettersDiggits === true && hasMinTwoDiggits === true) {
        console.log(`Password is valid`);
    }


    function checkLength(word) {
        if (word.length < 6 || word.length > 10) {
            console.log(`Password must be between 6 and 10 characters`);

            return false;
        } else {
            return true;
        }
    }

    function checkOnlyLettersDiggits(word) {
        let pattern = /^[A-Za-z0-9]+$/;
        let isValid = pattern.test(word);

        if (isValid === true) {
            return true;
        } else {
            console.log(`Password must consist only of letters and digits`);
            return false;
        }
    }

    function checkDiggitsCount(word) {
        let pattern = /[0-9]{2,}/;
        let isValid = pattern.test(word);

        if (isValid === true) {
            return true;
        } else {
            console.log(`Password must have at least 2 digits`);
            return false;
        }
    }
}
passwordValidator('logIn');