function requiredReading(currentBookPages, oneHourReading, days) {

    let totalHours = currentBookPages / oneHourReading;
    let requiredHoursPerDay = totalHours / days;
    console.log(requiredHoursPerDay);
}
requiredReading(212, 20, 2);