import { Link } from "react-router-dom";

export function Surrender () {
    return (
        <Link to="/gameOver">
            <button className="Surrender">
                Surrender
            </button>
        </Link>
    );
}