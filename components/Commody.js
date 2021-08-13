import React, { useState } from 'react';
import { Box, HStack, Image, Text, Pressable, VStack } from 'native-base';

export const Commody = (props) => {

    const commodyId = props.id;
    const [count, setCount] = useState(0);
    

    return (
        <HStack id={commodyId} width="100%" shadow={3} space={3}>
            <Image source={require('../assets/icon.png')} size={20} />
            <VStack>
                <HStack>
                    <Text color="black">商品名</Text>
                    <Text color="yellow">20$</Text>
                    <Pressable onPress={()=>{setCount(count + 1)}}>
                        <Text color="primary.100" fontSize={30}>{count || '+'}</Text>
                    </Pressable>
                </HStack>
                <Text>商品信息</Text>
            </VStack>
        </HStack>
    )
}