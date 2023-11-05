function getRandomGoods () {
    const allGoods = ["Maple Syrup", "Ice Wine", "Dark Beer", "Berry Jam", "Chocolatier Blueberries",
                    "Meat Pie", "Lobster", "Pastry", "Yellow Mustard", "Tim Hortons Coffee",
                    "Smoked Meat", "Beef Jerky", "Doughnuts", "Cheese and Deli", "Apple Cider",
                    "Winter Boots", "Canada Goose", "Candles"];

    let result = [];
    let usedIndices = new Set();

    while(result.length < 3) {
        let randomIndex = Math.floor(Math.random() * allGoods.length);
        if (!usedIndices.has(randomIndex)) {
            result.push(allGoods[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return result;
}

export default getRandomGoods;