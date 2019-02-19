import React, { Component } from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/header/index'
import Post from '../../components/post/index'
// import styles from './styles';

export default class Feed extends Component {

    state = {
        posts: []
    }

    render() {
        return (
            <View styles={styles.container}>
                <Header></Header>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post
                            key={item.id} {...item}
                        >
                            
                        </Post>
                    }
                ></FlatList>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

});


