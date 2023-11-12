import IconBxBook from "../icons/bx-book";

export function GameRulesIcon ({rulesShown, setRulesShown}) {
    const handleClick = () => {
        setRulesShown(!rulesShown);
    }
    return (
        <div title="Show Game Rules">
            <IconBxBook className="RulesIcon" onClick={handleClick}/>
        </div>
    );
}