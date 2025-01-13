import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Dialog, Image, Tooltip } from 'react-native-elements'
import { Touchable } from 'react-native'
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useNetInfo } from '@react-native-community/netinfo'
import { addEventListener } from "@react-native-community/netinfo";
import { Snackbar } from 'react-native-paper'
import { getAuth } from '@react-native-firebase/auth'


const BloodSplashScreen = () => {




    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const [connected, setConnected] = useState<boolean | undefined>(false)
    const [open, setOpen] = useState(false)

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
                                routes: [{ name: 'BloodMenu' }],
                            })
                        );
                    }

                }, 2000);
            }
        }, [initializing, connected],
    ))




    const navigation = useNavigation<any>()


    useFocusEffect(
        useCallback(
            () => {
                checkNetwork()
                setOpen(false)
                if (connected == false) {
                    setOpen(true)
                } else if (connected == true) {
                    setOpen(false)
                }
            }, [connected],
        ))

    const checkNetwork = () => {
        const unsubscribe = addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            console.log("Details :?", state.details);
            console.log("Is Wifi enabled?", state.isWifiEnabled);
            if (!state.isWifiEnabled || !state.isConnected) {
                console.log('network Not  Connnected!!')
                setOpen(true)
                setConnected(state.isConnected as any)
                console.log('Connected  Value-------->', connected)

            } else if (state.isWifiEnabled || state.isConnected) {
                console.log('newrok Connnected !!!!')
                setOpen(false)
                setConnected(state.isConnected)
                console.log('ConnectedValue-------->', connected)
            }
        });
        unsubscribe();
    }



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
                </Pressable>


                <Snackbar
                    visible={open}
                    onDismiss={() => setOpen(false)}
                    action={{
                        label: 'Refresh',
                        onPress: () => {
                            checkNetwork()
                            
                        },
                    }}>
                    No Internet Connection
                </Snackbar>

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