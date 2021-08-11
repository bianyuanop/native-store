import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { Login, Hoster } from './components/Login'

const BaseUrl = 'http://localhost:3000'

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You pressed me!')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height: '30%',
          width: '80%',
          backgroundColor: 'powderblue',
          alignItems: 'center'
        }}>
          <Hoster name="FUcke"></Hoster>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});