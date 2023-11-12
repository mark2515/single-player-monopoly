import { GetRandomGoods } from "../../utils/GetRandomGoods";

export const montreal = {
    ids: [5, 16, 27, 35],
    text: "Montreal",
    elements: "Properties",
    level: 0,
    update: 250,
    leave: 40,
    required: GetRandomGoods() 
};