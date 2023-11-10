import { GetRandomGoods } from "../utils/GetRandomGoods";
import { useState, useEffect } from "react";
import { MarketBoard } from "../elements/market/MarketBoard";

export function DisplayEvents ({position, event, money, setMoney}) {
    const[marketVisible, setMarketVisible] = useState(true);
    const marketGoods = GetRandomGoods();

    useEffect(() => {
        setMarketVisible(true);
    }, [position]);

    if(event === "Market") {
        return (
            marketVisible && <MarketBoard marketGoods={marketGoods} money={money} setMoney={setMoney} setMarketVisible={setMarketVisible}/>
        );
    }
}