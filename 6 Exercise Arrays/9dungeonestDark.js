function dungeonestDark(arr) {

    let health = 100;
    let coins = 0;
    let roomsInfo = arr.shift();
    let roomsAsArr = roomsInfo.split('|');
    let bestRoomCount = 1;

    for (let room of roomsAsArr) {
        let elements = room.split(' ');
        let command = elements[0];
        let num = Number(elements[1]);

        if (command === 'potion') {
            let hpGiven = num;

            if (health + hpGiven > 100) {
                hpGiven = 100 - health;
            }

            health += hpGiven;

            console.log(`You healed for ${hpGiven} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            let monsterName = command;
            let monsterAttack = num;

            health -= monsterAttack;

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoomCount}`);
                break;
            }

        }
        bestRoomCount++
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);