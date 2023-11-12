import { GetRandomGoods } from "../../utils/GetRandomGoods";

export const calgary = {
    ids: [10, 21, 31],
    text: "Calgary",
    elements: "Properties",
    level: 0,
    update: 200,
    leave: 50,
    required: GetRandomGoods() 
};