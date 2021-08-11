import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, Platform } from 'react-native';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.requestUrl = props.url;
        this.state = {
            username: '',
            password: ''
        }
    }
    onPressButton() {
        fetch(this.requestUrl,{
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
    }
    render() {
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '80%'
            }}>
                <TextInput placeholder="Username" defaultValue={this.state.username} style={ styles.username } onChangeText={ text => this.setState({
                    username: text
                })}></TextInput> 
                <TextInput placeholder="Password" defaultValue={this.state.password} style={ styles.password } onChangeText={ text => this.setState({
                    password: text
                })}></TextInput> 
                <Button onPress={this.onPressButton.bind(this)} title="Login" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    username: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        height: '45%'
    },
    password: {

    }
})