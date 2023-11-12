export function GetRandomChance() {
    const allChances = [
        { name: "Find a Lost Wallet", money: 150 },
        { name: "Speeding Fine", money: -100 },
        { name: "Successful Investment", money: 200 },
        { name: "Medical Expenses", money: -50 },
        { name: "Unexpected Inheritance", money: 300 },
        { name: "Tax Increase", money: -50 },
        { name: "Found Treasure", money: 250 },
        { name: "Repair Costs", money: -80 },
        { name: "Lottery Win", money: 100 },
        { name: "Parking Fine", money: -30 },
        { name: "Job Promotion", money: 150 },
        { name: "Travel Expenses", money: -200 },
        { name: "Charity Donation", money: -100 },
        { name: "Car Accident", money: -150 },
        { name: "Stock Market Crash", money: -200 },
        { name: "Received Gift", money: 80 },
        { name: "Insurance Refund", money: 70 },
        { name: "Gambling Win", money: 120 },
        { name: "Legal Fees", money: -150 },
        { name: "Patent Sale", money: 200 }
    ];
    const randomIndex = Math.floor(Math.random() * allChances.length);

    return allChances[randomIndex];
}
