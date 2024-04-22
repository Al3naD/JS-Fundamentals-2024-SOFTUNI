function phoneBook(input) {

    let phonebook = {};
    for (let info of input) {
        let [name, number] = info.split(' ');

        phonebook[name] = number;
    }

    for (let keys in phonebook) {
        console.log(`${keys} -> ${phonebook[keys]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);