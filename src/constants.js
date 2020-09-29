export const NOSTOREDEFAULT_TEXT_TO_SEARCH = "secure.gravatar.com";
export const NODISHDEFAULT_TEXT_TO_SEARCH = "woocommerce-placeholder";
export const DELIVERY_FEE = 100;
export const BASE_URL = "http://marteasy.vasanthamveliyeetagam.com";
export const TAX_AMOUNT = 5;
export const CATEGORY_TAX_ID = 129;
export const PARENT_CATEGORIES_ORDER = ["GROCER","FRUIT","EGG","BAKERY","RESTAURANT","ELECTRONICS","PHARMACY","PETS"];
//Parent Categories RegexPattern
const groceriesPatt = new RegExp("GROCER");
const fruitsPatt = new RegExp("FRUIT");
const eggPatt = new RegExp("EGG");
const bakeryPatt = new RegExp("BAKERY");
const restaurantPatt = new RegExp("RESTAURANT");
const electronicsPatt = new RegExp("ELECTRONICS");
const pharmacyPatt = new RegExp("PHARMACY");
const petsPatt = new RegExp("PETS");
//Ordered Array To Display
export const PARENT_CATS_REGEX = [
    groceriesPatt,
    fruitsPatt,
    eggPatt,
    bakeryPatt,
    restaurantPatt,
    electronicsPatt,
    pharmacyPatt,
    petsPatt
]

//Restaurant SubCategories ordering
const indianPatt = new RegExp("INDIAN");
const continentalPatt = new RegExp("CONTINENTAL");
const chinesePatt = new RegExp("CHINESE");
const tandoorPatt = new RegExp("TANDOOR");
const pizzaPatt = new RegExp("PIZZA");
const beveragePatt = new RegExp("BEVERAGE");
    //Ordered Array To Display
export const RESTAURANTS_SUB_CATS_REGEX = [
    indianPatt,
    continentalPatt,
    chinesePatt,
    tandoorPatt,
    pizzaPatt,
    beveragePatt,
]