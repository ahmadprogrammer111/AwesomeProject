import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import ThreadsInput from '../../../components/ThreadsComponents/ThreadsInput'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';


const ThreadsLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation<any>()

    const createUserWithEmailAndPassword = async () => {
        console.log('Email:', email);
        console.log('Password:', password);
        if (!email || !password) {
            console.log('Email or Password is empty');
            return Alert.alert('Email or Password is empty')

        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed sucessfully')
                navigation.navigate('ThreadsHome1' as never)
            })
            .catch((error) => {
                if (error.code == 'auth/email-already-in-use') {
                    console.log('That email address is already in use!')
                }
                if (error.code == 'auth/invalid-email') {
                    console.log('That email address is invalid!!')
                }
                if (error.code == 'auth/operation-not-allowed') {
                    console.log('The email is disabled by the owner of the app.')
                }
                console.log(error)
            })
    }


    return (
        <View style={styles.container}>

            <View style={{ height: '10%' }} />

            <View style={styles.threadsLogoContainer}>
                <Image style={styles.logo}
                    source={require('../../../assets/images/Threads.png')} />
            </View>

            <View style={{ height: '5%' }} />

            <ThreadsInput text={email} onChangeText={setEmail} placeholder='Enter Email here' />

            <View style={{ height: '2%' }} />

            <ThreadsInput text={password} onChangeText={setPassword} placeholder='Enter Password here' />

            <TouchableOpacity onPress={() => navigation.navigate('ThreadsForgotPass')}>
                <Text style={styles.forgotPass}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={createUserWithEmailAndPassword}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={{ height: '1%' }} />

            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.textOR}>OR</Text>
                <View style={styles.line} />
            </View>

            <View style={{ height: '0.2%' }} />


            <Text style={[styles.textOR, { alignSelf: 'flex-start', marginHorizontal: 30 }]}>Create an account</Text>

            <View style={{ height: '1%' }} />

            <TouchableOpacity onPress={() => navigation.navigate('ThreadsSignUp')}
                style={styles.button}
            >
                <Text style={{ color: 'white', fontFamily: 'Nunito-Bold', fontSize: 20, }}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ height: '15%' }} />

            <View style={styles.metaContainer}>
                <Image source={require('../../../assets/images/Meta.png')} style={styles.metaLogo} />
                <Text style={styles.meta}>Meta</Text>
            </View>




        </View>
    )
}

export default ThreadsLogin
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    forgotPass: {
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 17,
        alignSelf: 'flex-end',
        marginHorizontal: 30,
        marginVertical: 10,
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
    threadsLogoContainer: {
        justifyContent: 'center',
        width: '55%',
        height: '25%',
        alignSelf: 'center'
    },
    logo: {
        resizeMode: 'cover',
        alignSelf: 'center'
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