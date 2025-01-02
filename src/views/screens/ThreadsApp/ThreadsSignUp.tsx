import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import ThreadsInput from '../../../components/ThreadsComponents/ThreadsInput'
import { useNavigation } from '@react-navigation/native'

const ThreadsSignUp = () => {
    const [onPressed, setOnPressed] = useState(false)
    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <View style={{ height: '10%' }} />

            <View style={{ justifyContent: 'center', width: '55%', height: '25%', alignSelf: 'center' }}>
                <Image style={{ resizeMode: 'cover', alignSelf: 'center' }}
                    source={require('../../../assets/images/Threads.png')} />
            </View>
            <View style={{ height: '5%' }} />

            <ThreadsInput text={name} onChangeText={setName} placeholder='Email ' />
            <View style={{ height: '2%' }} />

            <ThreadsInput text={email} onChangeText={setEmail} placeholder='Password ' />
            <View style={{ height: '2%' }} />

            <ThreadsInput text={password} onChangeText={setPassword} placeholder='Confirm Password' />

            <View style={{ height: '2%' }} />

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{ color: 'white', fontFamily: 'Nunito-Bold', fontSize: 20, }}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ height: '2%' }} />

            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.textOR}>OR</Text>
                <View style={styles.line} />
            </View>

            <View style={{ height: '0.2%' }} />


            <Text style={[styles.textOR, { alignSelf: 'flex-start', marginHorizontal: 30 }]}>Already have an account </Text>

            <View style={{ height: '1%' }} />

            <TouchableOpacity onPress={() => navigation.navigate('ThreadsLogin')}
                style={styles.button}
            >
                <Text style={{ color: 'white', fontFamily: 'Nunito-Bold', fontSize: 20, }}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ThreadsSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf4fe'
    },
    forgotPassword: {
        // backgroundColor: 'red',
        // alignItems: 'center',
        // textAlign: 'center',
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 17,
        // alignSelf: 'flex-end',
        marginHorizontal: 10,
    },
    button: {
        // backgroundColor: '#0064E0',
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 25,
        alignItems: 'center',
        padding: 5
    },
    login: {
        // backgroundColor: 'orange',
        // marginHorizontal: 0,
        // marginVertical: 10,
        //  marginTop: 10,
        //  color: 'black',
        alignSelf: 'baseline',
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
        fontSize: 17,
    },
    forgotTextContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        marginRight: 30,
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