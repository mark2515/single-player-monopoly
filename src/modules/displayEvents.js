import { GetRandomGoods } from "../utils/GetRandomGoods";
import { useState, useEffect } from "react";
import { MarketBoard } from "../elements/market/MarketBoard";

export function DisplayEvents({ position, event, money, setMoney, goods, setGoods, setRollAllow }) {
    const [marketVisible, setMarketVisible] = useState(true);
    const [lastPosition, setLastPosition] = useState(null);
    const marketGoods = GetRandomGoods();

    useEffect(() => {
        if (position !== lastPosition) {
            setMarketVisible(true);
            setLastPosition(position); 
            if (event === "Market") {
                setRollAllow(false);
            } else {
                setRollAllow(true);
            }
        }
    }, [position, event]);

    if (event === "Market") {
        return (
            marketVisible && <MarketBoard marketGoods={marketGoods} money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setMarketVisible={setMarketVisible} setRollAllow={setRollAllow}/>
        );
    }
}
