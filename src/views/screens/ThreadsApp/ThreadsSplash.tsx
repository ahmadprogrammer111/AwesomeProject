import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'


import auth from '@react-native-firebase/auth';


const ThreadsSplash = () => {
    const navigation = useNavigation<any>()
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user: any) {
        setUser(user);
        console.log('User Found', user)
        if (initializing) setInitializing(false);
        // console.log(initializing)
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [initializing]);


    useFocusEffect(useCallback(
        () => {
            if (!initializing) {
                setTimeout(() => {
                    if (user) {
                        navigation.navigate('ThreadsHome1')
                    } else {
                        navigation.navigate('ThreadsLogin')
                    }
                }, 2000);
            }
        }, [initializing],
    ))


    // }, [initializing])


    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/Threads1.png')} />
        </View>
    )
}

export default ThreadsSplash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    }
})