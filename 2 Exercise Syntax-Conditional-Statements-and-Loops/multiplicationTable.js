function multiplicationTable(num) {
    let product = 0;

    for (let times = 1; times <= 10; times++) {
        product = num * times;
        console.log(`${num} X ${times} = ${product}`);
    }
}
multiplicationTable(2);