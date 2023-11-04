export const Space = ({top, left, id, text, onSpaceClick}) => {
    return (
        <div>
            <button onClick={onSpaceClick} style={{ position: 'absolute', top: `${top}vh`, left: `${left}vh`, width: '10vh', height: '10vh', fontSize: '1.5vh'}}>
                <span className="ID"> {id} </span>
                {text}
            </button>
        </div>
    );
}