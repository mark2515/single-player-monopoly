import { player } from "../modules/player";

function passHome (number, position) {
    if(position - number < 0) {
        player.money = player.money + 100;
    };
}

export default passHome;