import { createStackNavigator } from '@react-navigation/stack';
import { VStack, Pressable, Avatar, HStack, Heading, Text, useToast, Icon, IconButton, Button, useDisclose, Actionsheet } from 'native-base';
import React, { Component } from 'react';
import * as Clipboard from 'expo-clipboard';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import * as SMS from 'expo-sms';

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
                        <Text marginLeft='auto' fontSize='2xl'>⎘</Text>
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

export const DeliverPreview = () => {
    const toast = useToast();

    const delivers = [ {
            order: 'Longjing',
            store: 'Shengda',
            id: 'SF10000',
            uploadTime: '2020-12-30',
            from: 'Kunming',
            to: 'Chengdu',
            location: 'Chongqing',
            trace : [
                {
                    time: '2019-10-12 8:00',
                    title: 'packed at kunming',
                },
                {
                    time: '2019-10-12 10:00',
                    title: 'Transfer started',
                }
            ]
        }, {
            order: 'Puer',
            store: 'Dali',
            id: 'SF10000',
            uploadTime: '2020-12-30',
            from: 'Kunming',
            to: 'Chengdu',
            location: 'Chongqing',
            trace : [
                {
                    time: '2019-10-12 8:00',
                    title: 'packed at kunming',
                },
                {
                    time: '2019-10-12 10:00',
                    title: 'Transfer started',
                }
            ]
        },
    ];

    const _renderDeliver = ({item, index}) => {
        return (
            <VStack>
                <HStack>
                    <Text>{item.order}</Text>
                    <Text marginLeft='auto'>{item.store}</Text>
                </HStack>
                <VStack
                backgroundColor='gray.200'
                borderRadius={5}
                padding={3}
                >
                    <HStack>
                        <Pressable flexDirection='row' width="100%" onPress={() => {
                            Clipboard.setString(item.id);
                            if(!toast.isActive('deliver')) {
                                toast.show({
                                    id: 'deliver',
                                    title: 'deliver id copied.'
                                })
                            }
                        }}
                        borderBottomWidth={1}
                        >
                            <Text fontSize='xs'>{item.id}</Text>
                            <Text marginLeft='auto' marginLeft='auto' marginRight='5%' fontSize='xs'>Copy id</Text>
                        </Pressable> 
                    </HStack>
                    <HStack alignItems='center' justifyContent='space-between' marginTop={1} marginBottom={1}>
                        <Heading fontSize='2xl' color='amber.400'>{item.from}</Heading>
                        <Text>&lt;&gt;</Text>
                        <Heading fontSize='2xl' color='amber.400'>{item.to}</Heading>
                    </HStack>
                    <VStack>
                        {item.trace.map(trace => (
                            <HStack key={trace.time}>
                                <Text fontSize='xs'>{trace.time}</Text>
                                <Text marginLeft='auto' fontSize='xs'>{trace.title}</Text>
                            </HStack> 
                        ))}
                    </VStack>
                </VStack>
            </VStack>
            
        )
    }

    return (
        <VStack 
        marginTop="5%" 
        padding='3%'
        borderRadius={10}
        backgroundColor='white'
        >
            <HStack>
                <Heading>Delivers</Heading>
                <IconButton
                marginLeft='auto'
                variant='unstyled'
                icon={<Icon size='xs' color='black' as={<Feather name='chevrons-right' />} />}
                 />
            </HStack>
            <Carousel 
            autoplay={true}
            loop={true}
            data={delivers} 
            renderItem={_renderDeliver}
            sliderWidth={Dimensions.get('window').width*0.9}
            itemWidth={Dimensions.get('window').width*0.9}
            slideStyle={{
            }}
            />
        </VStack>
    )
}

export const ContactUs = () => {
    const phone = '15877983437';
    const mailTo = 'chen.me.nan@foxmail.com';
    const pubkey = 'somepubkey';

    const {isOpen, onOpen, onClose} = useDisclose();

    const SendSMS = async() => {
        let isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            SMS.sendSMSAsync(phone, `pubkey:${pubkey}\nYour question:\n`);
        } else {
            alert("SMS not available.");
        }
    }
    const SendMail = async() => {
        let isAvailable = await MailComposer.isAvailableAsync();
        if (isAvailable) {
            MailComposer.composeAsync({
                subject: `Store app contact,pubkey:${pubkey}`,
                body: 'My problem.'
            });
        } else {
            alert("Mail not available.");
        }
    }

    return (
        <VStack alignItems='center'>
            <Button 
            variant='unstyled'            
            onPress={onOpen}
            ><Text color='primary.400'>Contact us</Text></Button>
            
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content backgroundColor='white'>
                    <Actionsheet.Item onPress={SendSMS}>Text</Actionsheet.Item>
                    <Actionsheet.Item onPress={SendMail}>Email</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </VStack>
    )
}