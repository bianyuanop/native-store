import 'react-native-gesture-handler'
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Cart, Commody, Home, Profile, Login } from './Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NativeBaseProvider, extendTheme } from 'native-base';
import MMKVStorage from 'react-native-mmkv-storage';



const BaseUrl = 'http://localhost:3000'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MMKV = new MMKVStorage.Loader()
  .withInstanceID('profile')
  .initialize();

export const App = () => {

  return (
    <Tab.Navigator
    screenOptions={ ({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name == 'Home') {
          iconName = focused ? 'home' : 'home-outline'
        } else if (route.name == 'Commody') {
          iconName = focused ? 'ios-gift' : 'ios-gift-outline'
        } else if (route.name == 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline'
        } else if (route.name == 'Profile') {
          iconName = focused ? 'person' : 'person-outline'
        }

        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#c026d3',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Commody" component={Commody} options={{ title: "商品" }} />
      <Tab.Screen name="Home" component={Home} options={{ title: "主页" }} />
      <Tab.Screen name="Cart" component={Cart} options={{ title: "购物车"}} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: "资料" }} />
    </Tab.Navigator>
  )
}

export default () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  let pubkey;
  pubkey = MMKV.getString('pubkey');
  let isSignedIn = pubkey === undefined ? false : true;

  return isSignedIn ? (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={App} options={{ title:"主页", headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ title:"登录/注册", headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  ): (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={App} options={{ title:"主页", headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ title:"登录/注册", headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}