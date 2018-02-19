function pyramid(base, increment) {
    let height = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    /*if(base%2 === 0){
        height=(base/2);
    } else {
        height = Math.ceil(base/2);
    }*/
        for (let i = base; i > 0; i-=2) {
            let basePow = i * i;
            if(i===2 || i===1){
                gold = basePow * increment;
                height++;
                break;
            }
            height++;
            let baseStone = (i - 2) * (i - 2);
            stone += baseStone * increment;
            if (height % 5 === 0) {
                lapis += (basePow - baseStone) * increment;
            } else {
                marble += (basePow - baseStone) * increment;
            }

        }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height*increment)}`);
}

pyramid(23,0.5);
