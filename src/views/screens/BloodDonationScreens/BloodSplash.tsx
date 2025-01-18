import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Dialog, Image, Tooltip } from 'react-native-elements'
import { Touchable } from 'react-native'
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useNetInfo } from '@react-native-community/netinfo'
import { addEventListener } from "@react-native-community/netinfo";
import { Snackbar } from 'react-native-paper'
import { getAuth } from '@react-native-firebase/auth'
import { ConnectivityContext } from '../../../Context/Connection'


const BloodStart = () => {

    const { connected, checkNetwork, open, setOpen } = useContext(ConnectivityContext);



    // useFocusEffect(
    //     useCallback(
    //         () => {
    //             console.log('checking the network')
    //             checkNetwork()
    //             if (connected == false) {
    //                 setOpen(true)
    //             }
    //         },
    //         [connected],
    //     )
    // )


    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // const [connected, setConnected] = useState<boolean | undefined>(false)
    // const [open, setOpen] = useState(false)

    function onAuthStateChanged(user: any) {
        setUser(user);
        console.log('User Found', user)
        if (initializing) setInitializing(false);
        // console.log(initializing)
    }


    useEffect(() => {
        const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [initializing]);



    useFocusEffect(useCallback(
        () => {
            if (!initializing && connected) {
                setTimeout(() => {
                    if (user) {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'BloodProfile' }],
                            })
                        );
                    } else {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'BloodLogin' }],
                            })
                        );

                    }

                }, 2000);
            }
        }, [initializing, connected],
    ))




    const navigation = useNavigation<any>()


    return (
        <SafeAreaView style={styles.safeArea}>

            {/* <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}> */}
            <View style={styles.container}>
                <View style={{ height: '27%' }} />

                <Image
                    source={require('../../../assets/images/bloodDrop.png')}
                    resizeMode='contain'
                    containerStyle={styles.bloodDrop}
                    PlaceholderContent={<ActivityIndicator />}
                />

                <Text style={styles.title}>Blood Bank</Text>

                <Text style={styles.slogan}>Global</Text>
                <View style={{ height: '5%' }} />

                <Text style={styles.text}>Donate Blood,Save Life</Text>

                {/* 
                <Pressable
                    style={[styles.buttonContainer, { backgroundColor: !connected ? '#ed8b71' : '#D20D0D' }]}
                    onPress={() => {
                        setOpen(true)
                        if (connected == true) {
                            setOpen(false)
                        }
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BloodLogin')}
                        disabled={!connected}
                    >
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </Pressable> */}
                {/* <Snackbar
                    visible={open}
                    onDismiss={() => setOpen(false)}
                    action={{
                        label: 'Refresh',
                        onPress: () => {
                            checkNetwork()
                        },
                    }}>
                    No Internet Connection
                </Snackbar> */}
            </View>
        </SafeAreaView >
    )
}

export default BloodStart

const styles = StyleSheet.create({

    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#FF3737'
    },
    bloodDrop: {
        // backgroundColor: 'red',
        height: '10%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        color: '#fff',
        alignSelf: 'center',
        fontFamily: 'Lexend-Regular',
        fontSize: 34,
        // fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.40', // Shadow color
        textShadowOffset: { width: 5.5, height: 3 }, // Shadow offset (x, y)
        textShadowRadius: 10
    },
    slogan: {
        textShadowColor: 'rgba(0, 0, 0, 0.40', // Shadow color
        textShadowOffset: { width: 5.5, height: 3 }, // Shadow offset (x, y)
        textShadowRadius: 10,
        fontFamily: 'Lexend-Regular',
        alignSelf: 'center',
        letterSpacing: 22,
        fontSize: 24,
        color: '#fff'

    },
    text: {
        fontFamily: 'Lexend-Regular',
        color: '#fff',
        fontSize: 24,
        // color: '#631E1E',/
        alignSelf: 'center',
    },
    buttonContainer: {
        // backgroundColor: '#D20D0D',

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