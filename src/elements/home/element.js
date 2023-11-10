import { go } from "./go";
import { chance } from "../chance/chance";
import { market } from "../market/market";
import { toronto } from "../properties/toronto";
import { montreal } from "../properties/montreal";
import { vancouver } from "../properties/vancouver";
import { calgary } from "../properties/calgary";
import { edmonton } from "../properties/edmonton";
import { ottawa } from "../properties/ottawa";

export const element = [go, vancouver, toronto, chance, ottawa,
                        montreal, market, vancouver, chance, toronto, 
                        calgary, market, edmonton, edmonton, chance, 
                        market, montreal, vancouver, toronto, chance,
                        edmonton, calgary, market, market, toronto,
                        chance, vancouver, montreal, market, chance,
                        ottawa, calgary, market, toronto, chance, montreal];