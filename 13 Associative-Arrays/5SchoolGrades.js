function schoolGrades(input) {

    let studentBook = {};

    for (let studentInfo of input) {

        studentInfo = studentInfo.split(' ');
        let name = studentInfo.shift();
        let grade = studentInfo.join(' ');

        if (!studentBook.hasOwnProperty(name)) {
            studentBook[name] = grade;

        } else {
            studentBook[name] += ` ${grade}`;
        }
    }
 
    let sortedNames = Object.keys(studentBook).sort((a, b) => a.localeCompare(b));

    for (let name of sortedNames) {
        let average = 0;
        let counter = 0;

        for (let element of studentBook[name].split(' ')) {
            average += Number(element);
            counter++;
        }

        average /= counter;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);