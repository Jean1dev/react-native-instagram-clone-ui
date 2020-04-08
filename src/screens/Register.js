import React, { Component } from 'react';

import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';

// import styles from './styles';

export default class Register extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='nome' style={styles.input} autoFocus={true} 
                    value={this.state.name} onChangeText={name => this.setState({ name})}></TextInput>

                <TextInput placeholder='email' style={styles.input} autoFocus={true} 
                    keyboardType='email-address'
                    value={this.state.email} onChangeText={email => this.setState({ email})}></TextInput>
                
                <TextInput placeholder='senha' style={styles.input} autoFocus={true} 
                    secureTextEntry={true}
                    value={this.state.password} onChangeText={password => this.setState({ password})}></TextInput>

                <TouchableOpacity onPress={() => {}} style={styles.buttton}>
                    <Text style={styles.buttomText}> Salvar </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
});



