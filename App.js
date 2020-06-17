import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/Login/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import  { getTabIcons } from "./src/navigations/utils";
import * as ThemeColor from './src/themes/colors';
import ProductsScreen from './src/screens/Products/ProductsScreen';

class App extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => 
              getTabIcons(route, focused, color, size),
          })}
          tabBarOptions={{
            activeTintColor: ThemeColor.DarkColor,
            inactiveTintColor: 'gray',
          }}
          >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={ProductsScreen} />
          <Tab.Screen name="Cart" component={HomeScreen} />
          <Tab.Screen name="Account" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
