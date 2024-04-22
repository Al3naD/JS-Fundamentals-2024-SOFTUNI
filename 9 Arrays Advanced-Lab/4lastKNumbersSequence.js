function lastKNumbersSequence(n, k) {

    let arr = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let previousK = arr.slice(start, end);
        let sum = previousK.reduce((acc, val) => acc + val, 0);
        arr[i] = sum;
    }
    console.log(arr.join(" "));
}
lastKNumbersSequence(6, 3);