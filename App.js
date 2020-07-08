import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/Login/LoginScreen';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import {getTabIcons} from './src/navigations/utils';
import * as ThemeColor from './src/themes/colors';
import ProductsScreen from './src/screens/Products/ProductsScreen';
import CartScreen from './src/screens/Cart/CartScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import ManageAddress from './src/screens/ManageAddress/ManageAddress';
import AddressOverlay from "./src/components/AddressOverlay/AddressOverlay";
import SubCategoryScreen from "./src/screens/SubCategory/SubCategoryScreen";
import {CONSUMER_KEY, CONSUMER_SECRET} from "./src/api/Constants";
import axios from "axios";
axios.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['consumer_key'] = CONSUMER_KEY;
  config.params['consumer_secret'] = CONSUMER_SECRET;
  return config;
});
class App extends Component {
  loginScreenNavigator = () => {
    let Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  };
  profileStack = () => {
    let Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ManageAddr" component={ManageAddress} />
        <Stack.Screen name="AddressEdit" component={AddressOverlay} />
      </Stack.Navigator>
    );
  };

  homeScreenNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        header={{visible:true}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) =>
            getTabIcons(route, focused, color, size),
        })}
        tabBarOptions={{
          activeTintColor: ThemeColor.DarkColor,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Account" component={this.profileStack} />
      </Tab.Navigator>
    );
  };

  render() {
    const RootStack = createStackNavigator();
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="SignUpScreen">
          <RootStack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <RootStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <RootStack.Screen
            name="HomeScreen"
            component={this.homeScreenNavigator}
          />
          <RootStack.Screen
            name="ProductScreen"
            component={ProductsScreen}
          />
          <RootStack.Screen
            name="SubCategoryScreen"
            component={SubCategoryScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
