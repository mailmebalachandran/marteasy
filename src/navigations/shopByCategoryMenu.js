import React, { Component } from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
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
        categoryList:[]
    }

    componentDidMount = async () => {
        const result= await HomeAPI.getParentCategories();
        this.setState({categoryList: result})
    }


    handleShopByCategory = () => {
        const Drawer = createDrawerNavigator();
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={
                    (props) => <DrawerContainer {...props} />}
                drawerStyle={{ width: "85%" }}
                {...this.props}
            >
            </Drawer.Navigator>
        </NavigationContainer>
    }



    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor:"#4a4a4a"  }}>
                    <View style={{ flex: 0.4, }}>
                        <DrawerItem
                            icon={() => (<FontAwesome5 name={'arrow-left'} size={20} color={"white"}/>)}
                            label=""
                            onPress={() => this.props.onPress(false)} />
                    </View>
                    <DrawerItem label="Shop By Category" inactiveTintColor={"white"} />
                </View>
                {this.props.categoryList && this.props.categoryList.map(category=>
                    <TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center",padding: "3%" }}>
                        <View style={{ flex: 8, marginLeft:"1%",}}>
                <Text style={{fontSize: 14, fontWeight: "normal", marginTop: "2%"}}>{unescape(category.name)}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <AntDesign name={"plus"} size={20} />
                        </View>
                    </View>
                    </TouchableOpacity>)}
                
            </DrawerContentScrollView>
        )
    }
}

export default ShopByCategory;