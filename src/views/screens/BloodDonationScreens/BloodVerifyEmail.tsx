
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
import Auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/auth'


const BloodVerifyEmail = () => {

    const { user, setUser } = useContext(ConnectivityContext)

    const [email, setEmail] = useState('');
    const [isloading, setIsloading] = useState(false)
    const [openDialog, setOpenDialog] = useState(false);
    const [error, setError] = useState('')


    console.log('Global USer data from firestore', user)

    const navigation = useNavigation<any>()

    const VerifyEmail = async () => {
        Auth().onUserChanged((user) => {
            if (user) {
                user.sendEmailVerification()
                setOpenDialog(true)
                setUser(user)
                setError('Verification Email Sent!')
            }
        })
    }



    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    {isloading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button1 title="Solid" type="solid" loading buttonStyle={{ backgroundColor: colors.primary }} /></View> :

                        <>
                            <Image source={require('../../../assets/images/bloodBg.png')} resizeMode='stretch' style={{ position: 'absolute', height: '30%', width: '100%' }} />
                            <View style={{ height: '4%' }} />

                            <BloodLogo />
                            <View style={{ height: '4%' }} />

                            {/* <BloodLogo /> */}
                            {/* <View style={{ height: '3%' }} /> */}

                            <View style={{ backgroundColor: colors.contrast, elevation: 20, marginHorizontal: '7%', borderRadius: 5, height: '40%', alignSelf: 'center', width: '87%', position: 'relative' }}>


                                <View style={{ height: '10%' }} />

                                <Text style={{ color: textColors.primary, fontFamily: 'Lexend-Medium', fontSize: 20, alignSelf: 'center' }}>EMAIL VERIFICATION</Text>

                                <View style={{ height: '4%' }} />

                                <Text style={{ color: textColors.tertiary, fontFamily: 'Lexend-Regular', fontSize: 16, alignSelf: 'center', textAlign: 'center' }}>“We only need your Email for authentication
                                    purposes and will not contact you otherwise”</Text>

                                <View style={{ height: '3%' }} />




                                <View style={{ height: '5%' }} />
                                <View style={{ marginHorizontal: '10%' }}>
                                    <Text style={styles.title}>Email</Text>
                                    <TextInput style={[styles.textInput,]}
                                        value={email} onChangeText={setEmail}
                                        placeholder='Enter Email' placeholderTextColor='grey' maxLength={40}
                                    />
                                </View>

                                <TouchableOpacity onPress={() => VerifyEmail()}
                                    style={{ backgroundColor: colors.primary, width: '65%', height: '12%', alignItems: 'center', justifyContent: 'center', borderRadius: 6, alignSelf: 'center', position: 'absolute', bottom: '-7%' }}>
                                    <Text style={{ color: textColors.secondary, fontFamily: 'Lexend-Regular', fontSize: 16, alignSelf: 'center', textAlign: 'center' }}>Verify Email</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <Text style={styles.inputTitle}>Email</Text> */}
                            {/* <BloodInput placeHolder='example@email.com' value={email} setValue={setEmail} /> */}

                            {/* <View style={{ height: '2%' }} /> */}


                            {/* <Text style={styles.inputTitle}>Password</Text>
                            <BloodInput placeHolder='password' value={password} setValue={setPassword} />
                            <View style={{ height: '2%' }} />

                            <Text style={styles.forgotPass}>Forgot Password?</Text> */}

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

                            {/* <TouchableOpacity
                                onPress={() => {
                                    VerifyEmail()
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
                            </TouchableOpacity> */}

                        </>}

                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView >
    )
}

export default BloodVerifyEmail

const styles = StyleSheet.create({

    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: colors.contrast
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
    title: {
        fontFamily: 'Lexend-Regular',
        fontSize: 17,
        color: textColors.primary,
        // marginHorizontal: '10%',
    },
    textInput: {
        // backgroundColor: 'red',
        // width: '80%',
        paddingVertical: 0,
        paddingHorizontal: '0.5%',
        fontFamily: 'Lexend-Regular',
        borderBottomWidth: 1,
        fontSize: 15,
        color: 'grey',
    },


})