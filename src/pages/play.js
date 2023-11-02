import IconFlagFill from "../icons/flag-fill";
import returnToHome from "../utils/returnToHome";
import { Map } from "../modules/map"; 
 
export const Play = () => {
    const a = 31;
    return (
        <div className="Outer">
            <div className="Inner">
                <div className="Line"></div>
                <Map />
              
                <IconFlagFill style={{ position: 'absolute', top: `${a}%`, left: '52%', width: '2vh', height: 'auto'}}/>
                {returnToHome()}
            </div>
        </div>
    );
}