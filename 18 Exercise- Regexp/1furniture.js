function furniture(arr) {
    console.log(`Bought furniture:`);
    
    let regexpPattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<qty>\d+)/;
    let price = 0;

    for (let line of arr) {
        if (line === 'Purchase') {
            break;
        }

        if (regexpPattern.test(line)) {
            let product = regexpPattern.exec(line);
            let curPrice = Number(product.groups.price) * Number(product.groups.qty);
            price += curPrice;
            console.log(product.groups.name);
        }
    }
    console.log(`Total money spend: ${price.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])