export function GetRandomGoods() {
    const allGoods = [
        { name: "Maple Syrup", price: 15, sell: 20 },
        { name: "Ice Wine", price: 25, sell: 33 },
        { name: "Dark Beer", price: 8, sell: 10 },
        { name: "Berry Jam", price: 7, sell: 9 },
        // { name: "Chocolatier Blueberries", price: 12, sell: 16 },
        // { name: "Meat Pie", price: 10, sell: 13 },
        // { name: "Lobster", price: 20, sell: 26 },
        // { name: "Pastry", price: 6, sell: 8 },
        // { name: "Yellow Mustard", price: 5, sell: 7 },
        // { name: "Tim Hortons Coffee", price: 9, sell: 12 },
        // { name: "Smoked Meat", price: 11, sell: 14 },
        // { name: "Beef Jerky", price: 13, sell: 17 },
        // { name: "Doughnuts", price: 4, sell: 5 },
        // { name: "Cheese and Deli", price: 14, sell: 18 },
        // { name: "Apple Cider", price: 7, sell: 9 },
        // { name: "Winter Boots", price: 30, sell: 40 },
        // { name: "Canada Goose", price: 50, sell: 65 },
        // { name: "Candles", price: 6, sell: 8 }
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
