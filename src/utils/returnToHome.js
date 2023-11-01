import { Link } from "react-router-dom";
import IconKeyboardReturn from "../icons/keyboard-return"

function returnToHome () {
    return (
        <Link to="/" className="Return">
            <IconKeyboardReturn />
        </Link>
    );
}

export default returnToHome;