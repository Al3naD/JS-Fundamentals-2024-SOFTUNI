function race(arr) {
    let participants = {};
    let participantsArr = arr.shift().split(', ');

    for (let person of participantsArr) {
        participants[person] = 0;
    }

    let regexpName = /[A-Za-z]+/g;
    let regexpDistance = /[0-9]/g

    for (let line of arr) {
        if (line === 'end of race') {
            break;
        }

        let name = line.match(regexpName).join('');
        let distance = 0;
        let distanceAsArr = line.match(regexpDistance).join('');
        for (let el of distanceAsArr) {
            distance += Number(el);
        }

        if (participants.hasOwnProperty(name)) {
            participants[name] += distance
        }

    }
    let sortArr = Object.entries(participants).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortArr[0][0]}`);
    console.log(`2nd place: ${sortArr[1][0]}`);
    console.log(`3rd place: ${sortArr[2][0]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])