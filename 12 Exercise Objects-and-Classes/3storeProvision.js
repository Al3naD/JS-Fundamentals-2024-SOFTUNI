function storeProvision(stock, oredredProducts) {
    let products = [];

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let productQty = Number(stock[i + 1]);

        let productObj = {
            name: product,
            qty: productQty,
        };

        products.push(productObj);
    }


    for (let j = 0; j < oredredProducts.length; j += 2) {

        let product = oredredProducts[j];
        let productQty = Number(oredredProducts[j + 1]);

        let productFind = products.find(p => p.name === product);

        if (productFind) {
            productFind.qty += productQty;
        } else {
            let productObj = { name: product, qty: productQty };
            products.push(productObj);
        }
    }
    for (let curProduct of products) {
        console.log(`${curProduct.name} -> ${curProduct.qty}`);
    }
}

storeProvision(
    ['Chips', '5',
        'CocaCola', '9',
        'Bananas', '14',
        'Pasta', '4',
        'Beer', '2'],

    ['Flour', '44',
        'Oil', '12',
        'Pasta', '7',
        'Tomatoes', '70',
        'Bananas', '30']);