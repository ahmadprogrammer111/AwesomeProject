import { StyleSheet, Text, View, TextInput, Pressable, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import FurnitureButton2 from '../../../components/Furniture_components/FurnitureButton2'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const Login04 = () => {
   const [Onpress, setOnpress] = useState(false)
   const navigation = useNavigation()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   // console.log('Email:', email) 
   // console.log('Password:', password) 



   const createUserWithEmailAndPassword = async () => {
      console.log('Email:', email);
      console.log('Password:', password);
      if (!email || !password) {
         console.log('Email or Password is empty');
         return Alert.alert('Email or Password is empty')
         
      }

      auth()
         .signInWithEmailAndPassword(email, password)
         .then(() => {
            console.log('User signed sucessfully')
            navigation.navigate('Home08' as never)
         })
         .catch((error) => {
            if (error.code == 'auth/email-already-in-use') {
               console.log('That email address is already in use!')
            }
            if (error.code == 'auth/invalid-email') {
               console.log('That email address is invalid!!')
            }
            if (error.code == 'auth/operation-not-allowed') {
               console.log('The email is disabled by the owner of the app.')
            }
            console.log(error)
         })
   }


   return (
      <View style={styles.container}>
         <View style={styles.spaccer2} />

         <Furnitureheader1 name='Log In' width='55%' />
         <View style={styles.spaccer} />
         <View style={styles.maininputcontainer}>
            <Text style={styles.header}>Email</Text>
            <View style={styles.textinputcontainer}>
               <TextInput value={email} onChangeText={setEmail}
                  style={styles.textinput} placeholder='Text Your Email' placeholderTextColor='#838383' />
            </View>
         </View>


         <View style={styles.spaccer3} />
         {/* <Furnitureinput name='Password' placeholder='Text Your Password' text={password} onChangeText={setPassword} /> */}
         <View style={styles.maininputcontainer}>
            <Text style={styles.header}>Password</Text>
            <View style={styles.textinputcontainer}>
               <TextInput value={password} onChangeText={setPassword}
                  style={styles.textinput} placeholder='Text Your Email' placeholderTextColor='#838383' />
            </View>
         </View>
         <View style={styles.options}>
            <Text style={styles.optionstext}>Remember me</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword06' as never)}>
               <Text style={[styles.optionstext, { color: '#838383' }]}>Forgot password?</Text>
            </TouchableOpacity>
         </View>

         <View style={styles.spaccer4} />

         <FurnitureButton name='Log In' bgcolor='black' textcolor='white' screen={() => {
            createUserWithEmailAndPassword()
         }} />
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
            <Pressable onPressIn={() => setOnpress(true)} onPressOut={() => setOnpress(false)} onPress={() => navigation.navigate('Signup05' as never)}>
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
      flex: 0.03,
   },
   options: {
      marginVertical: 10,
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
   },
   maininputcontainer: {
      marginHorizontal: 25,
   },
   textinputcontainer: {
      // backgroundColor: 'blue',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#D9D9D9',
   },
   textinput: {
      color: 'black',
      fontFamily: 'Poppins-Regular'
   },
   header: {
      fontFamily: 'Poppins-Regular',
      color: 'black',
      fontSize: 16,
   },





})