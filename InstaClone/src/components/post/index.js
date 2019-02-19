import React, { Component } from 'react';

import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Author from '../author/index'
import Comments from '../comments/index'
import addComment from '../addComment/index'
// import styles from './styles';

export default class post extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Image source={this.props.image} style={styles.image}></Image>
            <Author email={this.props.email} nickname={this.props.nickname}></Author>
            <Comments comments={this.props.comments}></Comments>
            <addComment></addComment>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})
