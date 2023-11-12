export const hasInvolved = (propertyRequiredGoods, goods) => {
    if(goods.length === 0) {
        return false;
    }

    for (let i = 0; i < goods.length; i++) {
        if(goods[i].name === propertyRequiredGoods.name) {
            return true;
        }
    }
    return false;
}