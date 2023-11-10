export function PlayerInfo ({round, position, money, goods}) {
    return (
        <div style={{position: 'absolute', top: '1%', left: '1%', width: '220px', height: '180px', border: '0.05vh solid black'}}>
            <div style={{position: 'absolute', left: '3%', textAlign: 'left', fontSize: '13px'}}>
                <p> Player Info </p>
                <span> 
                    Round: {round} <br />
                    Position: {position} <br />
                    Money: {money} <br />
                    Goods: {goods.map((good, index)=>(<li key={index}>{good.name}</li>))}
                </span>
            </div>
        </div>
    );
}