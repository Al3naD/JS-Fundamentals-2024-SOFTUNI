function reverseInPlace(arr) {

    let reversed = arr.reverse();
    let newText = reversed.join(' ');
    console.log(newText);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);