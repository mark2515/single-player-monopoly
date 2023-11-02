import { Link } from "react-router-dom";
import IconKeyboardReturn from "../icons/keyboard-return"

function returnToHome () {
    return (
        <Link to="/">
            <IconKeyboardReturn className="Return"/>
        </Link>
    );
}

export default returnToHome;