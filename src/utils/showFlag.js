import IconFlagFill from "../icons/flag-fill";

function showFlag (position) {
    const horizontal = 54;
    const vertical = 6;
    return (
        <div>
            {position >= 0 && position <= 11 && <IconFlagFill style={{ position: 'absolute', top: `${vertical}vh`, left: `${horizontal + position * 10}vh`, width: '2vh', height: 'auto'}}/>}
            {position >= 12 && position <= 18 && <IconFlagFill style={{ position: 'absolute', top: `${vertical + (position - 11) * 10}vh`, left: `${horizontal + 11 * 10}vh`, width: '2vh', height: 'auto'}}/>}
            {position >= 19 && position <= 29 && <IconFlagFill style={{ position: 'absolute', top: `${vertical + (18 - 11) * 10}vh`, left: `${horizontal + 11 * 10 - (position - 18) * 10}vh`, width: '2vh', height: 'auto'}}/>}
            {position >= 30 && position <= 35 && <IconFlagFill style={{ position: 'absolute', top: `${vertical + (18 - 11) * 10 - (position - 29) * 10}vh`, left: `${horizontal}vh`, width: '2vh', height: 'auto'}}/>}
        </div>
    );
}

export default showFlag;