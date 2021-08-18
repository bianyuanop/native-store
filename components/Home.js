
import React from 'react';
import { VStack, Pressable, Image, Flex, HStack, Avatar, Text } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/core';
import { Dimensions } from 'react-native';



export const Advertisement = () => {
  const navigation = useNavigation();
  const adInfos = [
    {
      store: 1,
      commody: 1,
      cover: require('../assets/tea.jpeg'),
    },
    {
      store: 2,
      commody: 2,
      cover: require('../assets/tea1.jpeg'),
    },
    {
      store: 3,
      commody: 1,
      cover: require('../assets/tea2.jpeg'),
    },
  ];

  const _renderCover = ({item, index}) => {
    return (
      <Pressable onPress={()=>{
        navigation.navigate('Commody', {
          Screen: 'Detail',
          storeId: item.store,
          commodyId: item.commody
        })
      }}
      width="100%"
      height="100%"
      borderRadius={10}
      shadow={5}
      >
        <Image source={item.cover} alt={String(item.store) + String(item.commody)} resizeMode='stretch' width="100%" minHeight="100%" />
      </Pressable>
    )
  }

  return (
    <Flex>
      <Carousel 
      data={adInfos}
      renderItem={_renderCover}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width}
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      slideStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          height: Dimensions.get('window').height * 0.35
      }}
      />
    </Flex>
  )
}

export const Merchant = (props) => {
  const icon = props.icon;
  const store = props.store;
  const name = props.name;
  const describe = props.desc.slice(0, 15);

  const navigation = useNavigation();

  return (
    <Pressable
    onPress={()=>{navigation.navigate('Commody', {
      storeId: store
    })}}
    margin="1%"
    borderRadius={50}
    borderWidth={1}
    >
      <HStack space={1}>
        <Avatar 
          size='lg'
          source={icon}
        />
        <VStack>
          <Text fontSize={20} fontWeight='bold' color='pink.800'>{name}</Text>
          <Text color='yellow.600' fontSize={13}>{describe}</Text>
        </VStack>
      </HStack>
    </Pressable>
    
  )
}