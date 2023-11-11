import { SeperatorLine } from "../modules/seperatorLine";
import { PlayerInfo } from "../modules/playerInfo";
import { DisplayDiceNumber } from "../modules/displayDiceNumber";
import { Space } from "../modules/space";
import { element } from "../elements/home/element";
import { SpaceInfo } from "../modules/spaceInfo";
import { ReturnToHome } from "../modules/returnToHome";
import { Surrender } from "../modules/surrender";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DisplayEvents } from "../modules/displayEvents";
import { market } from "../elements/market/market";
import { vancouver } from "../elements/properties/vancouver";
import { GetRandomGoods } from "../utils/GetRandomGoods";

export function Play() {
    const [number, setNumber] = useState(0);
    const [round, setRound] = useState(1);
    const [position, setPosition] = useState(0);
    const [money, setMoney] = useState(1500);
    const [goods, setGoods] = useState(GetRandomGoods);
    const [spaceInfo, setSpaceInfo] = useState("");
    const [rollAllow, setRollAllow] = useState(true);
    const [spaceClickAllow, setSpaceClickAllow] = useState(true);
    const navigate = useNavigate();

    const handleRoll = () => {
        if(rollAllow) {
            // const randomNum = Math.floor(Math.random() * 6) + 1;
            const randomNum = 1;
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
            market.leave += 5;
            vancouver.leave += 5;
        };
    },[position, number])

    useEffect(()=>{
        handleClick(element[position]);
    },[position])

    useEffect(()=>{
        if( money >= 1700) {
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
                    onSpaceClick={() => {
                        if (spaceClickAllow) {
                            handleClick(el);
                        }
                    }}
                />
            ))}
            <SpaceInfo spaceInfo={spaceInfo}/>
            <DisplayEvents event={element[position].elements} position={position} money={money} setMoney={setMoney} goods={goods} setGoods={setGoods} setRollAllow={setRollAllow} setSpaceClickAllow={setSpaceClickAllow}/>

            <ReturnToHome />
            <Surrender />
        </div>
    );
}