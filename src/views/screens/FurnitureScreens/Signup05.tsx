import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FurnitureButton2 from '../../../components/Furniture_components/FurnitureButton2'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import { useNavigation } from '@react-navigation/native'


const Signup05 = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.spaccer4} />
            <Furnitureheader1 name='Sign Up' width='55%' />
            <View style={styles.spaccer2} />

            <Furnitureinput name='Email' placeholder='Text your Email' />
            <View style={styles.spaccer3} />

            <Furnitureinput name='Password' placeholder='Text your Password' />
            <View style={styles.spaccer3} />

            <Furnitureinput name='Confirm Password' placeholder='Text your Password' />
            <View style={styles.spaccer4} />

            <FurnitureButton name='Sign up' textcolor='white' bgcolor='black' screen={()=> navigation.navigate('Login04' as never)} />
            <View style={styles.spaccer3} />

            <View style={styles.orContainer}>
                <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
                <Text style={styles.partitiontext}>Or</Text>
                <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
            </View>
            <View style={styles.spaccer3} />
            <FurnitureButton2 Iconname='google' name='Continue with Google' />
            <FurnitureButton2 Iconname='facebook' name='Continue with Facebook' />
        </View>
    )
}

export default Signup05

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    spaccer: {
        flex: 0.15,
    },
    spaccer2: {
        flex: 0.25,
    },
    spaccer3: {
        flex: 0.04,
    },
    spaccer4: {
        flex: 0.1,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    partitiontext: {
        color: '#838383'
    },
})