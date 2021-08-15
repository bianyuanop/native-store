import React, { useState } from 'react';
import { Box, HStack, Image, Text, Pressable, VStack, Flex, Center, Avatar, IconButton, Icon, Heading } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, PixelRatio, ScrollView } from 'react-native';
import { alignItems, borderColor } from 'styled-system';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import MMKVStorage from 'react-native-mmkv-storage';

const MMKVCart = new MMKVStorage.Loader()
    .withInstanceID('cart')
    .initialize();

export const Commody = (props) => {

    const id = props.id;
    const name = props.name;
    const cover = props.cover;
    const price = props.price;

    const caculateValue = (value) => {
        let splitedArr = String(value).split('.');
        let integer, decimal;
        integer = splitedArr[0];
        decimal = splitedArr[1];

        if(integer.length < 4) {
            return value + '$';
        }

        if (integer.length >= 5) {
            let priceInW = parseInt(integer) / 10000;
            return String(priceInW) + 'w';
        }

        if (integer.length >= 4) {
            let priceInThousand = parseInt(integer) / 1000; 
            return String(priceInThousand) + 'k';
        }
    }

    return (
        <VStack 
            id={id} 
            margin="5%"
            shadow={3} 
            space={3} 
            backgroundColor="white"
            borderRadius={5}
            >
            {/* need to change source to uri */}
            <Image source={cover} width='100%' alt="can't show" borderRadius={5} />
            <VStack space={1}>
                <Text color="black" fontSize='lg' fontWeight={500}>{name}</Text>
                <Text color="orange.400" fontSize='xl' fontWeight='bold'>{caculateValue(price)}</Text>
                {/* <Flex flexDirection='row' width='100%'>
                    <Text flex={1} flexWrap='wrap' color='#27272a'>{ commodyDesc }</Text>
                </Flex> */}
            </VStack>
        </VStack>
    )
}

export const HeadCommody = (props) => {
    const comms = props.commodies;
    const navigation = useNavigation();

    const _renderItem = ({item, index}) => {
        return (
            <Pressable width="100%" key={item.id} onPress={()=>{ navigation.navigate('Detail', {
                commodyId: item.id,
                storeId: item.store 
            })}}
            shadow={5}
            >
                {/* need to change `source` to `uri` */}
                <Image source={item.cover} alt={item.id} width="98%" borderRadius={10} resizeMode='stretch' />
            </Pressable>
        )
    };

    return (
        <Flex margin="1%" paddingBottom='1%'>
            <Carousel 
                layout='default'
                data={comms}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width*0.8}
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
                slideStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />
        </Flex>
    )
}

export const CommodyDetail = ({ navigation, route }) => {

    const { commodyId, storeId } = route.params;

    const [count, setCount] = useState(0);

    const info = {
        store: 1,
        id: 1,
        covers: [
            require('../assets/tea.jpeg'),
            require('../assets/tea1.jpeg'),
            require('../assets/tea2.jpeg'),
        ],
        details: [
            require('../assets/tea.jpeg'),
            require('../assets/tea1.jpeg'),
            require('../assets/tea2.jpeg'),
        ],
        metadata: {
            source: 'emei',
            date: '2019-9-9',
            wtf: 'something inc',
            uij: 'something inc',
            dfd: 'something inc',
            dd: 'something inc',
        },
        name: 'cha',
        decribe: 'Loing jing from where we have many years history.',
        sold: 2000,
        comments: [
            'This is very good for every one',
            'Haaa',
        ],
        price: 998
    }

    const _renderCovers = ({item, index}) => {
        return (
                <Image source={item} alt={item} width="96%" borderRadius={5} />
        )
    }

    return (
        <VStack height="100%" width="98%" margin='1%' backgroundColor='gray.200'>
            <ScrollView>
                <VStack backgroundColor='white' padding='1%'>
                    <Flex alignItems='center' backgroundColor='pink.50'>
                        <Carousel
                            layout='stack'
                            data={info.covers}
                            renderItem={_renderCovers}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width}
                            slideStyle={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} />
                    </Flex>
                    <VStack shadow={3} backgroundColor='#f3f4f6' borderRadius={5} marginTop="1%" marginBottom="1%" padding="1%">
                        <Heading>{info.name}</Heading>
                        <Text>{info.decribe}</Text>
                    </VStack>
                    <VStack marginTop="1%" marginBottom="1%" borderRadius={5} backgroundColor='#f3f4f6' shadow={3} padding="1%">
                        <Heading>Metadata</Heading>
                        {Object.entries(info.metadata).map(item => {
                            return (
                                <HStack key={item[0]}>
                                    <Text color='black'>{item[0]}</Text> 
                                    <Text marginLeft='auto' color='black'>{item[1]}</Text>
                                </HStack>
                            )
                        })}
                    </VStack>
                    <VStack marginTop="1%" marginBottom="1%" borderRadius={5} shadow={3} backgroundColor='#f3f4f6' padding="1%">
                        <Heading>Details</Heading>
                        {info.details.map(cover => {
                            return <Image key={cover} source={cover} alt={cover} width="100%" />
                        })}
                    </VStack>
                </VStack>
            </ScrollView>
            <HStack padding='1%'>
                <IconButton
                    variant='solid'
                    icon={<Icon size='md' as={ <Entypo name='typing' />} />} 
                />
                <IconButton
                    marginLeft='auto'
                    variant='solid'
                    icon={<Icon size='md' as={ <Entypo name='plus' />} />} 
                    onPress={()=> {setCount(count+1)}}
                />
            </HStack>
        </VStack>
    )

}