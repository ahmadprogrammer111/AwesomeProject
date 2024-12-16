import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import { useNavigation } from '@react-navigation/native'

const VerifyOtp07 = () => {
   const navigation = useNavigation()
   const [otp, setOtp] = useState('')
   return (
      <View style={styles.contaier}>

         <View style={styles.headerspaccer} />
         <Furnitureheader1 name='Verify OTP' width='60%' />
         <View style={styles.solidspaccer} />

         <View style={styles.paracontainer}>
            <Text style={styles.para}>Enter your OTP which has been sent to your email and</Text>
            <Text style={styles.para}>completely verify your account.</Text>
         </View>

         <View style={styles.otpcontainer}>
            <TextInput keyboardType='number-pad' maxLength={1} style={styles.otpinput} />
            <TextInput keyboardType='number-pad' maxLength={1} style={styles.otpinput} />
            <TextInput keyboardType='number-pad' maxLength={1} style={styles.otpinput} />
            <TextInput keyboardType='number-pad' maxLength={1} style={styles.otpinput} />
            <TextInput keyboardType='number-pad' maxLength={1} style={styles.otpinput} />
            <TextInput keyboardType='number-pad' maxLength={1} style={styles.otpinput} />
         </View>

         <View style={styles.paracontainer2}>
            <Text style={styles.para}>A code has been sent to your Phone</Text>
         </View>
         <View style={styles.paracontainer3}>
            <Text style={styles.para3}>Resend in 00.53</Text>
         </View>

   <FurnitureButton name='Confirm' bgcolor='black' textcolor='white' screen={()=>navigation.navigate('Home08' as never)} />
      </View>
   )
}

export default VerifyOtp07

const styles = StyleSheet.create({
   contaier: {
      flex: 1,
      backgroundColor: 'white'
   },
   headerspaccer: {
      height: '5%'
   },
   solidspaccer: {
      height: '10%'
   },
   otpcontainer: {
      flexDirection: 'row',
      marginHorizontal: 15,
   },
   otpinput: {
      textAlign: 'center',
      width: '14%',
      borderBottomWidth: 1,
      borderBottomColor: '#838383',
      color: 'black',
      margin: 3,
      fontSize: 22,
      fontFamily: 'PlusJakartaSans-Regular'
   },
   para: {
      color: '#838383',
      fontFamily: 'Poppins-Regular',
      fontSize: 12.4,
   },
   paracontainer: {
      marginHorizontal: 17,
   },
   paracontainer2: {
      padding: 20,
      marginHorizontal: 17,
      justifyContent: 'center',
      alignItems: 'center',
   },
   paracontainer3: {
      marginHorizontal: 17,
      justifyContent: 'center',
      alignItems: 'center',
   },
   para3:{
      color: 'blue'
   }
})