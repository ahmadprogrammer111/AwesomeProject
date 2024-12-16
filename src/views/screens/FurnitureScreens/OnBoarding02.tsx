import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import { useNavigation } from '@react-navigation/native'


const OnBoarding02 = () => {
   const navigation = useNavigation()
   return (
      <View style={styles.Container}>

         <View style={styles.RectangleContainer}>
            <View style={styles.Rectangle} />
         </View>

         <View style={styles.headingContainer}>
            <Text style={styles.heading}>Find Your Dream House:</Text>
            <Text style={styles.heading}> Browse Our Listings</Text>
            <Text style={styles.heading}>Now </Text>
         </View>

         <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur </Text>
         <Text style={styles.text}> adipiscing elit, sed do eiusmod tempor</Text>
         <Text style={styles.text}> incididunt ut labore</Text>

       <View style={styles.spaccer} />
       
       <FurnitureButton name='Get Started' screen={()=> navigation.navigate('Logsignup03' as never)} bgcolor='black' textcolor='white'/>
       
      </View>
   )
}

export default OnBoarding02

const styles = StyleSheet.create({

   Container: {
      flex: 1,
   },
   RectangleContainer: {
      flex: 0.8,
      marginHorizontal: 25,
      marginTop: 30,
   },
   Rectangle: {
      flex: 1,
      backgroundColor: '#AFAFAF',
      borderRadius: 20,
   },
   headingContainer: {
      height: '20%',
      // backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
   },
   heading: {
      height: '25.5%',
      // backgroundColor: 'blue',
      fontSize: 27,
      fontFamily: 'Poppins-Medium',
      color: 'black',
      // textAlign: 'center',
   },
   text: {
      // height: '20%',
      color: '#838383',
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
   },
   spaccer: {
      flex: 0.05,
   },
   button: {
      //   flex: 0.32,
      backgroundColor: 'black',
      margin: 20,
      // alignSelf: 'center',
      padding: 10,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center'
   },
})