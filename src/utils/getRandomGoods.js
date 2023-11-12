export function GetRandomGoods() {
    const allGoods = [
        { name: "Maple Syrup", price: 35, sell: 46 },
        { name: "Ice Wine", price: 74, sell: 97 },
        { name: "Lobster", price: 86, sell: 112 },
        { name: "Winter Boots", price: 121, sell: 158 },
        { name: "Canada Goose", price: 182, sell: 237 },
        { name: "Jewelry", price: 200, sell: 260 }
    ];

    let result = [];
    let usedIndices = new Set();

    while (result.length < 3) {
        let randomIndex = Math.floor(Math.random() * allGoods.length);
        if (!usedIndices.has(randomIndex)) {
            result.push(allGoods[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return result;
}
