function meetings(input) {

    let meetings = {};

    input.forEach(info => {
        let [weekDay, name] = info.split(' ');

        if (!meetings.hasOwnProperty(weekDay)) {
            meetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        } else {
            console.log(`Conflict on ${weekDay}!`);
        }
    });

    let finalResult = Object.entries(meetings);

    finalResult.forEach(dayInfo => {

        let dayOfweek = dayInfo[0];
        let nameOfperson = dayInfo[1];
        console.log(`${dayOfweek} -> ${nameOfperson}`);
    })
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);