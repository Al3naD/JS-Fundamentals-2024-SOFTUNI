function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;
    let floorCount = 1;

    for (let curSize = base; curSize > 0; curSize -= 2) {
        height += increment;
        let totalArea = curSize ** 2;

        if (curSize === 1 || curSize === 2) {
            gold = totalArea * increment;
        } else {
            let stoneArea = (curSize - 2) ** 2;
            stone += stoneArea * increment;

            if (floorCount % 5 === 0) {
                let lapisArea = totalArea - stoneArea;
                lapis += lapisArea * increment;
            } else {
                let marbleArea = totalArea - stoneArea;
                marble += marbleArea * increment;
            }
        }
        floorCount++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(11, 1);