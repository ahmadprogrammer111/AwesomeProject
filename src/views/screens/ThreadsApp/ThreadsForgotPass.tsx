import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import ThreadsInput from '../../../components/ThreadsComponents/ThreadsInput'
import { hasteMapCacheDirectory } from '../../../../metro.config'
import { useNavigation } from '@react-navigation/native'



const ThreadsForgotPass = () => {
    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <View style={{ height: '15%' }} />
            <View style={styles.iconContainer}>
                <View style={styles.iconWrapper}>
                    <Icon name='lock-closed-outline' size={80} color='black' />
                </View>
            </View>
            <View style={{ height: '3%' }} />
            <Text style={styles.trouble}>Trouble Logging In?</Text>
            <View style={{ height: '1%' }} />

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text}>Enter your email, phone, or username and we'll </Text>
                <Text style={styles.text}>send you a link to get back into your account.</Text>
            </View>
            <View style={{ height: '3%' }} />
            <ThreadsInput placeholder='Enter Your Email' />
            <View style={{ height: '3%' }} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send Login link</Text>
            </TouchableOpacity>

            <View style={{ height: '3%' }} />

            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.textOR}>OR</Text>
                <View style={styles.line} />
            </View>
            <View style={{ height: '2%' }} />

            <TouchableOpacity onPress={() => navigation.navigate('ThreadsSignUp')}>
                <Text style={styles.newAccount}>Create a new account</Text>
            </TouchableOpacity>
            <View style={{ height: '20%' }} />

            <View style={styles.metaContainer}>
                <Image source={require('../../../assets/images/Meta.png')} style={styles.metaLogo} />
                <Text style={styles.meta}>Meta</Text>
            </View>
        </View>
    )
}

export default ThreadsForgotPass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf4fe'
    },
    iconContainer: {
        // width: '30%',
        // height:'15%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 2,
        // borderRadius: 400,

    },
    icon: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 400,
    },
    trouble: {
        fontSize: 20,
        fontFamily: 'Raleway-Bold',
        color: 'black',
        alignSelf: 'center'
    },
    text: {
        color: '#7b7d7d',
        fontSize: 15,
        fontFamily: 'Nunito-Medium'
    },
    iconWrapper: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 1.5,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 25,
        alignItems: 'center',
        padding: 5
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
    },

    metaContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    metaLogo: {
        height: '120%', width: '10%',
        alignSelf: 'center'
    },
    meta: {
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 20
    },
    line: {
        backgroundColor: 'grey',
        height: 1,
        width: '40%'
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '7%'
    },
    textOR: {
        fontFamily: 'Raleway-Bold',
        color: 'grey',
    },
    newAccount: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        color: '#616a6b',
        textAlign: 'center'
    }
})

//#bdc3c7