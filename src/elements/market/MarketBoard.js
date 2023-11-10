export function MarketBoard({marketGoods, money, setMoney, setMarketVisible}) {
    const handleEvent = () => {
        setMoney(money - 100);
        setMarketVisible(false); 
    }

    return(
        <div className="Board">
            <button onClick={handleEvent}> {marketGoods[0].name} </button>
            <button onClick={handleEvent}> {marketGoods[1].name} </button>
            <button onClick={handleEvent}> {marketGoods[2].name} </button>
        </div>
    );
}