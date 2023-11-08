import { Link } from "react-router-dom";
import IconKeyboardReturn from "../icons/keyboard-return"

export function ReturnToHome () {
    return (
        <Link to="/">
            <IconKeyboardReturn className="Return"/>
        </Link>
    );
}