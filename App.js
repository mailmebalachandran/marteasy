import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import LoginScreen from './src/screens/Login/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import * as ThemeColor from './src/themes/colors';
import ProductsScreen from './src/screens/Products/ProductsScreen';

class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Product"
          drawerStyle={{backgroundColor: ThemeColor.LightDrawerColor}}
          drawerContentOptions={{
            activeBackgroundColor: ThemeColor.DarkColor,
            activeTintColor: ThemeColor.PrimaryTextColor,
          }}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{storeId: null}}
          />
          <Drawer.Screen
            name="Product"
            component={ProductsScreen}
            initialParams={{storeId: '2', storeName: 'singhotel'}}
          />
          <Drawer.Screen name="Support" component={HomeScreen} />
          <Drawer.Screen name="FAQ" component={HomeScreen} />
          <Drawer.Screen name="Logout" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
