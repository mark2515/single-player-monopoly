import { useState } from "react";
import { ReturnToHome } from "../modules/returnToHome";

export function Credits() {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(true)
    }
    return (
        <div className="Outer">
            <div style={{textAlign: 'center', fontSize: '24px'}}>
            {!visible && (
                <>
                    <p style={{fontWeight: 'bold'}}>Credits</p>
                    This game was independently developed by Mark He. If you enjoy it, please give me a thumbs up!
                </>
            )}
            {visible && <p style={{fontWeight: 'bold'}}>Thank You !</p>}
                <div style={{position: 'absolute', top: '80%', left: '50%'}}>
                    <button onClick={handleClick}>&#128077;</button>
                </div>
            </div>

                <ReturnToHome />
        </div>
    );
}