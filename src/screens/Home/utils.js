import {CAT_DEFAULT} from "../../assets/index";
export const transformCategoryList = (categories, isMain) => {
    let mainCategories = [];
    let otherCategories = [];
    const fruitsPatt = new RegExp("FRUIT");
    const groceriesPatt = new RegExp("GROCER");
    categories.map(cat => {
        let name = cat.name.toUpperCase();
        let src = isImageValid(cat.image);

        // if(fruitsPatt.test(name) || groceriesPatt.test(name)) {
        //     mainCategories.push(cat);
        // }
        if(cat.name !== "All") {
            mainCategories.push(cat)
        }
    })
    return mainCategories;
}
const isImageValid = (img) => {
    if(img === null) {
        return CAT_DEFAULT;
    } else {
        if(img.src === undefined || img.src === null || img.src === "") {
            return CAT_DEFAULT;
        } else {
            return img.src;
        }
    }
}