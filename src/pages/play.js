import { SeperatorLine } from "../modules/seperatorLine";
import { PlayerInfo } from "../modules/playerInfo";
import { DisplayDiceNumber } from "../modules/displayDiceNumber";
import { Map } from "../modules/map";
import { ReturnToHome } from "../modules/returnToHome";
import { Surrender } from "../modules/surrender";
import { useState, useEffect } from "react";
import { GetRandomGoods } from "../utils/GetRandomGoods";
import { useNavigate } from "react-router-dom";
import { element } from "../elements/home/element";
import { SpaceInfo } from "../modules/spaceInfo";

export function Play() {
    const [number, setNumber] = useState(0);
    const [round, setRound] = useState(1);
    const [position, setPosition] = useState(0);
    const [money, setMoney] = useState(1500);
    const [goods, setGoods] = useState(GetRandomGoods);
    const navigate = useNavigate();

    const handleRoll = () => {
        const randomNum = Math.floor(Math.random() * 1) + 1;
        setNumber(randomNum); 
        setPosition((position + randomNum) % 36);
    }

    const handleEvent = (position) => {
        console.log(element[position]);
    }

    useEffect(()=>{
        if(position - number < 0) {
            setRound(round => round + 1);
            setMoney(money => money + 100);
        };
    },[position, number])

    useEffect(()=>{
        handleEvent(position);
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
            <Map position={position}/>

            <ReturnToHome />
            <Surrender />
        </div>
    );
}