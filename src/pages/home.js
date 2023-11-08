import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="Home">
            <h1> Single-Player Monopoly </h1>
            <Link to="/play" className="HomeButtons"> PLAY </Link>
            <br />
            <Link to="/rule" className="HomeButtons"> RULE </Link>
            <br />
            <Link to="/achievement" className="HomeButtons"> ACHIEVEMENT </Link>
        </div>
    );
}