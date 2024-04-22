function findingSmallestNumber(num1, num2, num3) {
    // console.log(Math.min(num1, num2, num3)); решение с метод!

    let temporarySmallest = findSmallerNum(num1, num2);
    let smallestNum= findSmallerNum(temporarySmallest,num3);

    function findSmallerNum(num1, num2) {
        if (num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    }
    console.log(smallestNum);
}
findingSmallestNumber(2, 5, 3);