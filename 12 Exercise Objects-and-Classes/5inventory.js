function inventory(arr) {
    let heroes = [];

    for (let heroInfo of arr) {
        let [heroName, heroLevel, heroItems] = heroInfo.split(' / ');
        heroLevel = Number(heroLevel);

        let heroObjects = {
            hero: heroName,
            level: heroLevel,
            items: heroItems,
        };
        heroes.push(heroObjects);

    }
    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);