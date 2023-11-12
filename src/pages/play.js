import { SeperatorLine } from "../modules/seperatorLine";
import { PlayerInfo } from "../modules/playerInfo";
import { DisplayDiceNumber } from "../modules/displayDiceNumber";
import { Space } from "../modules/space";
import { element } from "../elements/home/element";
import { SpaceInfo } from "../modules/spaceInfo";
import { DisplayEvents } from "../modules/displayEvents";
import { GameRulesIcon } from "../modules/gameRulesIcon";
import { ShowGameRules } from "../modules/showGameRules";
import { Surrender } from "../modules/surrender";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { market } from "../elements/market/market";
import { toronto } from "../elements/properties/toronto";
import { montreal } from "../elements/properties/montreal";
import { vancouver } from "../elements/properties/vancouver";
import { calgary } from "../elements/properties/calgary";
import { edmonton } from "../elements/properties/edmonton";
import { ottawa } from "../elements/properties/ottawa";
import { GetRandomGoods } from "../utils/GetRandomGoods";

export function Play() {
    const [number, setNumber] = useState(0);
    const [round, setRound] = useState(1);
    const [position, setPosition] = useState(0);
    const [money, setMoney] = useState(1500);
    const [goods, setGoods] = useState(GetRandomGoods);
    const [spaceInfo, setSpaceInfo] = useState("");
    const [rulesShown, setRulesShown] = useState(false);
    const [rollAllow, setRollAllow] = useState(true);
    const navigate = useNavigate();

    const handleRoll = () => {
        if(rollAllow) {
            //const randomNum = Math.floor(Math.random() * 6) + 1;
            const randomNum = 3;
            setNumber(randomNum); 
            setPosition((position + randomNum) % 36);
        }
    }

    const handleClick = (element) => {
        setSpaceInfo(<span> <p> {element.text} </p>
        IDs: {element.ids.map((id, index)=>(id+" "))} <br />
        Category: {element.elements} <br />
        Leave: {element.leave} $ <br /> <br />  
        {element.elements === "Properties" && <span> Level: {element.level} <br />
                                                    Update: {element.update} $ <br />
                                                    Required Goods / Sell Price: {element.required.map((good, index)=>(<li key={index}>{`${good.name} / ${good.sell} $`}</li>))}</span>}
                                               </span>)
    };

    useEffect(()=>{
        if(position - number < 0) {
            setRound(round => round + 1);
            setMoney(money => money + 100);
            market.leave = Math.ceil(market.leave * 2.3);
            toronto.leave += 5;
            montreal.leave += 5;
            vancouver.leave += 5;
            calgary.leave += 5;
            edmonton.leave += 5;
            ottawa.leave += 5;
        };
    },[position, number])

    useEffect(()=>{
        handleClick(element[position]);
        market.goods = GetRandomGoods();
    },[position])

    useEffect(()=>{
        if( money >= 3000) {
            navigate("/youWin");
        };
    },[money, navigate])

    useEffect(()=>{
        if( money <= 0) {
            navigate("/gameOver");
        };
    },[money, navigate])

    return(
        <div className="Outer">
            <SeperatorLine />
            <PlayerInfo round={round} position={position} money={money} goods={goods}/>
            <button onClick={handleRoll} className="Roll"> ROLL </button>
            <DisplayDiceNumber number={number}/>
            {element.map((el, index) => (
                <Space
                    key={index} 
                    id={index}
                    top={index >= 0 && index < 11 ? 50 : (index >= 11 && index < 18 ? 50 + 50 * (index - 11) : (index >= 18 && index < 29 ? 400 : 400 - 50 * (index - 29)))}
                    left={index >= 0 && index < 11 ? 300 + 50 * index : (index >= 11 && index < 18 ? 850 : (index >= 18 && index < 29 ? 850 - 50 * (index - 18) : 300))}
                    text={el.text}
                    position={position}
                    onSpaceClick={() => {handleClick(el)}}
                />
            ))}
            <SpaceInfo spaceInfo={spaceInfo}/>
            <DisplayEvents event={element[position].elements} position={position} money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setRollAllow={setRollAllow}/>
            <GameRulesIcon rulesShown={rulesShown} setRulesShown={setRulesShown}/>
            {rulesShown && <ShowGameRules />}
            
            <Surrender />
        </div>
    );
}