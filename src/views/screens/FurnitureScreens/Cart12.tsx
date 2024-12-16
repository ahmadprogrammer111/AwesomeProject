import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Sofa from '../../../components/Furniture_components/Sofa'
import Icon from 'react-native-vector-icons/AntDesign'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import { useNavigation } from '@react-navigation/native'


const Cart12 = () => {

   const navigation = useNavigation()
   return (
      <View style={styles.container}>
         <View style={styles.spaccer} />
         <Furnitureheader1 name='Cart' width='50%' />
         <View style={styles.spaccer} />

         <View
            style={styles.tabcontainer}>
            <Sofa />
            <View
               style={styles.countercontainer}
            >
               <TouchableOpacity style={styles.minusiconcontainer}>

                  <Icon name='minus' size={18} color='black' />

               </TouchableOpacity>
               <View style={{ alignItems: 'center', justifyContent: 'center', width: '16%', height: '20%' }}>
                  <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', fontSize: 14, }}>01</Text>
               </View>
               <TouchableOpacity style={styles.plusiconcontainer}>
                  <Icon name='plus' size={18} color='white' />

               </TouchableOpacity>
            </View>
         </View>
         <View style={{ height: 1, backgroundColor: '#E6E6E6', marginHorizontal: 20, marginTop: 15, marginBottom: 8, }} />
         <View
            style={styles.tabcontainer}>
            <Sofa />
            <View
               style={styles.countercontainer}
            >
               <TouchableOpacity style={styles.minusiconcontainer}>

                  <Icon name='minus' size={18} color='black' />

               </TouchableOpacity>
               <View style={{ alignItems: 'center', justifyContent: 'center', width: '16%', height: '20%' }}>
                  <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', fontSize: 14, }}>01</Text>
               </View>
               <TouchableOpacity style={styles.plusiconcontainer}>

                  <Icon name='plus' size={18} color='white' />

               </TouchableOpacity>
            </View>
         </View>
         <View style={styles.straightline} />

         <View
            style={styles.tabcontainer}>
            <Sofa />
            <View
               style={styles.countercontainer}
            >
               <TouchableOpacity style={styles.minusiconcontainer}>
                  <Icon name='minus' size={18} color='black' />
               </TouchableOpacity>

               <View style={{ alignItems: 'center', justifyContent: 'center', width: '16%', height: '20%' }}>
                  <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', fontSize: 14, }}>01</Text>
               </View>

               <TouchableOpacity style={styles.plusiconcontainer}>
                  <Icon name='plus' size={18} color='white' />
               </TouchableOpacity>
            </View>
         </View>

         <View style={styles.spaccer} />
         <FurnitureButton name='Add more' textcolor='black' bgcolor='#E6E6E6' />

         <View style={styles.straightline} />

         <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 15, justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', }}>Total</Text>
            <Text style={{ color: 'blue', fontFamily: 'Poppins-Regular', fontSize: 20 }}>$335</Text>
         </View>
         
            <View style={{ height: '18%', justifyContent: 'center' }}>
               <FurnitureButton name='Check Out' bgcolor='black' textcolor='white' borderRadius={1.5} screen={()=> navigation.navigate('CheckOut13' as never)}/>
            </View>
      
      </View>


   )
}

export default Cart12

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
   },
   spaccer: {
      height: 25,
   },
   minusiconcontainer: {
      backgroundColor: '#E6E6E6',
      width: '16%',
      height: '20%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
   },
   plusiconcontainer: {
      backgroundColor: 'black',
      width: '13%',
      height: '20%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
   },
   tabcontainer: {
      height: '10%',
      flexDirection: 'row',
      marginBottom: 30,
   },
   countercontainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      height: '140%',
      marginLeft: 25,
   },
   straightline: {
      height: 1,
      backgroundColor: '#E6E6E6',
      marginHorizontal: 20,
      marginTop: 15,
      marginBottom: 8,
   }
})