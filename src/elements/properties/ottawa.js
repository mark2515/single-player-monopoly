import { GetRandomGoods } from "../../utils/GetRandomGoods";

export const ottawa = {
    ids: [4, 30],
    text: "Ottawa",
    elements: "Properties",
    level: 0,
    update: 150,
    leave: 50,
    required: GetRandomGoods() 
};