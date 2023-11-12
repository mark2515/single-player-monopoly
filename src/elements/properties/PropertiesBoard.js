import { hasInvolved } from "../../utils/hasInvolved";

export function PropertiesBoard({property, money, setMoney, goods, setGoods, setMarketVisible, setRollAllow}) {

    const handleEvent = (num) => {

        if(num === 0 || num === 1 || num ===2){
            for (let i = 0; i < goods.length; i++) {
                if(goods[i].name === property.required[num].name) {
                    setMoney(money + property.required[num].sell)
                    const newGoods = [
                        ...goods.slice(0, i),
                        ...goods.slice(i + 1)
                    ];
                    setGoods(newGoods);

                    setMarketVisible(false);
                    setRollAllow(true);
                    return;
                }
            }
        }

        if(num === 3) {
            setMoney(money - property.update)
            property.level += 1;
            property.update += 50;
            for (let i = 0; i < property.required.length; i++) {
                property.required[i].sell = Math.ceil(property.required[i].sell * (property.level + 1));
            }

            setMarketVisible(false);
            setRollAllow(true);
            return;
            
        }

        if(num === 4) {
            setMoney(money - property.leave)

            setMarketVisible(false);
            setRollAllow(true);
            return;
            
        }

    }

    return(
        <div className="PropertiesBoard">
            {hasInvolved(property.required[0], goods) ? <div className="FirstButton" style={{backgroundColor: 'red'}} onClick={() => handleEvent(0)}> {property.required[0].name} / +{property.required[0].sell} </div> : <div className="FirstButton"> {property.required[0].name} / +{property.required[0].sell} </div>}
            {hasInvolved(property.required[1], goods) ? <div className="SecondButton" style={{backgroundColor: 'red'}} onClick={() => handleEvent(1)}> {property.required[1].name} / +{property.required[1].sell} </div> : <div className="SecondButton"> {property.required[1].name} / +{property.required[1].sell} </div>}
            {hasInvolved(property.required[2], goods) ? <div className="ThirdButton" style={{backgroundColor: 'red'}} onClick={() => handleEvent(2)}> {property.required[2].name} / +{property.required[2].sell} </div> : <div className="ThirdButton"> {property.required[2].name} / +{property.required[2].sell} </div>}
            <div className="FourthButton" onClick={() => handleEvent(3)}> Update / -{property.update} </div>
            <div className="FifthButton" onClick={() => handleEvent(4)}> Leave / -{property.leave} </div>
        </div>
    );
}
