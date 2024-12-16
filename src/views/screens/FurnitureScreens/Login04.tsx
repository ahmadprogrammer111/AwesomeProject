import { StyleSheet, Text, View, TextInput, Pressable, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import FurnitureButton2 from '../../../components/Furniture_components/FurnitureButton2'
import { useNavigation } from '@react-navigation/native'

const Login04 = () => {
   const [name, setname] = useState('')
   const [Onpress, setOnpress] = useState(false)
   const navigation = useNavigation()

   return (
      <View style={styles.container}>
         <View style={styles.spaccer2} />

         <Furnitureheader1 name='Log In' width='55%'/>
         <View style={styles.spaccer} />
         <Furnitureinput name='Email' placeholder='Text Your Email' />
         <View style={styles.spaccer3} />
         <Furnitureinput name='Password' placeholder='Text Your Password' />
         <View style={styles.options}>
            <Text style={styles.optionstext}>Remember me</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword06' as never)}>
               <Text style={[styles.optionstext, { color: '#838383' }]}>Forgot password?</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.spaccer4} />

         <FurnitureButton name='Log In' bgcolor='black' textcolor='white' screen={()=> navigation.navigate('Home08' as never)} />
         <View style={styles.spaccer3} />

         <View style={styles.orContainer}>
            <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
            <Text style={styles.partitiontext}>Or</Text>
            <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
         </View>
         <View style={styles.spaccer3} />

         <FurnitureButton2 Iconname='google' name='Continue with Google' />
         <FurnitureButton2 Iconname='facebook' name='Continue with Facebook' />
         <View style={styles.BottomtextContainer}>
            <Text style={styles.Bottomtext}>Dont't have an account? </Text>
            <Pressable onPressIn={() => setOnpress(true)} onPressOut={() => setOnpress(false)} onPress={()=> navigation.navigate('Signup05' as never)}>
               <Text style={[styles.Bottomtext2, Onpress && styles.underlined]}>Register</Text>
            </Pressable>
         </View>

      </View>

   )
}

export default Login04

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
   },
   spaccer: {
      flex: 0.15,
   },
   spaccer2: {
      flex: 0.09,
   },
   spaccer3: {
      flex: 0.03,
   },
   spaccer4: {
      flex: 0.05,
   },
   options: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
   },
   optionstext: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
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
   BottomtextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },
   Bottomtext: {
      color: 'black',
   },
   Bottomtext2: {
      color: 'blue',
   },
   underlined: {
      textDecorationLine: 'underline'
   }



})