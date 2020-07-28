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
import Theme from "../themes/colors"

class ShopByCategory extends Component {

    state = {
        viewSection: false,
        viewShop: '',
        categoryList: [],
        pressIn: false,
    }

    componentDidMount = async () => {
        const result = await HomeAPI.getParentCategories();
        this.setState({ categoryList: result })
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

    renderAccordians = () => {
        const items = [];
        let item;
        console.log('In renderAccordians', this.props.categoryList)
        const categoryList = this.props.categoryList
        for (item of categoryList) {
            items.push(
                <Accordian
                    title={item.name}
                    data={item.name}
                />
            );
        }
        return items;
    }

    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#4a4a4a" }}>
                    <View style={{ flex: 0.4, }}>
                        <DrawerItem
                            icon={() => (<FontAwesome5 name={'arrow-left'} size={20} color={"white"} />)}
                            label=""
                            onPress={() => this.props.onPress(false)} />
                    </View>
                    <DrawerItem label="Shop By Category" inactiveTintColor={"white"} />
                </View>
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