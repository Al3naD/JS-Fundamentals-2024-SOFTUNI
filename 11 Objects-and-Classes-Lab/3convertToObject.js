function convertToObject(stringJson) {
    
    let object= JSON.parse(stringJson);

    for (let key in object) {

        console.log(`${key}: ${object[key]}`); 
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');