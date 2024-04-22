function aMinerTask(arr) {

    let recourceQtys = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if (resource in recourceQtys) {
            recourceQtys[resource] += qty;
        } else {
            recourceQtys[resource] = qty;
        }
    }
    let entries = Object.entries(recourceQtys);

    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);

    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);