import { ReturnToHome } from "../modules/returnToHome";
import { reset } from "../utils/reset";

export function YouWinPage() {
    return (
        <div className="Outer">
                <h1 style={{textAlign: 'center'}}> YOU WIN ! </h1>
                {reset()}
                <ReturnToHome />
        </div>
    );
}