export const Space = ({top, left, id, text}) => {
    return (
        <button style={{ position: 'absolute', top: `${top}vh`, left: `${left}vh`, width: '10vh', height: '10vh', fontSize: '2vh'}}>
            <span class="ID"> {id} </span>
            {text}
        </button>
    );
}