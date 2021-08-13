import React, { useState } from 'react';
import { Box, HStack, Image, Text, Pressable, VStack } from 'native-base';

export const Commody = (props) => {

    const commodyId = props.id;
    const [count, setCount] = useState(0);
    

    return (
        <VStack id={commodyId}>
            <Image source={require('../assets/icon.png')} />
            <HStack>
                <Text>商品名</Text>
                <Text>20$</Text>
                <Pressable onPress={()=>{setCount(count + 1)}}>
                    <Box>
                        <Text >{count || '+'}</Text>
                    </Box>
                </Pressable>
            </HStack>
            <Text>商品信息</Text>
        </VStack>
    )
}