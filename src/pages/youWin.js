import returnToHome from "../utils/returnToHome";
import restart from "../utils/restart";

export const YouWin = () => {
    return (
        <div className="Outer">
            <div className="Inner">
                <h1> YOU WIN ! </h1>
                {restart()}
                {returnToHome()}
            </div>
        </div>
    );
}