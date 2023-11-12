import { toronto } from "../elements/properties/toronto";
import { montreal } from "../elements/properties/montreal";
import { vancouver } from "../elements/properties/vancouver";
import { calgary } from "../elements/properties/calgary";
import { edmonton } from "../elements/properties/edmonton";
import { ottawa } from "../elements/properties/ottawa";
import { GetRandomGoods } from "./GetRandomGoods";

export const reset = () => {
    toronto.level = 0;
    toronto.update = 300;
    toronto.leave = 20;
    toronto.required = GetRandomGoods();

    montreal.level = 0;
    montreal.update = 250;
    montreal.leave = 30;
    montreal.required = GetRandomGoods();

    vancouver.level = 0;
    vancouver.update = 250;
    vancouver.leave = 30;
    vancouver.required = GetRandomGoods();

    calgary.level = 0;
    calgary.update = 200;
    calgary.leave = 40;
    calgary.required = GetRandomGoods();

    edmonton.level = 0;
    edmonton.update = 200;
    edmonton.leave = 40;
    edmonton.required = GetRandomGoods();

    ottawa.level = 0;
    ottawa.update = 150;
    ottawa.leave = 50;
    ottawa.required = GetRandomGoods();
}