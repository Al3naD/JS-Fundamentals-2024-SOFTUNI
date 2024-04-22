function printAndSum(start,end) {

    let sum=0;
    let buff= '';

    for(let currentNum= start; currentNum <= end; currentNum++ ) {
        buff= buff + currentNum + ' ';
        sum= sum+currentNum;
    }

    console.log(buff);
    console.log(`Sum: ${sum}`);
}
printAndSum(5,10);