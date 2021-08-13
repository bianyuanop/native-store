import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useRef, useState, useEffect} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TextInput, TabBarIOS,SafeAreaView,Dimensions,TouchableOpacity,Platform } from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { Hoster } from './components/Home';

const Tmp = () => {
    return (
        <View>
            <Text>Tmp</Text>
        </View>
    )
}

export const Home = ({ navigation }) => {
    return (
        <View>
            <Hoster name="chan"></Hoster>
            <Text></Text>
        </View>
    )
}

export const Cart = ({ navigation }) => {
    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}

export const Commody = ({ navigation }) => {
    return (
        <View>
            <Text>Commody</Text>
        </View>
    )
}

export const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}