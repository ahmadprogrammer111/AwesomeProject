import { ActivityIndicator, StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/web/interfaces'
import { useNavigation } from '@react-navigation/native'
// import { Image } from 'react-native-elements'


const BloodMenu = () => {
    const navigation = useNavigation<any>()

    return (

        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>

                <View style={styles.mainContainer}>

                    <Text style={styles.title}>Blood Bank</Text>

                    <View style={{ height: '2%' }} />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodRegister')}
                        style={styles.bloodBankContainer}>
                        <Image source={require('../../../assets/images/bloodBank.png')}
                            resizeMode='contain'
                            style={styles.bloodBank}
                            onError={(e) => console.log(e.nativeEvent.error)}
                        />
                        <Text style={styles.text}>Registration</Text>
                    </TouchableOpacity>

                    <View style={{ height: '2%' }} />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodBankSearch')}
                        style={styles.bloodBankContainer}>
                        <Image source={require('../../../assets/images/bloodPacket.png')}
                            resizeMode='contain'
                            style={styles.bloodBank}
                            onError={(e) => console.log(e.nativeEvent.error)}
                        />
                        <Text style={styles.text}>Search BloodBank</Text>
                    </TouchableOpacity>

                    <View style={{ height: '1%' }} />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodBankDonorsSearch')}
                        style={styles.bloodBankContainer}>
                        <Image source={require('../../../assets/images/bloodRecepient.png')}
                            resizeMode='contain'
                            style={styles.bloodBank}
                            onError={(e) => console.log(e.nativeEvent.error)}
                        />
                        <Text style={styles.text}>Search Donor</Text>
                    </TouchableOpacity>

                </View>


            </LinearGradient>

        </SafeAreaView >
    )
}

export default BloodMenu

const styles = StyleSheet.create({

    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    title: {
        color: '#680606',
        // alignSelf: 'center',

        fontSize: 34,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.40', // Shadow color
        textShadowOffset: { width: 5.5, height: 3 }, // Shadow offset (x, y)
        textShadowRadius: 10
    },
    bloodBank: {
        width: '50%',
        height: '80%',
        // alignSelf: 'center',/
    },
    bloodBankContainer: {
        height: '28%',
        width: '80%',
        alignItems: 'center'
    },
    text: {
        fontSize: 27,
        color: '#FFFFFF',
        // alignSelf: 'center'
    },
    mainContainer: {
        // alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})