import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button as Button1 } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addEmail } from '../../../redux/Slices/BloodSlice'
import auth from '@react-native-firebase/auth'
import { Button, Dialog, Portal } from 'react-native-paper'
import { ConnectivityContext } from '../../../Context/Connection'
import BloodLogo from '../../../components/BloodComponent/BloodLogo'
import BloodInput from '../../../components/BloodComponent/BloodInput'
import { colors, textColors } from '../../../components/BloodComponent/BloodColors'
import ForgotPassword06 from '../FurnitureScreens/ForgotPassword06'
import { color } from 'react-native-elements/dist/helpers'
import RadialGradient from 'react-native-radial-gradient';
import icon from 'react-native-ico-social-media'
// import { TextInput } from 'react-native-gesture-handler'



const BloodLogin = ({ route }: any) => {


    const { connected, checkNetwork, setOpen } = useContext(ConnectivityContext);


    const navigation = useNavigation<any>()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const [isloading, setIsloading] = useState(false)
    const [openDialog, setOpenDialog] = useState(false);
    const [error, setError] = useState('')





    const signinwithEmailAndPassword = async () => {


        setIsloading(true)
        console.log('Email:', email);
        console.log('Password:', password);
        if (email == '' || password == '') {
            console.log('Email or Password is empty');
            setIsloading(false)
            setError('Pls fill the required Feilds!!!')
            return setOpenDialog(true)
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
                            routes: [{ name: 'BloodProfile' }],
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
                    setOpenDialog(true)
                    console.log(error)

                })
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    {isloading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button1 title="Solid" type="solid" loading  buttonStyle={{backgroundColor: colors.primary}}/></View> :

                        <>
                            <Image source={require('../../../assets/images/bloodBg.png')} resizeMode='stretch' style={{ position: 'absolute', height: '27%', width: '100%' }} />
                            <View style={{ height: '4%' }} />

                            {/* <BloodLogo /> */}
                            <View style={{ height: '5%' }} />
                            <View style={styles.headingContainer}>
                                <Text style={[styles.text, { letterSpacing: -0.5, fontSize: 13.8 }]}>Already Registered!</Text>
                                <Text style={styles.login}>Login</Text>
                                <Text style={styles.text}>Your account</Text>

                            </View>

                            <View style={{ height: '10%' }} />
                            <Text style={styles.inputTitle}>Email</Text>
                            <BloodInput placeHolder='example@email.com' value={email} setValue={setEmail} />

                            <View style={{ height: '2%' }} />


                            <Text style={styles.inputTitle}>Password</Text>
                            <BloodInput placeHolder='password' value={password} setValue={setPassword} />
                            <View style={{ height: '2%' }} />

                            <Text style={styles.forgotPass}>Forgot Password?</Text>

                            <Portal>
                                <Dialog visible={openDialog} onDismiss={() => setOpenDialog(false)} >
                                    <Dialog.Title>Alert!</Dialog.Title>
                                    <Dialog.Content>
                                        <Text>{error}</Text>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button onPress={() => setOpenDialog(false)}>ok</Button>
                                    </Dialog.Actions>
                                </Dialog>
                            </Portal>


                            <View style={{ height: '6%' }} />

                            <TouchableOpacity
                                onPress={() => {
                                    signinwithEmailAndPassword()
                                }}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <View style={{ height: '1.5%' }} />

                            <Text style={styles.forgotPass}>Or</Text>


                            <View style={{ height: '1.5%' }} />

                            <TouchableOpacity
                                onPress={() => navigation.navigate('BloodRegister')}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Register</Text>
                            </TouchableOpacity>

                        </>}

                </View>
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
    headingContainer: {
        alignSelf: 'flex-start',
        marginHorizontal: '10%',
    },
    login: {
        marginLeft: -5,
        marginTop: -10,
        marginBottom: -5,

        // backgroundColor: 'red',
        // padding: -10,
        letterSpacing: 3,
        fontFamily: "Lexend-SemiBold",
        color: 'white',
        fontSize: 40,
        // alignSelf: 'flex-start',
        // marginHorizontal: '10%',
        // fontWeight: 'bold'
    },
    text: {
        fontFamily: "Lexend-Regular",
        color: 'white',
        // marginHorizontal: '10%',
        letterSpacing: 2,

        fontSize: 14.8,
        // alignSelf: 'center'
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
        backgroundColor: colors.primary,
        justifyContent: 'center',
        borderRadius: 6,
        // borderWidth: 2,
        // borderColor: '#FFFCFC',
        alignSelf: 'center',
        elevation: 10,
        width: '80%',
        paddingTop: 0,
        paddingBottom: 5,
        // paddingVertical: 5,
        height: '6%',
        // borderWidth: 20,
        // borderRadius: 20,
    },
    buttonText: {
        // height: '10%',
        // paddingTop: 0,
        // paddingBottom: 5,
        fontFamily: 'Lexend-Regular',
        fontSize: 25,
        color: 'white',
        // fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    },
    inputTitle: {
        marginHorizontal: '10%',
        color: textColors.primary,
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
    },
    forgotPass: {
        color: textColors.primary,
        fontSize: 18,
        marginHorizontal: '10%',
        fontFamily: 'Lexend-Regular',
        alignSelf: 'center',
    },


})