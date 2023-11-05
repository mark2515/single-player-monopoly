import { player } from "../modules/player";
import getRandomGoods from "./getRandomGoods";

function restart () {
    player.position = 0;
    player.money = 1500;
    player.goods = getRandomGoods();
}

export default restart;