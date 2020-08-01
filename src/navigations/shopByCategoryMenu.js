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

    constructor(props) {
        super(props)
        this.state = {
            viewSection: false,
            viewShop: '',
            pressIn: false,
            isExpanded: this.setInitialMenuExpandState(this.props.categoryList),
            currentExpandedMenuId: 0,
            isAlreadyExpanded: false,
        }
    }

    componentDidMount = async () => {
    }

    setInitialMenuExpandState = (catList) => {
        let expandState = [];
        catList.map(cat => {
            let tempObj = {
                id: cat.id,
                isExpand: false,
            };
            expandState.push(tempObj);
        })
        return expandState;
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
                    isExpanded={this.state.isExpanded}
                    setCurrentExpandedMenu={(parentId) => this.setCurrentExpandedMenuId(parentId)}
                    navigation={this.props.navigation}
                />
            );
        }
        return items;
    }
    setCurrentExpandedMenuId = (parentId) => {
        let tempArr = [...this.state.isExpanded];
        tempArr.map(exp => {
            if(exp.id === parentId) {
                if(exp.isExpand === true) {
                    exp.isExpand = false;
                } else {
                    exp.isExpand = true;
                }
            } else {
                exp.isExpand = false;
            }
        });
        this.setState({isExpanded: tempArr});
        console.log("after set",this.state.isExpanded);
    }

    render() {
        console.log("render in shop");
        return (
            <DrawerContentScrollView {...this.props}>
                {<View style={{ flex: 1, flexDirection: "row", backgroundColor: "#4a4a4a" }}>
                    <DrawerItem
                        style={{ backgroundColor: "#4a4a4a", width: "100%", }}
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