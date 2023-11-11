import { GetRandomGoods } from "../utils/GetRandomGoods";
import { useState, useEffect } from "react";
import { element } from "../elements/home/element"
import { MarketBoard } from "../elements/market/MarketBoard";
import { PropertiesBoard } from "../elements/properties/PropertiesBoard";

export function DisplayEvents({ position, event, money, setMoney, goods, setGoods, setRollAllow, setSpaceClickAllow}) {
    const [marketVisible, setMarketVisible] = useState(true);
    const [lastPosition, setLastPosition] = useState(null);
    const marketGoods = GetRandomGoods();

    useEffect(() => {
        if (position !== lastPosition) {
            setMarketVisible(true);
            setLastPosition(position); 
            if (event === "Market" || event === "Properties") {
                setRollAllow(false);
                setSpaceClickAllow(false);
            } else {
                setRollAllow(true);
                setSpaceClickAllow(true);
            }
        }
    }, [position, event]);

    if (event === "Market") {
        return (
            marketVisible && <MarketBoard marketGoods={marketGoods} money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setMarketVisible={setMarketVisible} setRollAllow={setRollAllow} setSpaceClickAllow={setSpaceClickAllow}/>
        );
    }
    if (event === "Properties") {
        return (
            marketVisible && <PropertiesBoard property={element[position]} money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setMarketVisible={setMarketVisible} setRollAllow={setRollAllow} setSpaceClickAllow={setSpaceClickAllow}/>
        );
    }
}
