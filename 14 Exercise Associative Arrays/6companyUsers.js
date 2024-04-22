function companyUsers(arr) {

    let companyEmployees = {};

    for (let command of arr) {
        let [company, id] = command.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(id)) {
                companyEmployees[company].push(id);
            }
        } else {
            companyEmployees[company] = [id];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employeeId] of entries) {
        console.log(company);
        for (let id of employeeId) {
            console.log(`-- ${id}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);