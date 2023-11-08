import { ReturnToHome } from "../modules/returnToHome";

export function GameOver() {
    return (
        <div className="Outer">
                <h1 style={{textAlign: 'center'}}> GAME OVER ! </h1>
                <ReturnToHome />
        </div>
    );
}