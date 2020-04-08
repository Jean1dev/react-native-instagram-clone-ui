import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'
import { connect} from 'react-redux'
import { Gravatar } from 'react-native-gravatar'

class Header extends Component {
    render() {
        const name = this.props.name || 'noname'
        const gravatar = this.props.email ?
            <Gravatar options={{ email: this.props.email, secure: true }} style={styles.avatar}></Gravatar>
            : null
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>InstaClone</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        color: '#888',
        fontSize: 10
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    }
})

const mapStateToProps = ({ user }) => {
    return {
        user: user.name,
        email: user.email
    }
}

export default connect(mapStateToProps)(Header)