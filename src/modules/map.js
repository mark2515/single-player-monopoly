import { Space } from "./space";
import { go } from "../elements/chance/go";
import { vancouver } from "../elements/properties/vancouver";
import { useState } from 'react';

export const Map = () => {
    const [info, setInfo] = useState("");

    function handleClick(element) {
        setInfo(element.elements);
    }
    return (
        <div>
            <Space top={5} left={50} id={go.id[0]} name={go} text={go.text} onClick={()=>handleClick(go)}/>
            <Space top={5} left={60} id={vancouver.id[0]} name={vancouver} text={vancouver.text} onClick={()=>handleClick(vancouver)}/>
            <Space top={5} left={70} id={2}/>
            <Space top={5} left={80} id={3}/>
            <Space top={5} left={90} id={4}/>
            <Space top={5} left={100} id={5}/>
            <Space top={5} left={110} id={6}/>
            <Space top={5} left={120} id={7}/>
            <Space top={5} left={130} id={8}/>
            <Space top={5} left={140} id={9}/>
            <Space top={5} left={150} id={10}/>
            <Space top={5} left={160} id={11}/>
            <Space top={15} left={160} id={12}/>
            <Space top={25} left={160} id={13}/>
            <Space top={35} left={160} id={14}/>
            <Space top={45} left={160} id={15}/>
            <Space top={55} left={160} id={16}/>
            <Space top={65} left={160} id={17}/>
            <Space top={75} left={160} id={18} text={"BC"}/>
            <Space top={75} left={150} id={19}/>
            <Space top={75} left={140} id={20}/>
            <Space top={75} left={130} id={21}/>
            <Space top={75} left={120} id={22}/>
            <Space top={75} left={110} id={23}/>
            <Space top={75} left={100} id={24}/>
            <Space top={75} left={90} id={25}/>
            <Space top={75} left={80} id={26}/>
            <Space top={75} left={70} id={27}/>
            <Space top={75} left={60} id={28}/>
            <Space top={75} left={50} id={29}/>
            <Space top={65} left={50} id={30}/>
            <Space top={55} left={50} id={31}/>
            <Space top={45} left={50} id={32}/>
            <Space top={35} left={50} id={33}/>
            <Space top={25} left={50} id={34}/>
            <Space top={15} left={50} id={35}/>
            <div style={{position: 'absolute', top: '2vh', left: '2vh', width: '37vh', height: '80vh', border: '0.05vh solid black'}}>
                <div style={{position: 'absolute', left: '2vh', textAlign: 'left', fontSize: '2vh'}}>
                    <p> Title </p>
                    {info}
                </div>
            </div>

        </div>
    );
}