import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import FurnitureButton2 from '../../../components/Furniture_components/FurnitureButton2'
import Furniturelogo from '../../../components/Furniture_components/Furniturelogo'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

const Logsignup03 = () => {
   const navigation = useNavigation()
   const [Onpress, setOnpress] = useState(false)
   return (
      <View style={styles.Container}>
         <View style={styles.logoContainer}>
            <Furniturelogo />
         </View>


         <View>

            <FurnitureButton name='Log In' textcolor='white' bgcolor='black' borderWidth={1.5} screen={()=>navigation.navigate('Login04' as never) }/>
            <FurnitureButton name='Sign Up' textcolor='black' bgcolor='white' borderWidth={1.5} screen={()=>navigation.navigate('Signup05' as never) } />
         </View>

         <View style={styles.spaccer} />

         <View style={styles.orContainer}>
            <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
            <Text style={styles.partitiontext}>Or</Text>
            <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
         </View>

         <View style={styles.spaccer} />
         <FurnitureButton2 Iconname='google' name='Continue with Google' />
         <FurnitureButton2 Iconname='facebook' name='Continue with Facebook' />

         <View style={styles.BottomtextContainer}>
            <Text style={styles.Bottomtext}>Dont't have an account? </Text>
            
            <Pressable onPressIn={() => setOnpress(true)} onPressOut={() => setOnpress(false)}>
               <Text style={[styles.Bottomtext2, Onpress && styles.underlined]}>Register</Text>
            </Pressable>
         </View>

      </View>
   )
}

export default Logsignup03

const styles = StyleSheet.create({
   Container: {
      flex: 1,
      backgroundColor: 'white'
   },
   logoContainer: {
      flex: 0.55,
   },
   spaccer: {
      flex: 0.045,
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
   button: {
      margin: 10,
      padding: 10,
      marginHorizontal: 20,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.5,
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