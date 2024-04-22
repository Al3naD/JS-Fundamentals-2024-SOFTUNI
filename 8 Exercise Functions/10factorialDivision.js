function factorialDivision(int1, int2) {

    let factorial1= calculateFactorial(int1);
    let factorial2= calculateFactorial(int2);
    let result= factorial1 / factorial2;

    function calculateFactorial(num) {
        let factorial = 1;

        while (num >= 1) {
            factorial *= num;
            num--;
        }
        return factorial;
    }

    console.log(result.toFixed(2));
}
factorialDivision(5, 2)