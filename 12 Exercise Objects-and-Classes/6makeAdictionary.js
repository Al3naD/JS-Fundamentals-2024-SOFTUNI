function makeADictionary(array) {
 
    let result = [];
    for (let curRow of array) {
        let name = curRow.split(`"`)[1];
        let info = curRow.split(`"`)[3];
 
        let checkResult = result.find(r => r.name === name);
        if (checkResult) {
            checkResult.info = info;
        } else {
            let curObj = { name: name, info: info };
            result.push(curObj);
        }
    }
    let newResult = result.sort((a, b) => a.name.localeCompare(b.name));
    for (let row of newResult) {
        console.log(`Term: ${row.name} => Definition: ${row.info}`);
    }
    
}
makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);