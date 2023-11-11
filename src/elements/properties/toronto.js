import { GetRandomGoods } from "../../utils/GetRandomGoods";

export const toronto = {
    ids: [2, 9, 18, 24, 33],
    text: "Toronto",
    elements: "Properties",
    level: 0,
    update: 60,
    leave: 12,
    required: GetRandomGoods() 
};