import returnToHome from "../utils/returnToHome";

export const Achievements = () => {
    return (
        <div className="Outer">
            <div className="Inner">
                <p> This is the Achievements Page </p>
                {returnToHome()}
            </div>
        </div>
    );
}