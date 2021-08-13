import React from 'react';
import { Box, HStack, VStack, Avatar, Heading, Text, NativeBaseProvider } from 'native-base';

export const MainIcon = () => {
    return (
        <HStack space={5} alignSelf="center" marginBottom="10%">
            <Avatar source={require('../assets/icon.png')} />
            <VStack space={2}> 
                <Heading>云链</Heading> 
                <Text>链上未来</Text> 
            </VStack>
        </HStack>
    )
}