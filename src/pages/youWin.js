import { ReturnToHome } from "../modules/returnToHome";

export function YouWin() {
    return (
        <div className="Outer">
                <h1 style={{textAlign: 'center'}}> YOU WIN ! </h1>
                <ReturnToHome />
        </div>
    );
}