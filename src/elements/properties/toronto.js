import { GetRandomGoods } from "../../utils/GetRandomGoods";

export const toronto = {
    ids: [2, 9, 18, 24, 33],
    text: "Toronto",
    elements: "Properties",
    level: 0,
    update: 300,
    leave: 30,
    required: GetRandomGoods() 
};