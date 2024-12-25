import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Furniturelogo from '../../../components/Furniture_components/Furniturelogo'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';


const Splash_screen01 = () => {
    const navigation = useNavigation()
    const [user, setUser] = useState()
    const [initializing, setInitializing] = useState(true)


    const onAuthStateChanged = (user: any) => {
        setUser(user);
        console.log('User FOund', user)
        if (initializing) {
            setInitializing(false)
        }
    }

    useEffect(() => {

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (!initializing) {
                if (user) {
                    navigation.navigate('Home08' as never);
                }
                if (user == null) {
                    navigation.navigate('Logsignup03' as never);
                }
            }
        }, 2000);
    }, [initializing, user])





    return (
        <View style={styles.container}>
            <Furniturelogo />
        </View>
    )
}

export default Splash_screen01

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
