import { Space } from "../modules/space";
import { go } from "../elements/home/go";
import { chance } from "../elements/chance/chance";
import { market } from "../elements/market/market";
import { toronto } from "../elements/properties/toronto";
import { montreal } from "../elements/properties/montreal";
import { vancouver } from "../elements/properties/vancouver";
import { calgary } from "../elements/properties/calgary";
import { edmonton } from "../elements/properties/edmonton";
import { ottawa } from "../elements/properties/ottawa";
import { useState } from "react";
import { SpaceInfo } from "./spaceInfo";

export function Map ({position}) {
    const [spaceInfo, setSpaceInfo] = useState("");

    const handleClick = (element) => {
        setSpaceInfo(<span> <p> {element.text} </p>
        IDs: {element.ids.map((id, index)=>(id+" "))} <br />
        Category: {element.elements} <br />   
        {element.elements === "Properties" && <span> Cost: {element.cost} <br />
                                                    Update: {element.update} <br />
                                                    level: {element.level} <br />
                                                    Sell: {element.sell} <br />
                                                    Withdraw: {element.withdraw} <br />
                                                    Toll: {element.toll} <br />
                                                    Required Goods / Purchase Price: {element.required.map((good, index)=>(<li key={index}>{`${good.good} / ${good.price}`}</li>))}</span>}
                                               </span>)
    };

    return (
        <>
            <Space id ={0} top={50} left={300} text={go.text} position={position} onSpaceClick={()=>handleClick(go)}/>
            <Space id ={1} top={50} left={350} text={vancouver.text} position={position} onSpaceClick={()=>handleClick(vancouver)}/>
            <Space id ={2} top={50} left={400} text={toronto.text} position={position} onSpaceClick={()=>handleClick(toronto)}/>
            <Space id ={3} top={50} left={450} text={chance.text} position={position} onSpaceClick={()=>handleClick(chance)}/>
            <Space id ={4} top={50} left={500} text={ottawa.text} position={position} onSpaceClick={()=>handleClick(ottawa)}/>
            <Space id ={5} top={50} left={550} text={montreal.text} position={position} onSpaceClick={()=>handleClick(montreal)}/>
            <Space id ={6} top={50} left={600} text={market.text} position={position} onSpaceClick={()=>handleClick(market)}/>
            <Space id ={7} top={50} left={650} text={vancouver.text} position={position} onSpaceClick={()=>handleClick(vancouver)}/>
            <Space id ={8} top={50} left={700} text={chance.text} position={position} onSpaceClick={()=>handleClick(chance)}/>
            <Space id ={9} top={50} left={750} text={toronto.text} position={position} onSpaceClick={()=>handleClick(toronto)}/>
            <Space id ={10} top={50} left={800} text={calgary.text} position={position} onSpaceClick={()=>handleClick(calgary)}/>
            <Space id ={11} top={50} left={850} text={market.text} position={position} onSpaceClick={()=>handleClick(market)}/>
            <Space id ={12} top={100} left={850} text={edmonton.text} position={position} onSpaceClick={()=>handleClick(edmonton)}/>
            <Space id ={13} top={150} left={850} text={edmonton.text} position={position} onSpaceClick={()=>handleClick(edmonton)}/>
            <Space id ={14} top={200} left={850} text={chance.text} position={position} onSpaceClick={()=>handleClick(chance)}/>
            <Space id ={15} top={250} left={850} text={market.text} position={position} onSpaceClick={()=>handleClick(market)}/>
            <Space id ={16} top={300} left={850} text={montreal.text} position={position} onSpaceClick={()=>handleClick(montreal)}/>
            <Space id ={17} top={350} left={850} text={vancouver.text} position={position} onSpaceClick={()=>handleClick(vancouver)}/>
            <Space id ={18} top={400} left={850} text={toronto.text} position={position} onSpaceClick={()=>handleClick(toronto)}/>
            <Space id ={19} top={400} left={800} text={chance.text} position={position} onSpaceClick={()=>handleClick(chance)}/>
            <Space id ={20} top={400} left={750} text={edmonton.text} position={position} onSpaceClick={()=>handleClick(edmonton)}/>
            <Space id ={21} top={400} left={700} text={calgary.text} position={position} onSpaceClick={()=>handleClick(calgary)}/>
            <Space id ={22} top={400} left={650} text={market.text} position={position} onSpaceClick={()=>handleClick(market)}/>
            <Space id ={23} top={400} left={600} text={market.text} position={position} onSpaceClick={()=>handleClick(market)}/>
            <Space id ={24} top={400} left={550} text={toronto.text} position={position} onSpaceClick={()=>handleClick(toronto)}/>
            <Space id ={25} top={400} left={500} text={chance.text} position={position} onSpaceClick={()=>handleClick(chance)}/>
            <Space id ={26} top={400} left={450} text={vancouver.text} position={position} onSpaceClick={()=>handleClick(vancouver)}/>
            <Space id ={27} top={400} left={400} text={montreal.text} position={position} onSpaceClick={()=>handleClick(montreal)}/>
            <Space id ={28} top={400} left={350} text={market.text} position={position} onSpaceClick={()=>handleClick(market)}/>
            <Space id ={29} top={400} left={300} text={chance.text} position={position} onSpaceClick={()=>handleClick(chance)}/>
            <Space id ={30} top={350} left={300} text={ottawa.text} position={position} onSpaceClick={()=>handleClick(ottawa)}/>
            <Space id ={31} top={300} left={300} text={calgary.text} position={position} onSpaceClick={()=>handleClick(calgary)}/>
            <Space id ={32} top={250} left={300} text={market.text} position={position} onSpaceClick={()=>handleClick(market)}/>
            <Space id ={33} top={200} left={300} text={toronto.text} position={position} onSpaceClick={()=>handleClick(toronto)}/>
            <Space id ={34} top={150} left={300} text={chance.text} position={position} onSpaceClick={()=>handleClick(chance)}/>
            <Space id ={35} top={100} left={300} text={montreal.text} position={position} onSpaceClick={()=>handleClick(montreal)}/>

            <SpaceInfo spaceInfo={spaceInfo}/>
        </>
    );
}