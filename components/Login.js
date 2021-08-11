
import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 125,
    height: 125,
    resizeMode: 'stretch'
  }
});


export class Hoster extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
        return (
            <View style={styles.stretch}>
         <Image
          style={styles.stretch}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
                <center><Text>{ this.name }</Text></center>
            </View>
        )
    }
}