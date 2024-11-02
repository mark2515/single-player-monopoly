import { useState } from "react";
import { ReturnToHome } from "../modules/returnToHome";
import confetti from 'canvas-confetti';
import '../style.css';

export function CreditsPage() {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(true)
        confetti({
            particleCount: 150,
            spread: 60
        });
    }
    return (
        <section>
            <div className="Home">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div style={{textAlign: 'center', fontSize: '24px'}}>
                {!visible && (
                    <>
                        <p style={{fontWeight: 'bold'}}>Credits</p>
                        This game was independently developed by Mark He. If you enjoy it, please give him a thumbs up!
                    </>
                )}
                {visible && <p style={{fontWeight: 'bold'}}>Thank You !</p>}
                    <div style={{position: 'absolute', top: '80%', left: '49%'}}>
                        <button onClick={handleClick}>&#128077;</button>
                    </div>
                </div>

                <ReturnToHome />
            </div>
        </section>
    );
}