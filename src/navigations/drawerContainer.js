import React, { Component } from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import styles from "./styles";
import { Avatar, Divider } from 'react-native-elements';
import { MOTOR_WASH_IMAGE1, MOTOR_WASH_IMAGE8, PROFILE_IMAGE } from "../assets/index";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopByCategory from "../navigations/shopByCategoryMenu";
import HomeAPI from '../api/Home/HomeAPI';
import { getOrderedParentCategories, testIsUserLoggedIn } from "../utils";
import { getMenuSubcategories } from "./utils";
import { Linking } from "react-native";

class DrawerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewSection: false,
            viewShop: false,
            categoryList: [],
            subCatList: [],
            username: ""
        }
    }
    componentDidMount = async () => {
        const result = await HomeAPI.getParentCategories();
        const orderedParentCats = getOrderedParentCategories(result);
        this.setState({ categoryList: orderedParentCats });
        const subCatList = await getMenuSubcategories(orderedParentCats);
        this.setState({ subCatList: subCatList });
        this.focusListener = this.props.navigation.addListener("focus", async () => {
            const userDetails = await testIsUserLoggedIn();
            this.setState({ username: userDetails.user_nicename })
          });
    }
    // componentWillUnmount() {
    //     // Remove the event listener
    //     this.focusListener.remove();
    //   }
    componentDidUpdate = async () => {
        const userDetails = await testIsUserLoggedIn();
        if (userDetails !== false && userDetails.user_nicename !== this.state.username) {
            this.setState({ username: userDetails.user_nicename })
        }
    }

    handleShopByCategory = () => {
        this.setState({ viewShop: true })
    }

    handleCheckUserLogged = () => {
        testIsUserLoggedIn().then((res) => {
            if (res !== false) {
                this.setState({ username: res.user_email });
            }
        })
    }

    render() {
        return (
            <View style={styles.drawerContainer}>

                <View style={styles.drawerHeader}>
                    <View style={styles.drawerHeaderImages}>
                        <Avatar
                            size={70}
                            source={PROFILE_IMAGE} />
                    </View>
                    <View style={styles.userDetail}>
                        <Text style={styles.name}>Welcome</Text>
                        {this.state.username !== "" && this.state.username !== undefined ?
                            <Text style={styles.email}>{this.state.username}</Text> :
                            <Text style={styles.email}>Guest User</Text>}
                    </View>
                </View>
                <Divider />
                <View style={styles.drawerSection}>
                    {this.state.viewShop === true ?
                        (<ShopByCategory
                            onPress={(data) => {
                                this.setState({ viewShop: data })
                            }}

                            categoryList={this.state.categoryList}
                            subCatList={this.state.subCatList}
                            navigation={this.props.navigation}
                        />)
                        :
                        (<DrawerContentScrollView {...this.props}>
                            <DrawerItem
                                icon={() => (<MaterialIcons name={'home'} size={25} color={"red"} />)}
                                label="Home"
                                onPress={() => { this.props.navigation.navigate("HomeScreen") }} />

                            <DrawerItem
                                icon={() => (<MaterialIcons name={'account-circle'} size={25} color={"red"} />)}
                                label="My Account"
                                onPress={() => { this.props.navigation.navigate("Account") }} />
                            {/* <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, }}> */}
                            <DrawerItem
                                // labelStyle={{fontWeight: "bold"}}
                                icon={() => (<MaterialIcons name={'shopping-cart'} size={25} color={"red"} />)}
                                label="Shop By Category"
                                onPress={this.handleShopByCategory} />
                            {/* </View>
                                <View style={{ flex: 0.1, justifyContent: "flex-end", marginBottom: "5.1%",alignItems: "center", marginRight: "5%" }}>
                                    <FontAwesome5 name={'caret-right'} size={20} />
                                </View>
                            </View> */}
                            <DrawerItem
                                icon={() => (<MaterialIcons name={'card-membership'} size={25} color={"red"} />)}
                                label="MartEasy Membership"
                                onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                            <DrawerItem
                                icon={() => (<FontAwesome5 name={'briefcase'} size={24} color={"red"} />)}
                                label="Earn Rewards"
                                onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                            <DrawerItem
                                icon={() => (<MaterialIcons name={'question-answer'} size={25} color={"red"} />)}
                                label="FAQ's"
                                onPress={() => { this.props.navigation.navigate("FAQScreen") }} />
                            <DrawerItem
                                icon={() => (<MaterialIcons name={'security'} size={25} color={"red"} />)}
                                label="Privacy Policy"
                                onPress={() => { this.props.navigation.navigate("PrivacyPolicyScreen") }} />
                            <DrawerItem
                                icon={() => (<MaterialIcons name={'format-list-numbered'} size={25} color={"red"} />)}
                                label="Terms and Conditions"
                                onPress={() => { this.props.navigation.navigate("TermsAndConditionsScreen") }} />
                            <DrawerItem
                                icon={() => (<FontAwesome5 name={'whatsapp'} size={25} color={"red"} />)}
                                label="Customer Support"
                                onPress={() => Linking.openURL(
                                    'http://api.whatsapp.com/send?phone=+919474218508'
                                )} />
                            <DrawerItem
                                icon={() => (<MaterialIcons name={'stars'} size={25} color={"red"} />)}
                                label="Rate Us"
                                onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                            <DrawerItem
                                icon={() => (<FontAwesome5 name={'heartbeat'} size={25} color={"red"} />)}
                                label="Share Our Love"
                                onPress={() => { this.props.navigation.navigate("LoginScreen") }} />
                        </DrawerContentScrollView>)}
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