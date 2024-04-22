function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalHelmetPrc = 0;
    let totalSwordPrc = 0;
    let totalShieldPrc = 0;
    let totalArmorPrc = 0;
    for (let fightCount = 1; fightCount <= lostFightCount; fightCount++) {

        if (fightCount % 2 === 0) {
            totalHelmetPrc += helmetPrice;
        }

        if (fightCount % 3 === 0) {
            totalSwordPrc += swordPrice;
        }

        if (fightCount % 6 === 0) {
            totalShieldPrc += shieldPrice;
        }

        if (fightCount % 12 === 0) {
            totalArmorPrc += armorPrice;
        }
    }

    let expenses = (totalHelmetPrc + totalSwordPrc + totalShieldPrc + totalArmorPrc).toFixed(2);
    console.log(`Gladiator expenses: ${expenses} aureus`)
}
gladiatorExpenses(23,12.50,21.50,40,200);