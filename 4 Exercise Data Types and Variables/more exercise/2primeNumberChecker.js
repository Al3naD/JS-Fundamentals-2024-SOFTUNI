function primeNumberChecker(num) {
    let isPrime = '';

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }
        isPrime = true;
    }
    console.log(isPrime);
}
primeNumberChecker(5);