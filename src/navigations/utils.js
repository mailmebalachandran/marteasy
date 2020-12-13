import React from "react";
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import * as ThemeColor from '../themes/colors';
import { getparentSubCategories } from "../api/Home/SubcategoryAPI";

export const getTabIcons = (route, focused, color, size) => {
    let iconName;
    let iconType;
    if (route.name === 'Home') {
        iconName = Platform.OS === 'ios' ? "ios-home" : "home";
        iconType = "ionicons";
    } else if (route.name === 'Search') {
        iconName = Platform.OS === 'ios' ? "ios-search" : "search";
        iconType = "ionicons";
    } else if (route.name === 'Categories') {
        iconName = "appstore-o";
        iconType = "antdesign";
    } else if (route.name === 'Cart') {
        iconName = "shoppingcart";
        iconType = "antdesign";
    }
    return <Icon type={iconType} name={iconName} size={size} color={color} />;
}

export const getMenuSubcategories = async (cats) => {
    let subMenuList = [];
    await Promise.all(cats.map( async (cat) => {
        const result = await getparentSubCategories(cat.id);
        let tempObj = {
            parentId: cat.id,
            parentName: cat.name,
            subCats: result
        }
        subMenuList.push(tempObj);
    }))
    return subMenuList;
}