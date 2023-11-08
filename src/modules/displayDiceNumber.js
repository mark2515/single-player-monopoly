import IconDice1 from "../icons/dice-1";
import IconDice2 from "../icons/dice-2";
import IconDice3 from "../icons/dice-3";
import IconDice4 from "../icons/dice-4";
import IconDice5 from "../icons/dice-5";
import IconDice6 from "../icons/dice-6";

export function DisplayDiceNumber ({number}) {
    return (
        <div className="Dice">
            {number === 1 && <IconDice1/>}
            {number === 2 && <IconDice2/>}
            {number === 3 && <IconDice3/>}
            {number === 4 && <IconDice4/>}
            {number === 5 && <IconDice5/>}
            {number === 6 && <IconDice6/>}
        </div>
    );
}