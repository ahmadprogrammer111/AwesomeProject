import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import Furniturelogo from '../../../components/Furniture_components/Furniturelogo'
import { useNavigation } from '@react-navigation/native'

const Splash_screen01 = () => {
    const navigation = useNavigation()

    useEffect(() => {
      setTimeout(() => {
        return navigation.navigate('OnBoarding02' as never)
      }, 2000); () => {
      }
    }, [])

    
    return (
        <View style={styles.container}>
            <Furniturelogo/>
        </View>
    )
}

export default Splash_screen01

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
