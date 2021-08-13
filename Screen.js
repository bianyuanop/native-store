import { FormControl, Input, Button, Box, Stack, VStack, Flex, Container, Center } from 'native-base';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Keyboard, Pressable, ScrollView } from 'react-native';
import MMKVStorage, { useMMKVStorage } from 'react-native-mmkv-storage';
import { MainIcon } from './components/Logo';

import { Commody as Comm } from './components/Commody';

const MMKV = new MMKVStorage
    .Loader()
    .withInstanceID('profile')
    .initialize();


export const Home = ({ navigation }) => {
    return (
        <View>
            <Text>主页</Text>  
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
        <ScrollView>
            <VStack borderColor="pink.100">
                <Comm id="1"></Comm>
            </VStack>
        </ScrollView>
    )
}


export const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
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
        <Pressable onPress={() => {Keyboard.dismiss()}}>
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