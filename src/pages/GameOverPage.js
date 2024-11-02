import { ReturnToHome } from "../modules/returnToHome";
import { reset } from "../utils/reset";

export function GameOverPage() {
    return (
        <div className="Outer">
                <h1 style={{ textAlign: 'center', fontSize: '58px'}}>GAME OVER !</h1>
                {reset()}
                <ReturnToHome />
        </div>
    );
}