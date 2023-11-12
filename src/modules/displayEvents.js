import { useState, useEffect } from "react";
import { element } from "../elements/home/element"
import { MarketBoard } from "../elements/market/MarketBoard";
import { PropertiesBoard } from "../elements/properties/PropertiesBoard";
import { ChanceBoard } from "../elements/chance/ChanceBoard";

export function DisplayEvents({ position, event, money, setMoney, goods, setGoods, setRollAllow, setSpaceClickAllow}) {
    const [marketVisible, setMarketVisible] = useState(true);
    const [lastPosition, setLastPosition] = useState(null);

    useEffect(() => {
        if (position !== lastPosition) {
            setMarketVisible(true);
            setLastPosition(position); 
            if (event !== "Home") {
                setRollAllow(false);
                setSpaceClickAllow(false);
            }
        }
    }, [position, event]);

    if (event === "Market") {
        return (
            marketVisible && <MarketBoard money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setMarketVisible={setMarketVisible} setRollAllow={setRollAllow} setSpaceClickAllow={setSpaceClickAllow}/>
        );
    }
    if (event === "Properties") {
        return (
            marketVisible && <PropertiesBoard property={element[position]} money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setMarketVisible={setMarketVisible} setRollAllow={setRollAllow} setSpaceClickAllow={setSpaceClickAllow}/>
        );
    }
    if (event === "Chance") {
        return (
            marketVisible && <ChanceBoard money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setMarketVisible={setMarketVisible} setRollAllow={setRollAllow} setSpaceClickAllow={setSpaceClickAllow}/>
        );
    }
}
