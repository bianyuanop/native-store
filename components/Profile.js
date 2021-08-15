import { createStackNavigator } from '@react-navigation/stack';
import { VStack, Pressable, Avatar, HStack, Heading, Text, useToast, Icon, IconButton } from 'native-base';
import React, { Component } from 'react';
import * as Clipboard from 'expo-clipboard';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

export const ProfileHeader = (props) => {
    // should be a hash address 
    const account = props.account;
    const name = props.name;
    const toast_id = 'account';
    const toast = useToast();
     
    return (
        <VStack
        backgroundColor='white'
        borderRadius={10}
        padding="2%"
        >
            <HStack>
                <Avatar size='lg' source={require('../assets/icon.png')} maxWidth="20%" />
                <VStack marginLeft="5%" minWidth="75%">
                    <Heading>{name}</Heading>
                    <Pressable onPress={() => {
                        Clipboard.setString(account);
                        if(!toast.isActive(toast_id)) {
                            toast.show({
                                id: toast_id,
                                title: 'account public address copied.'
                            })
                        }
                    }}
                    padding="1%"
                    backgroundColor='gray.200'
                    borderRadius={5}
                    flexDirection='row'
                    >
                        <Text>pubkey: </Text>
                        <Text>{account}</Text>
                        <Text marginLeft='auto'>⛓</Text>
                    </Pressable> 
                </VStack>
            </HStack>
            <HStack marginTop='10%' justifyContent='space-between' marginLeft='2%' marginRight='2%'>
                <VStack alignItems='center' space={1} key="my-orders">
                    <Icon color='black' as={<Feather name='grid' />} />
                    <Text>MyOrders</Text>
                </VStack>
                <VStack alignItems='center' space={1} key="my-store">
                    <Icon color='black' as={<Feather name='box' />} />
                    <Text>Store</Text>
                </VStack>
                <VStack alignItems='center' space={1} key="orders">
                    <Icon color='black' as={<Feather name='layers' />} />
                    <Text>Orders</Text>
                </VStack>
                <VStack alignItems='center' space={1} key='profile'>
                    <Icon color='black' as={<Feather name='user' />} />
                    <Text>Profile</Text>
                </VStack>
            </HStack>
        </VStack>
        
    )
}

export const Profile = () => {

}

export const MyStore = () => {

}

export const MyOrders = () => {

}

export const IncomingOrders = () => {

}

export const Adress = () => {
    const defaultAdress = {
        name: 'chan',
        phone: '138888888888',
        addr: 'Yunnan kunming gaoxing qu'
    }

    return (
        <VStack 
        backgroundColor='white' 
        marginTop="5%"
        borderRadius={10}
        padding="3%"
        >
            <HStack>
                <Heading>Address</Heading>
                <IconButton
                marginLeft='auto'
                variant='unstyled'
                icon={<Icon size='xs' color='black' as={<Feather name='chevrons-right' />} />}
                 />
            </HStack>
            {Object.entries(defaultAdress).map(item => {
                return (
                    <HStack key={item[0]}>
                        <Text>{item[0]}</Text>
                        <Text marginLeft='auto'>{item[1]}</Text>
                    </HStack>
                )
            })}
        </VStack>
    )
}

export const Orders = () => {
}