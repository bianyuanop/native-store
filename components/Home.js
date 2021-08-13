
import React, { Component,useRef, useState, useEffect} from 'react';
import { render } from 'react-dom';
import { View, Image, StyleSheet, Text ,SafeAreaView,Dimensions,TouchableOpacity,Platform,} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';



export class Hoster extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
      if (Platform.os === 'ios') {
        return (
        <View style={styles.IOstretch}>
         <Image
          style={styles.IOstretch}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
          <Text style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}>{ this.name }
          </Text>
          </View>
        )
      } else {
        
        return (
            <View style={styles.ANstretch}>
         <Image
          style={{width: 125,height: 125, resizeMode: 'stretch',}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
          <Text style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}>{ this.name }
          </Text>
          </View>
        )
      }
    }
}
    const ENTRIES1 = [
        {
          illustration: 'https://reactnative.dev/img/tiny_logo.png',
        },
        {
          illustration: 'https://reactnative.dev/img/tiny_logo.png',
        },
        {
          illustration: 'https://reactnative.dev/img/tiny_logo.png',
        },
        {
          illustration: 'https://reactnative.dev/img/tiny_logo.png',
        },
        {
          illustration: 'https://reactnative.dev/img/tiny_logo.png',
        },
      ];
      const {width: screenWidth} = Dimensions.get('window');
      
      const MyCarousel = props => {
        const [entries, setEntries] = useState([]);
        const carouselRef = useRef(null);
      
        const goForward = () => {
          carouselRef.current.snapToNext();
        };
      
        useEffect(() => {
          setEntries(ENTRIES1);
        }, []);
      
        const renderItem = ({item, index}, parallaxProps) => {
          return (
            <View style={styles.item}>
              <ParallaxImage
                source={{uri: item.illustration}}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
              />
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
            </View>
          );
        };
      
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={goForward}>
              <Text>go to next slide</Text>
            </TouchableOpacity>
            <Carousel
              autoplay={ true }
             loop= { true }
              layout={'stack'} layoutCardOffset={`18`}
              ref={carouselRef}
              sliderWidth={screenWidth}
              sliderHeight={screenWidth}
              itemWidth={screenWidth - 60}
              data={entries}
              renderItem={renderItem}
              hasParallaxImages={true}
            />
          </View>
        );
      };   
      export default MyCarousel;
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        item: {
          width: screenWidth - 60,
          height: screenWidth - 100,
        },
        imageContainer: {
          flex: 1,
          marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
          backgroundColor: 'white',
          borderRadius: 8,
        },
        image: {
          ...StyleSheet.absoluteFillObject,
          resizeMode: 'cover',
        }, 
         IOstretch: {
          width: 125,
          height: 125,
          resizeMode: 'stretch'
        },
        ANstretch: {
          width: 125,
          height: 125,
          resizeMode: 'stretch',
          elevation:2

        },
        name: {
            alignItems:'center'
        }
      });
      
