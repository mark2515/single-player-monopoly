import IconDice1 from "../icons/dice-1";
import IconDice2 from "../icons/dice-2";
import IconDice3 from "../icons/dice-3";
import IconDice4 from "../icons/dice-4";
import IconDice5 from "../icons/dice-5";
import IconDice6 from "../icons/dice-6";
import IconDice from "../icons/dice";

function displayDiceNumber (number) {
    return (
        <div>
            <IconDice className="Dice"/>
            {number === 1 && <IconDice1 className="Dice"/>}
            {number === 2 && <IconDice2 className="Dice"/>}
            {number === 3 && <IconDice3 className="Dice"/>}
            {number === 4 && <IconDice4 className="Dice"/>}
            {number === 5 && <IconDice5 className="Dice"/>}
            {number === 6 && <IconDice6 className="Dice"/>}
        </div>
    );
}

export default displayDiceNumber;