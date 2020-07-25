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


class DrawerContainer extends Component {
    render() {
        return (
            <View style={styles.drawerContainer}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.drawerHeader}>
                        <View style={styles.drawerHeaderImages}>
                            <FontAwesome5 name="user-circle" size={80} />
                        </View>
                        <View style={styles.userDetail}>
                            <Text style={styles.name}>Username</Text>
                            <Text style={styles.email}>Username@gmail.com</Text>
                        </View>
                    </View>
                </DrawerContentScrollView>

                <Divider />
                <View style={styles.drawerSection}>
                    <DrawerItem
                        icon={() => (<MaterialIcons name={'home'} size={25} />)}
                        label="Home"
                        onPress={() => { this.props.navigation.navigate("HomeScreen") }} />
                    <DrawerItem
                        icon={() => (<MaterialIcons name={'account-circle'} size={25} />)}
                        label="Account"
                        onPress={() => { this.props.navigation.navigate("Account") }} />
                    <DrawerItem
                        icon={() => (<MaterialIcons name={'shopping-cart'} size={25} />)}
                        label="Shop By Category"
                        onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
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
                </View>
                <View style={styles.drawerFooter}>
                    <DrawerItem
                        icon={() => (<Octicons name={'sign-out'} size={25} color={"white"} />)}
                        label="Log Out"
                        inactiveTintColor={"white"}
                        onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                </View>
            </View>
        )
    }
}

export default DrawerContainer;