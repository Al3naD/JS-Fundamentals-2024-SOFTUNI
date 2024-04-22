function towns(arr) {
    for (let row of arr) {
        let [city, cityLatitude, cityLongitude] = row.split(' | ');

        let formatLatitude = Number(cityLatitude).toFixed(2);
        let formatLongitude = Number(cityLongitude).toFixed(2);

        let townObjects = {
            town: city,
            latitude: formatLatitude,
            longitude: formatLongitude,
        };

        console.log(townObjects);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);