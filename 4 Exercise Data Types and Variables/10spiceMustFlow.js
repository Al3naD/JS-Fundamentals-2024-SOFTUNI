function spiceMustFlow(yield) {

    let totalSpices = 0;
    let daysCount = 0;
    let consumedByWorkers = 26;

    while (yield >= 100) {

        totalSpices += yield - consumedByWorkers;

        daysCount++;

        yield -= 10;
    }

    if (totalSpices >= 26) {
        totalSpices -= consumedByWorkers;
    }

    console.log(daysCount);
    console.log(totalSpices);
}
spiceMustFlow(450);
