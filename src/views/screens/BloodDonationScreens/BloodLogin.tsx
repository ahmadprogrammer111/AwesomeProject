import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button as Button1 } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addEmail } from '../../../redux/Slices/BloodSlice'
import auth from '@react-native-firebase/auth'
import { Button, Dialog, Portal } from 'react-native-paper'
// import { TextInput } from 'react-native-gesture-handler'

const BloodLogin = ({ route }: any) => {



    // console.log(route?.params)
    const navigation = useNavigation<any>()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const [isloading, setIsloading] = useState(false)
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('')





    const signinwithEmailAndPassword = async () => {

        setIsloading(true)
        console.log('Email:', email);
        console.log('Password:', password);
        if (!email || !password) {
            console.log('Email or Password is empty');
            setError('Pls fill the required Feilds!!!')
            return setOpen(true)
        } else {
            const Email = () => {
                dispatch(addEmail(email))
            }

            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    Email()
                    console.log('storing Email in async,', email)

                    console.log('User Logged In! sucessfully')
                    setIsloading(false)
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'BloodMenu' }],
                        })
                    );
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
                    if (error.code == 'auth/user-not-found') {
                        console.log('The email is not found.')
                    }
                    setIsloading(false)
                    const err = `Pls check your Email  ${error}: ${error.code}: ${error.message}`;
                    setError(err)
                    setOpen(true)
                    console.log(error)

                })
        }
    }




    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>

                    {isloading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button1 title="Solid" type="solid" loading /></View> :

                        <>
                            <View style={{ height: '10%' }} />
                            <Text style={styles.login}>Login</Text>
                            <Text style={styles.text}>Welcome to Global Blood Bank,</Text>
                            <Text style={styles.text}>Already Registered User Login here.</Text>
                            <View style={{ height: '3%' }} />



                            <View style={{ height: '3%' }} />

                            <View style={styles.inputContainer} >
                                <TextInput style={styles.input} value={email} onChangeText={setEmail}
                                    placeholder='Email' placeholderTextColor='#685F5F' />
                            </View>

                            <View style={{ height: '3%' }} />

                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} value={password} onChangeText={setPassword}
                                    placeholder='Password' placeholderTextColor='#685F5F' />
                            </View>
                            <View style={{ alignSelf: 'flex-end', marginHorizontal: '12%', }}>
                                <Text style={styles.text}>Forgot Password?</Text>
                            </View>

                            <Portal>
                                <Dialog visible={open} onDismiss={() => setOpen(false)} >
                                    <Dialog.Title>Alert!</Dialog.Title>
                                    <Dialog.Content>
                                        <Text>{error}</Text>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button onPress={() => setOpen(false)}>ok</Button>
                                    </Dialog.Actions>
                                </Dialog>
                            </Portal>


                            <View style={{ height: '3%' }} />

                            <TouchableOpacity
                                onPress={() => {
                                    signinwithEmailAndPassword()
                                }}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <View style={{ height: '1.5%' }} />

                            <Text style={styles.text}>Dont have an account?</Text>

                            <View style={{ height: '1.5%' }} />

                            <TouchableOpacity
                                onPress={() => navigation.navigate('BloodRegister')}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                        </>}
                </LinearGradient>
            </TouchableWithoutFeedback>

        </SafeAreaView >
    )
}

export default BloodLogin

const styles = StyleSheet.create({

    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    login: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    },
    inputContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 29,
        alignSelf: 'center',
        width: '80%',
        height: '8%',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    input: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',

        width: '90%',
        height: '80%'
    },
    buttonContainer: {
        backgroundColor: '#D20D0D',

        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#FFFCFC',
        alignSelf: 'center',
        elevation: 10,
        width: '80%',
        paddingTop: 0,
        paddingBottom: 5,
        // paddingVertical: 5,
        height: 55,
        // borderWidth: 20,
        // borderRadius: 20,
    },
    buttonText: {
        // height: '10%',
        paddingTop: 0,
        // paddingBottom: 5,
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'

    }


})