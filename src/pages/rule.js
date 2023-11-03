import returnToHome from "../utils/returnToHome";

export const Rule = () => {
    return (
        <div className="Outer">
            <div className="Inner">
                {returnToHome()}
            </div>
        </div>
    );
}