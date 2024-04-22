function searchForANumber(arr1, arr2) {

    let [elemenToTake, elemenToDelete, searchingElement] = arr2;
    let searchedElCount = 0;

    let newArr = arr1.splice(0, elemenToTake);
    newArr.splice(0, elemenToDelete);

    for (let curElement of newArr) {
        if (curElement === searchingElement) {
            searchedElCount++;
        
        }
    }
    console.log(`Number ${searchingElement} occurs ${searchedElCount} times.`);
}
// searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 5, 8, 5, 5], [6, 1, 5]);