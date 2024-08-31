import { ReturnToHome } from "../modules/returnToHome";

export function RulesPage() {
    return (
        <div className="Outer">
            <div style={{position: 'absolute', left: '2%'}}>
                <p style={{fontWeight: 'bold'}}>Game Rules</p>
                • Each turn, you get to roll the dice once and advance the number of spaces indicated by the dice <br />
                • The board consists of different types of Spaces: Properties, Market, and Chance, each offering distinct choices <br />
                • Upon landing on a space, you must make a choice to complete your turn and continue moving forward <br />
                • The game is won when your assets reach $15,000 <br />
                • The game ends if your assets fall into negative figures <br />

                <br />[Properties] <br />

                - Each Properties Space requires specific goods <br />
                - You can sell goods you own to earn money <br />
                - Updating Properties increases the profit from selling goods <br />

                <br />[Market] <br />

                - You can purchase one item of goods <br />

                <br />[Chance] <br />

                - Random events: Gain or lose money <br />
                - Draw: If the first good in your inventory matches the drawn good, you can sell it for three times the purchase price
            </div>

                <ReturnToHome />
        </div>
    );
}