import { chance } from "./chance";
import { GetRandomChance } from "../../utils/GetRandomChance";

export function ChanceBoard({money, setMoney, goods, setGoods, setMarketVisible, setRollAllow}) {

    const handleEvent = (num) => {

        if(num === 0) {
            const chance = GetRandomChance();
            alert(chance.name + (chance.money > 0 ? " +" : " ") + chance.money);
            setMoney(money + chance.money)
            setMarketVisible(false);
            setRollAllow(true);
            return;
            
        }

        if(num === 1) {
            if(goods[0].name === chance.goods[0].name){
                const newGoods = goods.slice(1);
                setGoods(newGoods);
                setMoney(money + chance.goods[0].price * 5)
                setMarketVisible(false);
                setRollAllow(true);
                return;
            }
        }

        if(num === 2) {
            setMoney(money - chance.leave)
            setMarketVisible(false);
            setRollAllow(true);
            return;
            
        }
    }

    return(
        <div className="ChanceBoard">
            <div className="FirstButton" onClick={() => handleEvent(0)}> Random Event </div>
            <div className="SecondButton" onClick={() => handleEvent(1)}> Draw:{chance.goods[0].name} / +{chance.goods[0].price * 5}</div>
            <div className="ThirdButton" onClick={() => handleEvent(2)}> Leave / -{chance.leave}</div>
        </div>
    );
}
