export const Space = ({top, left, id, name, text}) => {
    return (
        <button onClick={()=>console.log(name.elements)} style={{ position: 'absolute', top: `${top}vh`, left: `${left}vh`, width: '10vh', height: '10vh', fontSize: '1.5vh'}}>
            <span className="ID"> {id} </span>
            {text}
        </button>
    );
}