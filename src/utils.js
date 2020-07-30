import { Dimensions } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);
import { PARENT_CATS_REGEX } from "./constants";

export const isUserLoggedIn = async () => {
    const userDetails = await AsyncStorage.getItem('userAuth');
    if (userDetails !== null) {
        return userDetails;
    } else {
        return false;
    }
}

export const logout = async (navigation) => {
    await AsyncStorage.removeItem('userAuth');
    navigation.navigate("Home");
}

export const getOrderedParentCategories = (cats) => {
    let parentCats = [];
    PARENT_CATS_REGEX.map((catRegex) => {
        cats.map(cat => {
            let name = cat.name.toUpperCase();
            if(catRegex.test(name)) {
                parentCats.push(cat);
            }
        })
    })
    return parentCats;
}