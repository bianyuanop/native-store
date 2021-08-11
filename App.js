import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart, Commody, Home, Profile } from './Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


const BaseUrl = 'http://localhost:3000'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == '主页') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name == '商品') {
              iconName = focused ? 'ios-gift' : 'ios-gift-outline'
            } else if (route.name == '购物车') {
              iconName = focused ? 'cart' : 'cart-outline'
            } else if (route.name == '个人') {
              iconName = focused ? 'person' : 'person-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="主页" component={Home} />
          <Tab.Screen name="商品" component={Commody} />
          <Tab.Screen name="购物车" component={Cart} />
          <Tab.Screen name="个人" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});