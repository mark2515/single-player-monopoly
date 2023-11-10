export function MarketBoard({marketGoods, money, setMoney, setMarketVisible, setRollAllow}) {

    const handleEvent = () => {
        setMoney(money - 100);
        setMarketVisible(false);
        setRollAllow(true); 
    }

    return(
        <div className="Board">
            <div className="FirstButton" onClick={handleEvent}> {marketGoods[0].name} / {marketGoods[0].price} </div>
            <div className="SecondButton" onClick={handleEvent}> {marketGoods[1].name} / {marketGoods[1].price} </div>
            <div className="ThirdButton" onClick={handleEvent}> {marketGoods[2].name} / {marketGoods[2].price} </div>
            <div className="FourthButton" onClick={handleEvent}> Leave / 50 </div>
        </div>
    );
}