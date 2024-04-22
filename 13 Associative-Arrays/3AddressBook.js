function addressBook(input) {

    let adressBook = {};

    for (let info of input) {
        let [name, adress] = info.split(':');

        adressBook[name] = adress;
    }

    let sortedArr = Object.entries(adressBook);
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]));


    for (let [name, adress] of sortedArr) {

        console.log(`${name} -> ${adress}`);
    }
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);