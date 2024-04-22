function convertToJSON(firstName, lastName, hairColor) {

    let info = {};
    info.name = firstName;
    info.lastName = lastName;
    info.hairColor = hairColor;

    let inJSONstr = JSON.stringify(info);
    console.log(inJSONstr);
}
convertToJSON('George', 'Jones', 'Brown');