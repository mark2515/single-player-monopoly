export const Space = ({top, left, id, name, text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} style={{ position: 'absolute', top: `${top}vh`, left: `${left}vh`, width: '10vh', height: '10vh', fontSize: '1.5vh'}}>
                <span className="ID"> {id} </span>
                {text}
            </button>
        </div>
    );
}