export function SpaceInfo ({spaceInfo}) {
    return (
        <div style={{position: 'absolute', top: '39%', left: '1%', width: '220px', height: '260px', border: '0.05vh solid black'}}>
            <div style={{position: 'absolute', left: '3%', textAlign: 'left', fontSize: '13px'}}>
                {spaceInfo}
            </div>
        </div>
    );
}