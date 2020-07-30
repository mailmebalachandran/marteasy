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