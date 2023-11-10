import { SeperatorLine } from "../modules/seperatorLine";
import { PlayerInfo } from "../modules/playerInfo";
import { DisplayDiceNumber } from "../modules/displayDiceNumber";
import { Space } from "../modules/space";
import { element } from "../elements/home/element";
import { SpaceInfo } from "../modules/spaceInfo";
import { ReturnToHome } from "../modules/returnToHome";
import { Surrender } from "../modules/surrender";
import { useState, useEffect } from "react";
import { GetRandomGoods } from "../utils/GetRandomGoods";
import { useNavigate } from "react-router-dom";

export function Play() {
    const [number, setNumber] = useState(0);
    const [round, setRound] = useState(1);
    const [position, setPosition] = useState(0);
    const [money, setMoney] = useState(1500);
    const [goods, setGoods] = useState(GetRandomGoods);
    const [spaceInfo, setSpaceInfo] = useState("");
    const navigate = useNavigate();

    const handleRoll = () => {
        const randomNum = Math.floor(Math.random() * 1) + 1;
        setNumber(randomNum); 
        setPosition((position + randomNum) % 36);
    }

    const handleClick = (element) => {
        setSpaceInfo(<span> <p> {element.text} </p>
        IDs: {element.ids.map((id, index)=>(id+" "))} <br />
        Category: {element.elements} <br />   
        {element.elements === "Properties" && <span> Cost: {element.cost} <br />
                                                    Update: {element.update} <br />
                                                    level: {element.level} <br />
                                                    Sell: {element.sell} <br />
                                                    Withdraw: {element.withdraw} <br />
                                                    Toll: {element.toll} <br />
                                                    Required Goods / Purchase Price: {element.required.map((good, index)=>(<li key={index}>{`${good.good} / ${good.price}`}</li>))}</span>}
                                               </span>)
    };

    useEffect(()=>{
        if(position - number < 0) {
            setRound(round => round + 1);
            setMoney(money => money + 100);
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
                    onSpaceClick={() => handleClick(el)}
                />
            ))}

            <SpaceInfo spaceInfo={spaceInfo}/>
            
            <ReturnToHome />
            <Surrender />
        </div>
    );
}