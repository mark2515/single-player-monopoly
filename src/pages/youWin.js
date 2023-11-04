import returnToHome from "../utils/returnToHome";
import { useEffect } from "react";

export const YouWin = () => {
    return (
        <div className="Outer">
            <div className="Inner">
                <h1> YOU WIN ! </h1>
                {returnToHome()}
            </div>
        </div>
    );
}