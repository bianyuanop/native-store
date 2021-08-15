import React, { useState } from 'react';
import { Box, VStack, HStack, Image, Pressable, Text, IconButton, Icon } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo'
import MMKVStorage from 'react-native-mmkv-storage';


const MMKVCart = new MMKVStorage.Loader()
    .withInstanceID('cart')
    .initialize();


export const Item = (props) => {
    const commodyId = props.id;
    const storeId = props.store; 
    const cover = props.cover;
    const storeName = "Store";
    const commodyName = "Commody";

    const [count, setCount] = useState(0);

    return (
        <HStack marginTop="2%" marginBottom="2%" height="50%" borderRadius={10} shadow={5} backgroundColor='white'>
            <Image source={cover} alt={cover} width="50%" height="100%" borderLeftRadius={10} />
            <VStack width='50%' marginLeft='5%'>
                <VStack space={2}>
                    <Pressable onPress={()=> { }}>
                        <Text>{storeName}</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate('Commody', {
                        Screen: 'Detail',
                        commodyId,
                        storeId
                    })}}>
                        <Text fontSize={25}>{commodyName}</Text>
                    </Pressable>

                </VStack>
                <HStack marginTop='auto' height='30%' marginBottom='5%'>
                    <IconButton
                        variant='solid'
                        icon={<Icon size='md' as={ <Entypo name='minus' />} />} 
                        onPress={()=> {if(count>0) setCount(count-1)}}
                        borderLeftRadius={25}
                    />
                    <Text alignSelf='center' width="20%" textAlign='center'>{count}</Text>
                    <IconButton
                        variant='solid'
                        icon={<Icon size='md' as={ <Entypo name='plus' />} />} 
                        onPress={()=> {setCount(count+1)}}
                        borderRightRadius={25}
                    />
                </HStack>
            </VStack>
            
            
        </HStack>
    )

    
}

export const Test =  () => {
    return (
        <Text>Hello</Text>
    )
}
