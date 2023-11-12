import { ReturnToHome } from "../modules/returnToHome";
import { reset } from "../utils/reset";

export function GameOver() {
    return (
        <div className="Outer">
                <h1 style={{textAlign: 'center'}}> GAME OVER ! </h1>
                {reset()}
                <ReturnToHome />
        </div>
    );
}