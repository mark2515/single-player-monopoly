import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1> Single-Player Monopoly </h1>
            <Link to="/play" className="Home"> PLAY </Link>
            <br />
            <Link to="/achievements" className="Home"> ACHIEVEMENTS </Link>
        </div>
    );
}