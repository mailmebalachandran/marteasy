import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import * as ThemeColor from './src/themes/colors';
import Product from './src/screens/Products/ProductScreen';

class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeScreen"
          drawerStyle={{backgroundColor: ThemeColor.LightDrawerColor}}
          drawerContentOptions={{
            activeBackgroundColor: ThemeColor.DarkColor,
            activeTintColor: ThemeColor.PrimaryTextColor,
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} initialParams={{ storeId: null }}/>
          <Drawer.Screen name="Product" component={Product} />
          <Drawer.Screen name="Logout" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
