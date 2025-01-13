import { ActivityIndicator, StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/web/interfaces'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import firestore, { doc } from '@react-native-firebase/firestore'
import { addUser } from '../../../redux/Slices/BloodSlice'
import { useDispatch, useSelector } from 'react-redux'
import { underDampedSpringCalculations } from 'react-native-reanimated/lib/typescript/animation/springUtils'
import { Dialog, Portal } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { ConnectivityContext } from '../../../components/BloofComponent/BloodConnection'



const BloodMenu = () => {


    const isConnected = useContext(ConnectivityContext);

    const navigation = useNavigation<any>()
    const Email = useSelector((state: any) => state.blood.bloodMail)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)



    if (isConnected == false) {
        setOpen(true)
    }
    const getDataFromFirebase = () => {
        console.log('Email at BloodMenu', Email)
        try {
            if (Email) {
                const subscriber = firestore()
                    .collection('BloodUsers')
                    .where('email', '==', Email)
                    .onSnapshot(documentSnapshot => {
                        console.log('BloodApp Data  at BloodMenu ______________>:', documentSnapshot.docs)
                        const threadsArray = documentSnapshot.docs.map(item => item.data())
                        if (threadsArray) {
                            console.log('userData is being Transferred to redux ', threadsArray)
                            dispatch(addUser(threadsArray[0]))
                        }
                    })

                return () => subscriber();
            } else {
                console.log('from Homescreen. There is no value in Email: ', Email)
            }

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    useFocusEffect(useCallback(
        () => {
            getDataFromFirebase()
        },
        [],
    ))


    return (

        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>

                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Blood Bank</Text>

                        <Icon name='person-circle' size={50} color='grey' onPress={() => navigation.navigate('BloodProfile')} />
                    </View>
                    <View style={{ height: '2%' }} />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodHome')}
                        style={styles.bloodBankContainer}>
                        <Image source={require('../../../assets/images/bloodBank.png')}
                            resizeMode='contain'
                            style={styles.bloodBank}
                            onError={(e) => console.log(e.nativeEvent.error)}
                        />
                        <Text style={styles.text}>Blood Bank</Text>
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
    },
    header: {
        marginTop: '5%',
        flexDirection: 'row',
        gap: 60,
        width: '50%',
        // alignSelf: 'flex-end'
    }
})