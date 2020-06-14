import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import * as ThemeColor from './src/themes/colors';
import DashBoardView from './src/screens/Shop/DashboardShopView';
import Product from './src/screens/products/ProductScreen';

class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Logout"
          drawerStyle={{backgroundColor: ThemeColor.LightDrawerColor}}
          drawerContentOptions={{
            activeBackgroundColor: ThemeColor.PrimaryColor,
            activeTintColor: ThemeColor.PrimaryTextColor,
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Logout" component={LoginScreen} />
          <Drawer.Screen name="DashBoard" component={DashBoardView} />
          <Drawer.Screen name="Product" component={Product} />
          
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
