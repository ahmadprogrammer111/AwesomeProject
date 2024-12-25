import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Furniturelogo from '../../../components/Furniture_components/Furniturelogo'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';


const Splash_screen01 = () => {
    const navigation = useNavigation()
    const [user, setUser] = useState()
    const [initializing, setInitializing] = useState(true)


    const userAuthentication = (user: any) => {
        setUser(user);
        if (initializing) {
            setInitializing(false)
        }
    }


    useEffect(() => {

        const subscriber = auth().onAuthStateChanged(userAuthentication)
        return subscriber
    }, [])


    useEffect(() => {
        setTimeout(() => {
            if (!user) {
                navigation.navigate('OnBoarding02' as never)

            } else if (user) {
                navigation.navigate('Login04' as never)
            }
        }, 2000); () => {
        }
    }, [])



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
