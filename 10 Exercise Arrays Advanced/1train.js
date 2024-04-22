function train(arr) {

    let waggons = arr.shift().split(' ').map(Number);
    let capacityWaggon = arr.shift();

    for (let element of arr) {
        let command = element.split(' ');

        if (command[0] === 'Add') {
            waggons.push(command[1]);
        } else {
            let passengers=Number(command[0]);
            for (let index = 0; index < waggons.length; index++) {
                if(waggons[index] + passengers <= capacityWaggon){
                    waggons[index]+=passengers;
                    break;
                }
            }
        }
    }
    console.log(waggons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);