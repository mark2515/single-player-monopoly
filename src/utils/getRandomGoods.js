export function GetRandomGoods() {
    const allGoods = [
        { name: "Maple Syrup", price: 15 },
        { name: "Ice Wine", price: 25 },
        { name: "Dark Beer", price: 8 },
        { name: "Berry Jam", price: 7 },
        { name: "Chocolatier Blueberries", price: 12 },
        { name: "Meat Pie", price: 10 },
        { name: "Lobster", price: 20 },
        { name: "Pastry", price: 6 },
        { name: "Yellow Mustard", price: 5 },
        { name: "Tim Hortons Coffee", price: 9 },
        { name: "Smoked Meat", price: 11 },
        { name: "Beef Jerky", price: 13 },
        { name: "Doughnuts", price: 4 },
        { name: "Cheese and Deli", price: 14 },
        { name: "Apple Cider", price: 7 },
        { name: "Winter Boots", price: 30 },
        { name: "Canada Goose", price: 50 },
        { name: "Candles", price: 6 }
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
