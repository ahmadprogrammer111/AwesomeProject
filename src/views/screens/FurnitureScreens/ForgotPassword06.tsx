import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import { useNavigation } from '@react-navigation/native'
const ForgotPassword06 = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.headerspaccer} />
            <Furnitureheader1 name='Forgot Password' width='70%' />
            <View style={styles.solidspaccer2}/>


            {/* <View style={styles.spaccer2} /> */}
            <View style={styles.paracontainer}>
                <Text style={styles.para}>Enter the email associated with your account and</Text>
                <Text style={styles.para}> we'll send an email with code to reset your password</Text>
            </View>
            <View style={styles.spaccer3} />


            <Furnitureinput name='Email' placeholder='Text your Email'/>
<View style={styles.solidspaccer}/>
            <FurnitureButton name='Confirm' bgcolor='black' textcolor='white' screen={()=>navigation.navigate('VerifyOtp07' as never)}/>
        </View>
    )
}

export default ForgotPassword06

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerspaccer: {
        // flex: 0.06,
        // backgroundColor : 'black',
        height: '5%'
    },
    spaccer2: {
        flex: 0.08,
    },
    spaccer3: {
        flex: 0.04,
    },
    solidspaccer:{
        height: '2.5%'
    },
    solidspaccer2:{
        height: '7%'
    },
    para: {
        color: '#838383',
        fontFamily: 'Poppins-Regular',
        fontSize: 12.4,
    },
    paracontainer:{
        marginHorizontal: 17,
    },
})