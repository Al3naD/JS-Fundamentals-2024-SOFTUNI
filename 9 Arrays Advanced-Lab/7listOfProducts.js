function listOfProducts(arr) {

    let sortTheProducts = arr.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let i = 0; i < sortTheProducts.length; i++) {
        let curProduct = sortTheProducts[i]
        console.log(`${i + 1}.${curProduct}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples',]);
