import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import ThreadsInput from '../../../components/ThreadsComponents/ThreadsInput'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import FurnitureButton2 from '../../../components/Furniture_components/FurnitureButton2'

import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addEmail } from '../../../redux/Slices/userSlice'
import Icon from 'react-native-vector-icons/FontAwesome'


const ThreadsLogin = () => {


    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isVisible, setIsVisible] = useState(true)

    const navigation = useNavigation<any>()




    const storingEmail = async (email: any) => {
        try {
            console.log('storing Email in async,', email)
            await AsyncStorage.setItem('EMAIL', email)
            console.log('Your Value Stored')
        } catch (error) {
            console.log('error storing your data in asyncstorage')
        }
    }



    const signinwithEmailAndPassword = async () => {

        console.log('Email:', email);
        console.log('Password:', password);
        if (!email || !password) {
            console.log('Email or Password is empty');
            return Alert.alert('Email or Password is empty')
        }
        const Email = () => {
            dispatch(addEmail(email))

        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Email()
                console.log('storing Email in async,', email)

                storingEmail(email)

                console.log('User Logged In! sucessfully')
                // console.log('Navigating to ThreadsHome1 with email:', email);
                navigation.navigate('ThreadsHome1',)



                //      {
                //     screen: 'ThreadsHome',
                //     params: { email: email }
                // }
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


            <View style={styles.passwordinputcontainer}>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry={isVisible} maxLength={10} 
                    style={styles.textinput} placeholder='Password' placeholderTextColor='#a6acaf' />
                <Pressable onPress={() => setIsVisible(!isVisible)} style={styles.eyeView}>
                    {isVisible ? <Icon name='eye' size={20} color='grey' /> :
                        <Icon name='eye-slash' size={20} color='grey' />
                    }
                </Pressable>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('ThreadsForgotPass')}>
                <Text style={styles.forgotPass}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={signinwithEmailAndPassword}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={{ height: '1%' }} />
            <FurnitureButton2 name='Sign in with Google' Iconname='google' />
            <FurnitureButton2 name='Sign in with Facebook' Iconname='facebook' />




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
        width: '45%',
        height: '20%',
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
    },
    maininputcontainer: {
    },
    passwordinputcontainer: {
        padding: 8,
        marginHorizontal: 25,
        backgroundColor: '#f2f3f4',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#D9D9D9',
        flexDirection: 'row',
        // justifyContent: 'space-between'
        gap: '90%'
    },
    textinput: {
        color: 'black',
        fontFamily: 'Nunito-Medium',
        fontSize: 17,
        // backgroundColor: 'red',
        width: '80%'
    },
    header: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 17,
    },
    eyeView: {
        alignSelf: 'center',
        // backgroundColor: 'red',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'

    }
})