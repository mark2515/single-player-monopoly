import { chance } from "./chance";
import { GetRandomChance } from "../../utils/GetRandomChance";


export function ChanceBoard({money, setMoney, setMarketVisible, setRollAllow, setSpaceClickAllow}) {

    const handleEvent = (num) => {

        if(num === 0) {
            const chance = GetRandomChance();
            alert(chance.name + (chance.money > 0 ? " +" : " ") + chance.money);
            setMoney(money + chance.money)
            setMarketVisible(false);
            setRollAllow(true);
            setSpaceClickAllow(true);
            return;
            
        }

        if(num === 1) {
            setMoney(money - chance.leave)

            setMarketVisible(false);
            setRollAllow(true);
            setSpaceClickAllow(true);
            return;
            
        }
    }

    return(
        <div className="ChanceBoard">
            <div className="FirstButton" onClick={() => handleEvent(0)}> Random Event </div>
            <div className="SecondButton" onClick={() => handleEvent(1)}> Leave / -{chance.leave}</div>
        </div>
    );
}
