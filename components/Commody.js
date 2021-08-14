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
        let valueString = String(value);
    }

    return (
        <VStack 
            id={id} 
            padding="1%"
            margin="1%"
            shadow={3} 
            space={3} 
            backgroundColor="white"
            borderRadius={5}
            >
            {/* need to change source to uri */}
            <Image source={cover} width='100%' alt="can't show" borderRadius={5} />
            <VStack space={1}>
                <Text color="black" fontSize='lg' fontWeight={500}>{name}</Text>
                <Text color="orange.400" fontSize='xl' fontWeight='bold'>20$</Text>
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
            })}}>
                {/* need to change `source` to `uri` */}
                <Image source={item.cover} alt={item.id} width="96%" borderRadius={5} />
            </Pressable>
        )
    };

    return (
        <Box marginBottom="2%">
            <Carousel 
                data={comms}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                autoplay={true}
                autoplayDelay={3000}
                loop={true}
                slideStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />
        </Box>
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
        <VStack height="100%" width="98%" margin='1%'>
            <ScrollView>
                <VStack backgroundColor='gray'>
                    <Flex alignItems='center' backgroundColor='pink.50'>
                        <Carousel
                            data={info.covers}
                            renderItem={_renderCovers}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width}
                            slideStyle={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} />
                    </Flex>
                    <Heading marginLeft='2%'>{info.name}</Heading>
                    <Text>{info.decribe}</Text>
                </VStack>
            </ScrollView>
            <HStack backgroundColor='black' padding='1%'>
                <IconButton
                    variant='solid'
                    icon={<Icon size='md' as={ <Entypo name='typing' />} />} 
                />
                <IconButton
                    variant='solid'
                    icon={<Icon size='md' as={ <Entypo name='minus' />} />} 
                    marginLeft='auto'
                    onPress={()=> {if(count>0) setCount(count-1)}}
                />
                <Text alignSelf='center' width="10%" textAlign='center'>{count}</Text>
                <IconButton
                    variant='solid'
                    icon={<Icon size='md' as={ <Entypo name='plus' />} />} 
                    onPress={()=> {setCount(count+1)}}
                />
            </HStack>
        </VStack>
    )

}