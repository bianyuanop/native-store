import React, { Component, useState } from 'react';
import { FormControl, Input, Button, Box, Stack, VStack, Flex, Container, Center, Pressable, Text, ScrollView, HStack, Image } from 'native-base';
import { Keyboard, ImageBackground } from 'react-native';
import { View } from 'react-native';
import MMKVStorage, { useMMKVStorage } from 'react-native-mmkv-storage';
import { MainIcon } from './components/Logo';

import { Commody as Comm, HeadCommody, CommodyDetail } from './components/Commody';
import { createStackNavigator } from '@react-navigation/stack';
import { ResourceFetch } from './util';
import { Item } from './components/Cart';
import { ProfileHeader, Adress, DeliverPreview, ContactUs } from './components/Profile';
import { Advertisement, Merchant } from './components/Home';

const MMKV = new MMKVStorage
    .Loader()
    .withInstanceID('profile')
    .initialize();


export const Home = ({ navigation }) => {
    const merchants = [
        {
            name: 'Jiahua',
            icon: require('./assets/favicon.png'),
            store: 1,
            desc: 'THe most jkjl'
        },
        {
            name: 'Cha',
            icon: require('./assets/tea.jpeg'),
            store: 2,
            desc: 'THe most jkjl'
        },
        {
            name: 'Ye',
            icon: require('./assets/tea2.jpeg'),
            store: 3,
            desc: 'THe most jkjl'
        },
    ];
    const merchantsLen = merchants.length;


    return (
        <ScrollView>
            <VStack  height="100%">
                <Advertisement />
                <HStack justifyContent='center' marginTop="1%">
                    <Text>Store</Text>
                </HStack>
                <HStack>
                    <VStack width="50%">
                    {merchants.slice(0, merchantsLen/2).map(merchant => {
                        return (
                            <Merchant name={merchant.name} icon={merchant.icon} store={merchant.store} desc={merchant.desc} /> 
                        )
                    })}
                    </VStack>
                    <VStack width="50%">
                    {merchants.slice(merchantsLen/2, merchantsLen).map(merchant => {
                        return (
                            <Merchant name={merchant.name} icon={merchant.icon} store={merchant.store} desc={merchant.desc} /> 
                        )
                    })}
                    </VStack>
                </HStack>
            </VStack>
        </ScrollView>
    )
}

export const Cart = ({ navigation }) => {
    const data = [
        {
            id: 1,
            store: 1,
            cover: require('./assets/tea2.jpeg'),
        },
        {
            id: 1,
            store: 2,
            cover: require('./assets/tea1.jpeg'),
        }
    ]
    return (
        <ScrollView width="96%" marginLeft="2%" marginRight="2%" backgroundColor='#fafaf9'>
            <VStack width="100%">
                {data.map(item=>{
                    return (
                        <Item key={String(item.id) + String(item.store)} id={item.id} store={item.store} cover={item.cover} />
                    )
                })}
            </VStack>
        </ScrollView>
    )
}

const CommodyStack = createStackNavigator();
export const Commody = ({ route, navigation }) => {

    const recommendation = [
        {
            id: 1,
            store: 1,
            cover: require('./assets/tea.jpeg')
        },
        {
            id: 2,
            store: 1,
            cover: require('./assets/tea1.jpeg')
        },
        {
            id: 3,
            store: 1,
            cover: require('./assets/tea2.jpeg')
        }
    ];
    let comms = [
        {
            id: 1,
            store: 1,
            name: 'tea',
            cover: require('./assets/tea.jpeg'),
            price: 20000.80
        },
        {
            id: 2,
            store: 1,
            name: 'tea1',
            cover: require('./assets/tea1.jpeg'),
            price: 200000000000
        },
        {
            id: 3,
            store: 1,
            name: 'tea1',
            cover: require('./assets/tea2.jpeg'),
            price: 2000000000
        }
    ];
    const commSplit = (data) => {
        let commLen = data.length;
        return [data.slice(0, commLen/2), data.slice(commLen/2, commLen)]
    }
    
    const stackGen = (data) => {
        return (
            <VStack width="50%">
                {data.map(
                    (comm) => <Pressable key={comm.id} onPress={() => {
                        navigation.navigate('Detail', {
                            commodyId: comm.id,
                            storeId:comm.store 
                        });
                    }}>
                        <Comm id={comm.id} name={comm.name} cover={comm.cover} price={comm.price} />
                    </Pressable>
                )}
            </VStack>
        )
    }

    let commSplited = commSplit(comms);
    let stackLeft = stackGen(commSplited[0]);
    let stackRight = stackGen(commSplited[1]);

    return (
        <ScrollView width="100%" padding="1%" backgroundColor='#fafaf9'>
            <VStack>
                {<HeadCommody commodies={recommendation} />}
                <HStack>
                    {stackLeft}
                    {stackRight}
                </HStack>
            </VStack>
        </ScrollView>
    )
}

export const CommodyWrapper = () => {
    return (
        <CommodyStack.Navigator>
            <CommodyStack.Screen name="Vague" component={Commody} options={{ headerShown: false}} />
            <CommodyStack.Screen name="Detail" component={CommodyDetail} options={{ headerShown: false }} />
        </CommodyStack.Navigator>
    )
}


export const Profile = () => {
    return (
        <ScrollView padding="2%">
            <ProfileHeader account="someaccounthash" name="Chan" />
            <Adress />
            <DeliverPreview />
            <ContactUs />
        </ScrollView>
    )
}

const phoneValidate = (phone) => {
    return phone.length == 13;
}

const valValidate = (val) => {
    return val.length == 6;
}

const registerorLogin = () => {
    MMKV.setString('pubkey', 'test');
}

export const Login = ({ navigation }) => {
    let [phone, setPhone] = useState('');
    let [val, setVal] = useState('');
    let phone_validation = true;
    let val_validation = true;
    let loading = false;
    return (
        <Pressable key="login" onPress={() => {Keyboard.dismiss()}}>
            <Box
                backgroundColor="pink.50"
                size="100%"
                justifyContent="center"
                paddingLeft="5%"
            >
                <MainIcon />
                <FormControl isRequired>
                    <VStack space={9}>
                        <Stack mx={4}>
                            <FormControl.Label>手机号</FormControl.Label>
                            <Input 
                            keyboardType='numeric'
                            p={2} 
                            variant="underlined"
                            placeholder="+86" 
                            onChangeText={ text => phone_validation = phoneValidate(text) } 
                            _invalid={phone_validation}
                            width={80}
                            />
                        </Stack>
                        <Stack mx={4}>
                            <FormControl.Label>验证码</FormControl.Label>
                            <Flex 
                                direction='row'
                            >
                                <Input 
                                    keyboardType='numeric'
                                    variant="underlined"
                                    p={2} 
                                    placeholder="XXXXXX" 
                                    onChangeText={ text => val_validation = valValidate(text) } 
                                    _invalid={val_validation}
                                    />
                                <Button variant="link">发送</Button>
                            </Flex>
                        </Stack>
                    </VStack>
                </FormControl>
                <Button 
                    marginTop="10%"
                    isLoading={loading} 
                    onPress={()=>{loading = true}} 
                    isLoadingText="验证中"
                    alignSelf="center"
                    width="35%"
                    onPress={() => {
                        registerorLogin();
                        navigation.navigate('App')
                    }}
                >登入/注册</Button>
            </Box>
        </Pressable>
        
    )
}