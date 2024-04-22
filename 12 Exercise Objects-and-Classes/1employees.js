function employees(arr) {

    for (let element of arr) {
        let name = element;
        let personalNum = Number(name.length);


        let infoObj = {
            name: name,
            number: personalNum,
        };

        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);