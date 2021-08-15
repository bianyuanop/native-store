import { createStackNavigator } from '@react-navigation/stack';
import { VStack, Pressable } from 'native-base';
import React, { Component } from 'react';


const Stack = createStackNavigator();

export const ProfileHeader = () => {
    const store_owner = true;

    let store_nav;
    if(store_owner) {
        store_nav = (
            <Pressable><Text>Commody</Text></Pressable>
        )
    }

    return (
        <VStack margin="1%" width="100%" padding="1%">
            <Pressable>
                <Text>Profile</Text>
            </Pressable>
            <Pressable>
                <Text>Address</Text>
            </Pressable>
            <Pressable>
                <Text>Orders</Text>
            </Pressable>
            {store_nav}
        </VStack>
    )
}

export const Profile = () => {

}

export const Adress = () => {

}

export const Orders = () => {

}