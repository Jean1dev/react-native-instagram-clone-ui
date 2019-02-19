import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
// import styles from './styles';

export default class addComment extends Component {

    state = {
        comment: '',
        editMod: false
    }

    handleAddComment = () => {
        Alert.alert('adicinado')
    }

    render() {
        let commentArea = null
        if (this.state.editMod) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Comentarios...' style={styles.input} autoFocus={true}
                        value={this.state.comment} onChangeText={comment => this.setState({ comment })}>
                        onSubmitEditing={this.handleAddComment}
                    </TextInput>
                    <TWF onPress={() => this.setState({ editMod: false })}>
                        <Icon name="times" size={15} color="#555"></Icon>
                    </TWF>
                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMod: true })}>
                    <View style={styles.container}>
                        <Icon name="comment-o" size={25} color={'#555'}></Icon>
                        <Text style={styles.caption}>Adcione um comentario</Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
});


