import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1> Single-Player Monopoly </h1>
            <Link to="/play" className="Home"> PLAY </Link>
            <br />
            <Link to="/rule" className="Home"> RULE </Link>
            <br />
            <Link to="/achievement" className="Home"> ACHIEVEMENT </Link>
        </div>
    );
}