import IconFlagFill from "../icons/flag-fill";
import { useState, useEffect } from "react";

export function Space ({id, top, left, text, position, onSpaceClick}) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if(id === position) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [id, position]);

    return (
            <div className="Space" onClick={onSpaceClick} style={{top: `${top}px`, left: `${left}px`}}>
                {visible && <IconFlagFill />}
                <span className="ID"> {id} </span>
                <div className="Font">
                    {text}
                </div>
            </div>
    );
}