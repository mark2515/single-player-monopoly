import { player } from "../modules/player";

function restart () {
    player.position = 0;
    player.money = 1500;
    player.goods = [];
}

export default restart;