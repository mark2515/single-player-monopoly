import { market } from "./market";
import { GetRandomGoods } from "../../utils/GetRandomGoods";

export function MarketBoard({money, setMoney, goods, setGoods, setMarketVisible, setRollAllow, setSpaceClickAllow}) {
    const marketGoods = GetRandomGoods();

    const handleEvent = (num) => {

        if (goods.length < 5) {
            if (num !== 3) {
                setGoods(goods => [...goods, marketGoods[num]]);
                setMoney(money - marketGoods[num].price);
            } else {
                setMoney(money - market.leave);
            }
            setMarketVisible(false);
            setRollAllow(true);
            setSpaceClickAllow(true);
            return;
        }

        if (goods.length >= 5 && num === 3) {
            setMoney(money - market.leave);
            setMarketVisible(false);
            setRollAllow(true);
            setSpaceClickAllow(true);
        } else {
            alert("You can only have a maximum of 5 goods");
        }
    }

    return(
        <div className="MarketBoard">
            <div className="FirstButton" onClick={() => handleEvent(0)}> {marketGoods[0].name} / -{marketGoods[0].price} </div>
            <div className="SecondButton" onClick={() => handleEvent(1)}> {marketGoods[1].name} / -{marketGoods[1].price} </div>
            <div className="ThirdButton" onClick={() => handleEvent(2)}> {marketGoods[2].name} / -{marketGoods[2].price} </div>
            <div className="FourthButton" onClick={() => handleEvent(3)}> Leave / -{market.leave}</div>
        </div>
    );
}
