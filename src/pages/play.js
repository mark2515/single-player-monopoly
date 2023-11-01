import IconFlagFill from "../icons/flag-fill";
import returnToHome from "../utils/returnToHome";
 
export const Play = () => {
    const a = 10;
    return (
        <div className="Outer">
            <div className="Inner">
                <IconFlagFill style={{ position: 'absolute', top: `${a}%`, left: '20%', width: '10px', height: 'auto'}}/>
                {returnToHome()}
            </div>
        </div>
    );
}