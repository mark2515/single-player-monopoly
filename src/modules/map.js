import { Space } from "./space";
import { go } from "../elements/home/go";
import { chance } from "../elements/chance/chance";
import { market } from "../elements/market/market";
import { toronto } from "../elements/properties/toronto";
import { montreal } from "../elements/properties/montreal";
import { vancouver } from "../elements/properties/vancouver";
import { calgary } from "../elements/properties/calgary";
import { edmonton } from "../elements/properties/edmonton";
import { ottawa } from "../elements/properties/ottawa";
import { player } from "./player";
import { useState } from 'react';

export const Map = () => {
    const [info, setInfo] = useState("");

    function handleClick(element) {
        setInfo(<span> <p> {element.text} </p> <br /> 
        IDs: {element.ids.map((id, index)=>(id+" "))} <br />
        Category: {element.elements} <br />
        
        {element.elements === "properties" && <span> Cost: {element.cost} <br />
                                                    Update: {element.update} <br />
                                                    level: {element.level} <br />
                                                    Sell: {element.sell} <br />
                                                    Withdraw: {element.withdraw} <br />
                                                    Toll: {element.toll} <br />
                                                    Required Goods / Purchase Price: {element.required.map((good, index)=>(<li key={index}>{`${good.good} / ${good.price}`}</li>))}</span>}
        </span>)
    };
    return (
        <div>
            <Space top={5} left={50} id={0} text={go.text} onClick={()=>handleClick(go)}/>
            <Space top={5} left={60} id={1} text={vancouver.text} onClick={()=>handleClick(vancouver)}/>
            <Space top={5} left={70} id={2} text={toronto.text} onClick={()=>handleClick(toronto)}/>
            <Space top={5} left={80} id={3} text={chance.text} onClick={()=>handleClick(chance)}/>
            <Space top={5} left={90} id={4} text={ottawa.text} onClick={()=>handleClick(ottawa)}/>
            <Space top={5} left={100} id={5} text={montreal.text} onClick={()=>handleClick(montreal)}/>
            <Space top={5} left={110} id={6} text={market.text} onClick={()=>handleClick(market)}/>
            <Space top={5} left={120} id={7} text={vancouver.text} onClick={()=>handleClick(vancouver)}/>
            <Space top={5} left={130} id={8} text={chance.text} onClick={()=>handleClick(chance)}/>
            <Space top={5} left={140} id={9} text={toronto.text} onClick={()=>handleClick(toronto)}/>
            <Space top={5} left={150} id={10} text={calgary.text} onClick={()=>handleClick(calgary)}/>
            <Space top={5} left={160} id={11} text={market.text} onClick={()=>handleClick(market)}/>
            <Space top={15} left={160} id={12} text={edmonton.text} onClick={()=>handleClick(edmonton)}/>
            <Space top={25} left={160} id={13} text={edmonton.text} onClick={()=>handleClick(edmonton)}/>
            <Space top={35} left={160} id={14} text={chance.text} onClick={()=>handleClick(chance)}/>
            <Space top={45} left={160} id={15} text={market.text} onClick={()=>handleClick(market)}/>
            <Space top={55} left={160} id={16} text={montreal.text} onClick={()=>handleClick(montreal)}/>
            <Space top={65} left={160} id={17} text={vancouver.text} onClick={()=>handleClick(vancouver)}/>
            <Space top={75} left={160} id={18} text={toronto.text} onClick={()=>handleClick(toronto)}/>
            <Space top={75} left={150} id={19} text={chance.text} onClick={()=>handleClick(chance)}/>
            <Space top={75} left={140} id={20} text={edmonton.text} onClick={()=>handleClick(edmonton)}/>
            <Space top={75} left={130} id={21} text={calgary.text} onClick={()=>handleClick(calgary)}/>
            <Space top={75} left={120} id={22} text={market.text} onClick={()=>handleClick(market)}/>
            <Space top={75} left={110} id={23} text={market.text} onClick={()=>handleClick(market)}/>
            <Space top={75} left={100} id={24} text={toronto.text} onClick={()=>handleClick(toronto)}/>
            <Space top={75} left={90} id={25} text={chance.text} onClick={()=>handleClick(chance)}/>
            <Space top={75} left={80} id={26} text={vancouver.text} onClick={()=>handleClick(vancouver)}/>
            <Space top={75} left={70} id={27} text={montreal.text} onClick={()=>handleClick(montreal)}/>
            <Space top={75} left={60} id={28} text={market.text} onClick={()=>handleClick(market)}/>
            <Space top={75} left={50} id={29} text={chance.text} onClick={()=>handleClick(chance)}/>
            <Space top={65} left={50} id={30} text={ottawa.text} onClick={()=>handleClick(ottawa)}/>
            <Space top={55} left={50} id={31} text={calgary.text} onClick={()=>handleClick(calgary)}/>
            <Space top={45} left={50} id={32} text={market.text} onClick={()=>handleClick(market)}/>
            <Space top={35} left={50} id={33} text={toronto.text} onClick={()=>handleClick(toronto)}/>
            <Space top={25} left={50} id={34} text={chance.text} onClick={()=>handleClick(chance)}/>
            <Space top={15} left={50} id={35} text={montreal.text} onClick={()=>handleClick(montreal)}/>

            <div style={{position: 'absolute', top: '2vh', left: '2vh', width: '37vh', height: '30vh', border: '0.05vh solid black'}}>
                <div style={{position: 'absolute', left: '2vh', textAlign: 'left', fontSize: '2vh'}}>
                    <p> Player Info </p>
                    {<span> Position: {player.position} <br />
                            Money: {player.money} <br /> 
                            Goods: {player.goods.map((good, index)=>(<li key={index}>{good}</li>))}</span>}
                </div>
            </div>

            <div style={{position: 'absolute', top: '32vh', left: '2vh', width: '37vh', height: '50vh', border: '0.05vh solid black'}}>
                <div style={{position: 'absolute', left: '2vh', textAlign: 'left', fontSize: '2vh'}}>
                    {info}
                </div>
            </div>

        </div>
    );
}