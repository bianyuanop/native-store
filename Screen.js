<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useRef, useState, useEffect} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TextInput, TabBarIOS,SafeAreaView,Dimensions,TouchableOpacity,Platform } from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { Hoster } from './components/Home';
=======
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { pickBy } from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import MMKVStorage, { useMMKVStorage } from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage
    .Loader()
    .withInstanceID('profile')
    .initialize();
>>>>>>> refs/remotes/origin/main


export const Home = ({ navigation }) => {
<<<<<<< HEAD
    return (
        <View>
            <Hoster name="chan"></Hoster>
            <Text></Text>
        </View>
    )
=======
    const [pubkey, setPubkey] = useMMKVStorage("user", MMKV);

    console.log(pubkey);
    if (pubkey) {
        return (
            <View>
                <Text>Home</Text>  
            </View>
        )
    } else {
        return (
            <View>
                <Text>Login</Text>
                <Button onPress={() => { setPubkey('abc'); navigation.navigate('主页') }} title="login" />
            </View>
        )
    }

>>>>>>> refs/remotes/origin/main
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