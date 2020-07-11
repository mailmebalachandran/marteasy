import { Dimensions, AsyncStorage } from "react-native";
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);

export const isUserLoggedIn = async () => {
    console.log("is UserLogged");
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