export const isShowStore = (catName) => {
    const eggsPatt = new RegExp("EGG");
    const groceriesPatt = new RegExp("GROCER");
    let name = catName.toUpperCase();
    if (eggsPatt.test(name) || groceriesPatt.test(name)) {
        return true
    } else {
        return false
    }
}

export const transformToStoreData = (products) => {
    let storeIds = [];
    let storeData = [];
    products.map(pro => {
        if (!storeIds.includes(pro.store.id)) {
            storeIds.push(pro.store.id);
            storeData.push({
                id: pro.store.id,
                name: pro.store.name,
            });
        }
    })
    return storeData;
}
