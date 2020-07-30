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
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";




class DrawerMenu extends Component {

    state = {
        viewSection: false,
        categoryList:[]
    }
    
    handleShopByCategory = () => {
        this.setState({ viewShop: true })
    }
    
    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <DrawerItem
                    icon={() => (<MaterialIcons name={'home'} size={25} />)}
                    label="Home"
                    onPress={() => { this.props.navigation.navigate("HomeScreen") }} />

                <DrawerItem
                    icon={() => (<MaterialIcons name={'account-circle'} size={25} />)}
                    label="Account"
                    onPress={() => {
                        this.setState({ viewSection: !this.state.viewSection })
                        {
                            this.state.viewSection === true ?
                                (<View style={{ height: 100, width: 100 }}>
                                    <DrawerItem
                                        icon={() => (<MaterialIcons name={'account-circle'} size={25} />)}
                                        label="Add store" />
                                </View>) : {}
                        }
                    }} />
                <View style={{flex: 0.5, flexDirection: "row"}}>
                <DrawerItem
                    icon={() => (<MaterialIcons name={'shopping-cart'} size={25} />)}
                    label="Shop By Category"
                    onPress={()=>{this.props.onPress(true)}} />
                    <FontAwesome5 name={"caret-right"} size={"20"}/>
                </View>
                

                <DrawerItem
                    icon={() => (<MaterialIcons name={'card-membership'} size={25} />)}
                    label="MartEasy Membership"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<FontAwesome5 name={'user-friends'} size={20} />)}
                    label="Refer Your Friends"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<FontAwesome5 name={'briefcase'} size={24} />)}
                    label="Earn Rewards"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<MaterialIcons name={'question-answer'} size={25} />)}
                    label="FAQ's"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<MaterialIcons name={'security'} size={25} />)}
                    label="Privacy Policy"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<MaterialIcons name={'format-list-numbered'} size={25} />)}
                    label="Terms and Conditions"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<AntDesign name={'customerservice'} size={25} />)}
                    label="Customer Support"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<MaterialIcons name={'stars'} size={25} />)}
                    label="Rate Us"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                <DrawerItem
                    icon={() => (<FontAwesome5 name={'heartbeat'} size={25} />)}
                    label="Share Our Love"
                    onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
            </DrawerContentScrollView>
        )
    }
}

export default DrawerMenu;