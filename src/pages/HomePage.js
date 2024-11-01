import { Link } from "react-router-dom";
import '../style.css';

export function HomePage() {
    return (
        <section>
            <div className="Home">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1>Single-Player Monopoly</h1>
                <Link to="/play" className="HomeButtons"> PLAY </Link>
                <br />
                <Link to="/rules" className="HomeButtons"> RULES </Link>
                <br />
                <Link to="/credits" className="HomeButtons"> CREDITS </Link>
            </div>
        </section>
    );
}