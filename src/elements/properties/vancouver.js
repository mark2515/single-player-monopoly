import { GetRandomGoods } from "../../utils/GetRandomGoods";

export const vancouver = {
    ids: [1, 7, 17, 26],
    text: "Vancouver",
    elements: "Properties",
    cost: 200,
    update: 50,
    level: 0,
    sell: 200,
    withdraw: 20,
    toll: 10,
    required: GetRandomGoods() 
};