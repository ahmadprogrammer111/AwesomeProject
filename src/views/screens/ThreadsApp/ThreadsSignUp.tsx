import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import ThreadsInput from '../../../components/ThreadsComponents/ThreadsInput'
import { useNavigation } from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { addEmail, addUser } from '../../../redux/Slices/userSlice'

const ThreadsSignUp = () => {
    const dispatch = useDispatch()
    // const [onPressed, setOnPressed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation<any>()

    const bio = ''
    const selectedImage = ''



    const Email = () => {
        dispatch(addEmail(email))
    }



    const createUserWithEmailAndPassword = async () => {

        console.log('Email:', email);
        console.log('Password:', password);
        if (!email || !password) {
            console.log('Email or Password is empty');
            Alert.alert('Email or Password is empty')
            return setIsLoading(false)

        }
        Email()        
     

        Auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User Signed Up! sucessfully')
                firestore()
                    .collection('Users')
                    .doc(email)
                    .set({
                        username: name,
                        email: email,
                        password: password,
                        bio: bio,
                        selectedImage: selectedImage,
                    });
                // firestore()
                //     .collection('Threads')
                //     .doc(email)
                //     .set({
                //         threads: []
                //     });
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
            {isLoading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator color='black' size='large' /></View> :
                <>
                    <View style={{ height: '10%' }} />

                    <View style={{ justifyContent: 'center', width: '55%', height: '25%', alignSelf: 'center' }}>
                        <Image style={{ resizeMode: 'cover', alignSelf: 'center' }}
                            source={require('../../../assets/images/Threads.png')} />
                    </View>
                    <View style={{ height: '5%' }} />

                    <ThreadsInput text={name} onChangeText={setName} placeholder='UserName ' />
                    <View style={{ height: '2%' }} />

                    <ThreadsInput text={email} onChangeText={setEmail} placeholder='Email ' />
                    <View style={{ height: '2%' }} />
                    <ThreadsInput text={password} onChangeText={setPassword} placeholder='Password' />
                    <View style={{ height: '2%' }} />

                    <TouchableOpacity onPress={() => {
                        setIsLoading(true)
                        createUserWithEmailAndPassword();

                    }}
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
                </>}
        </View >
    )
}

export default ThreadsSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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