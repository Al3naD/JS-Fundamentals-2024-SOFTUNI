function houseParty(arr) {

    let guests = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        // console.log(command);

        for (let index = 0; index < command.length; index++) {
            let name = command[0];


            if (command.length === 3) {

                if (guests.includes(name)) {
                    console.log(`${name} is already in the list!`);
                    break;

                } else {
                    guests.push(name);
                    break;
                }
            }

            if (command.length === 4) {

                if (guests.includes(name)) {
                    let index = guests.indexOf(name);
                    guests.splice(index, 1);
                    break;

                } else {
                    console.log(`${name} is not in the list!`);
                    break;
                }
            }
        }
    }
    console.log(guests.join('\n'));
}

// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);