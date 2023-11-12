import { market } from "./market";

export function MarketBoard({money, setMoney, goods, setGoods, setMarketVisible, setRollAllow}) {

    const handleEvent = (num) => {

        if (goods.length < 5) {
            if (num !== 3) {
                setGoods(goods => [...goods, market.goods[num]]);
                setMoney(money - market.goods[num].price);
            } else {
                setMoney(money - market.leave);
            }
            setMarketVisible(false);
            setRollAllow(true);
            return;
        }

        if (goods.length >= 5 && num === 3) {
            setMoney(money - market.leave);
            setMarketVisible(false);
            setRollAllow(true);
        } else {
            alert("You can only have a maximum of 5 goods");
        }
    }

    return(
        <div className="MarketBoard">
            <div className="FirstButton" onClick={() => handleEvent(0)}> {market.goods[0].name} / -{market.goods[0].price} </div>
            <div className="SecondButton" onClick={() => handleEvent(1)}> {market.goods[1].name} / -{market.goods[1].price} </div>
            <div className="ThirdButton" onClick={() => handleEvent(2)}> {market.goods[2].name} / -{market.goods[2].price} </div>
            <div className="FourthButton" onClick={() => handleEvent(3)}> Leave / -{market.leave}</div>
        </div>
    );
}
