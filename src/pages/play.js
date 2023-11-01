
import  position from "../images/position.png"
 
export const Play = () => {
    const a = 10;
    return (
        <div style={{position: 'relative', width: '200vh', height: '100vh', backgroundColor: 'lightblue'}}>
            <div style={{position: 'absolute', top: '5vh', left: '10vh', width: '180vh', height: '90vh', backgroundColor: 'white'}}>
                <img src={position} alt="position" style={{ position: 'absolute', top: `${a}%`, left: '20%', width: '20px', height: 'auto'}}/>
            </div>
        </div>
    );
}