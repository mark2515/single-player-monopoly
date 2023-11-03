import IconFlagFill from "../icons/flag-fill";
import returnToHome from "../utils/returnToHome";
import displayDiceNumber from "../utils/displayDiceNumber";
import { Map } from "../modules/map";
import { useState } from 'react';
import { player } from "../modules/player";
import updatePosition from "../utils/updatePosition";
 
export const Play = () => {
    const [number, setNumber] = useState(0);
    const [position, setPosition] = useState(player.position);

    function handleClick() {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setNumber(randomNum); 
        setPosition(position + randomNum);
    }

    const a = 31;
    return (
        <div className="Outer">
            <div className="Inner">
                <div className="Line"></div>
                <Map />

                <button onClick={handleClick} className="Roll"> ROLL ! </button>
                {displayDiceNumber(number)}
                {updatePosition(position)}
                <IconFlagFill style={{ position: 'absolute', top: `${a}%`, left: '52%', width: '2vh', height: 'auto'}}/>

                {returnToHome()}
            </div>
        </div>
    );
}