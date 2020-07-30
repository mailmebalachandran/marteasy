import React, { Component } from "react";
import { View, Text, LayoutAnimation, Platform, UIManager } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import Accordian from '../components/Accordian/accordian';
import styles from "./styles";
import { Avatar, Divider } from 'react-native-elements';
import { MOTOR_WASH_IMAGE1, MOTOR_WASH_IMAGE8 } from "../assets/index";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { TouchableOpacity, TouchableNativeFeedback } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeAPI from '../api/Home/HomeAPI';
import unescape from "unescape";
import DrawerMenu from "./drawerMenu";
import Theme from "../themes/colors";
let isAlreadyExpanded = false;
var previousId = 0;
class ShopByCategory extends Component {

    state = {
        viewSection: false,
        viewShop: '',
        pressIn: false,
        isExpanded: false,
        currentExpandedMenuId: 0,
        isAlreadyExpanded: false,
    }

    componentDidMount = async () => {
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

    renderAccordians = () => {
        const items = [];
        let item;
        const categoryList = this.props.categoryList
        for (item of categoryList) {
            items.push(
                <Accordian
                    title={item.name}
                    subCatList={this.props.subCatList}
                    parentId={item.id}
                    isExpanded={this.getIsExpanded(item.id)}
                    setCurrentExpandedMenu={(parentId) => this.setCurrentExpandedMenuId(parentId)}
                />
            );
        }
        return items;
    }
    setCurrentExpandedMenuId = (parentId) => {
        this.setState({currentExpandedMenuId: parentId});
    }
    getIsExpanded = (currentId) => {
        let status = false;
        if(this.state.currentExpandedMenuId === currentId) {
            console.log("is ids equal : yes")
            console.log("prev,curr",previousId,currentId)
            if(isAlreadyExpanded && previousId === currentId) {
                console.log("in expanded state and same item");
                isAlreadyExpanded = false;
                status =  false;
            } else {
                console.log("is in expande state and diff item");
                isAlreadyExpanded = true;
                status = true;
            }
        } else {
            status = false;
        }
        previousId = this.state.currentExpandedMenuId;
        return status;
    }

    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                { <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#4a4a4a" }}> 
                        <DrawerItem
                            style={{backgroundColor: "#4a4a4a", width: "100%",}}
                            icon={() => (<FontAwesome5 name={'arrow-left'} size={20} color={"white"} />)}
                            label="Shop By Category"
                            onPress={() => this.props.onPress(false)}
                            inactiveTintColor={"white"} />
                </View>}
                <View style={{
                    flex: 1, flexDirection: "column",
                }}>
                    {this.renderAccordians()}
                </View>
            </DrawerContentScrollView>
        )
    }
}

export default ShopByCategory;