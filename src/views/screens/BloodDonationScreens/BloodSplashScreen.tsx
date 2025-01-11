import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Image } from 'react-native-elements'
import { Touchable } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const BloodSplashScreen = () => {
    const navigation = useNavigation<any>()

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>
                <View style={{ height: '5%' }} />

                <Image
                    source={require('../../../assets/images/bloodDrop.png')}
                    resizeMode='contain'
                    containerStyle={styles.bloodDrop}
                    PlaceholderContent={<ActivityIndicator />}
                />

                {/* <View style={{ height: '5%' }} /> */}

                <Text style={styles.title}>Global</Text>
                <Text style={styles.title}>Blood Bank</Text>
                <Text style={styles.text}>Donate Blood,Save Life</Text>

                <View style={{ height: '15%' }} />

                <TouchableOpacity onPress={() => navigation.navigate('BloodLogin')}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>






            </LinearGradient>
        </SafeAreaView>
    )
}

export default BloodSplashScreen

const styles = StyleSheet.create({

    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    bloodDrop: {
        // backgroundColor: 'red',
        height: '50%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        color: '#680606',
        alignSelf: 'center',

        fontSize: 34,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.40', // Shadow color
        textShadowOffset: { width: 5.5, height: 3 }, // Shadow offset (x, y)
        textShadowRadius: 10
    },
    text: {
        fontSize: 24,
        color: '#631E1E',
        alignSelf: 'center',
    },
    buttonContainer: {
        backgroundColor: '#D20D0D',

        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#FFFCFC',
        alignSelf: 'center',
        elevation: 10,
        width: '50%',
        paddingTop: 0,
        paddingBottom: 5,
        // paddingVertical: 5,
        height: '7%',
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