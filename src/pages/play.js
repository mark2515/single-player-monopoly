import returnToHome from "../utils/returnToHome";
import displayDiceNumber from "../utils/displayDiceNumber";
import { Map } from "../modules/map";
import { useState, useEffect } from 'react';
import { player } from "../modules/player";
import updatePosition from "../utils/updatePosition";
import showFlag from "../utils/showFlag";
import passHome from "../utils/passHome";
import { useNavigate } from "react-router-dom";
 
export const Play = () => {
    const [number, setNumber] = useState(0);
    const [position, setPosition] = useState(player.position);
    const navigate = useNavigate();

    function handleClick() {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setNumber(randomNum); 
        setPosition((position + randomNum) % 36);
    }

    return (
        <div className="Outer">
            <div className="Inner">
                <div className="Line"></div>
                <Map />

                <button onClick={handleClick} className="Roll"> ROLL ! </button>
                {displayDiceNumber(number)}
                {updatePosition(position)}
                {showFlag(position)}
                {passHome(number, position)}
                {useEffect(() => {if (player.money >= 1700) {navigate("/youWin");}}, [player.money, navigate])}

                {returnToHome()}
            </div>
        </div>
    );
}