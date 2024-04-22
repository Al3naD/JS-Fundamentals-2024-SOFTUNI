function storage(arr) {

    let storageItems = {};

    for (let info of arr) {
        let [item, qty] = info.split(' ');

        if (item in storageItems) {
            storageItems[item] += Number(qty)
        } else {
            storageItems[item] = Number(qty);
        }
    }

    let sortedArr = Object.entries(storageItems);

    for (let [item, qty] of sortedArr) {

        console.log(`${item} -> ${qty}`);
    }

}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);