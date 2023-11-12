import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="Home">
            <h1> Single-Player Monopoly </h1>
            <Link to="/play" className="HomeButtons"> PLAY </Link>
            <br />
            <Link to="/rules" className="HomeButtons"> RULES </Link>
            <br />
            <Link to="/credits" className="HomeButtons"> CREDITS </Link>
        </div>
    );
}