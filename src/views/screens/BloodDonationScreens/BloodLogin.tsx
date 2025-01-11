import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
// import { TextInput } from 'react-native-gesture-handler'

const BloodLogin = () => {

    const navigation = useNavigation<any>()

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>



                <View style={{ height: '10%' }} />
                <Text style={styles.login}>Login</Text>
                <Text style={styles.text}>Welcome to Global Blood Bank,</Text>
                <Text style={styles.text}>Already Registered User Login here.</Text>
                <View style={{ height: '3%' }} />
                <View style={styles.inputContainer} >
                    <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#685F5F' />
                </View>


                <View style={{ height: '3%' }} />
                <View style={styles.inputContainer} >
                    <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#685F5F' />
                </View>

                <View style={{ height: '3%' }} />

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#685F5F' />
                </View>
                <View style={{ alignSelf: 'flex-end', marginHorizontal: '12%', }}>
                    <Text style={styles.text}>Forgot Password?</Text>
                </View>

                <View style={{ height: '3%' }} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('BloodMenu')}
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

            </LinearGradient>
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
        fontSize: 20,
        color: 'black'
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