import { ReturnToHome } from "../modules/returnToHome";
import { reset } from "../utils/reset";

export function YouWonPage() {
    return (
        <div className="YouWonOuter">
                <h1 style={{textAlign: 'center', fontSize: '58px'}}> YOU WON ! </h1>
                {reset()}
                <ReturnToHome />
        </div>
    );
}