function palindromeIntegers(arr) {

    let curNum=0;

    for (let i = 0; i < arr.length; i++) {
        curNum = Number(arr[i]);
        let isPalindrome= checkIfPalindrome(curNum);
        console.log(isPalindrome);
    }

    function checkIfPalindrome(number) {
        let curNumAsStr = curNum.toString();
        let reversedStr = curNumAsStr.split('').reverse().join('');

        if (curNumAsStr === reversedStr) {
            return true;
        } else {
            return false;
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32,2,232,1010]);


