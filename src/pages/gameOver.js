import returnToHome from "../utils/returnToHome";
import restart from "../utils/restart";

export const GameOver = () => {
    return (
        <div className="Outer">
            <div className="Inner">
                <h1> GAME OVER ! </h1>
                {restart()}
                {returnToHome()}
            </div>
        </div>
    );
}