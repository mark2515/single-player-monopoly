import { GetRandomGoods } from "../../utils/GetRandomGoods";

export const vancouver = {
    ids: [1, 7, 17, 26],
    text: "Vancouver",
    elements: "Properties",
    level: 0,
    update: 50,
    leave: 10,
    required: GetRandomGoods() 
};