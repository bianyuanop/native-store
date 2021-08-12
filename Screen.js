import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { pickBy } from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import MMKVStorage, { useMMKVStorage } from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage
    .Loader()
    .withInstanceID('profile')
    .initialize();


export const Home = ({ navigation }) => {
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