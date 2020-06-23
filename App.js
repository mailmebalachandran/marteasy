import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/Login/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import {getTabIcons} from './src/navigations/utils';
import * as ThemeColor from './src/themes/colors';
import ProductsScreen from './src/screens/Products/ProductsScreen';
import CartScreen from './src/screens/Cart/CartScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';

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

  homeScreenNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Account"
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
        <Tab.Screen name="Account" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  render() {
    const RootStack = createStackNavigator();
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="HomeScreen">
          <RootStack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <RootStack.Screen
            name="HomeScreen"
            component={this.homeScreenNavigator}
          />
          <RootStack.Screen
            name="ProductScreen"
            component={ProductsScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
