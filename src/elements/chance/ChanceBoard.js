import { chance } from "./chance";
import { GetRandomChance } from "../../utils/GetRandomChance";
import { GetRandomGoods } from "../../utils/GetRandomGoods";


export function ChanceBoard({money, setMoney, goods, setMarketVisible, setRollAllow}) {
    const drawGood = GetRandomGoods()[0];

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
            if(goods[0].name === drawGood.name){
                setMoney(money + drawGood.price * 3)
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
            <div className="SecondButton" onClick={() => handleEvent(1)}> Draw:{drawGood.name} / +{drawGood.price * 3}</div>
            <div className="ThirdButton" onClick={() => handleEvent(2)}> Leave / -{chance.leave}</div>
        </div>
    );
}
