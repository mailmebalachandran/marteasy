import { RESTAURANTS_SUB_CATS_REGEX } from "../../constants";

export const isShowStore = (catName) => {
    const eggsPatt = new RegExp("EGG");
    const groceriesPatt = new RegExp("GROCER");
    let name = catName.toUpperCase();
    if (eggsPatt.test(name) || groceriesPatt.test(name)) {
        return true
    } else {
        return false
    }RESTAURANTS_SUB_CATS_REGEX
}

//Get Ordered Restaurants SubCategory
export const getOrderedRestaurantSubCats = (cats) => {
    let restaSubCats = [];
    RESTAURANTS_SUB_CATS_REGEX.map((catRegex) => {
        cats.map(cat => {
            let name = cat.name.toUpperCase();
            console.log("name",name,catRegex)
            if(catRegex.test(name)) {
                restaSubCats.push(cat);
            }
        })
    })
    return restaSubCats;
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
