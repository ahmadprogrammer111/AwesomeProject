import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Furnituresearchbar from '../../../components/Furniture_components/Furnituresearchbar'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Search09 = () => {
   const [color, setcolor] = useState(false)
   const navigation = useNavigation()
   return (
      <View style={styles.container}>

         <View style={styles.spaccer} />

         <View style={styles.headercontainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <View style={styles.backContainer}>
                  <Icon name='arrow-left' size={15} color='#1D1D1D' style={styles.icon} />
               </View>
            </TouchableOpacity>

            <Furnituresearchbar width='90%' marginh={30} />
         </View>



         <View style={styles.spaccer3} />

         <View style={styles.textcontainer}>
            <Text style={{ color: 'black', fontFamily: 'Poppins-SemiBold' }}>Recent</Text>
            <Pressable onPressIn={()=> setcolor(true)} onPressOut={()=> setcolor(false)}>
            <Text style={[ color ? styles.delete && styles.underline: styles.delete]}>Delete all</Text>
            </Pressable>

         </View>
         <View style={styles.textcontainer}>
            <Text style={styles.text}>Home Decoration</Text>
            <TouchableOpacity>
               <Icon2 name='cross' size={20} color='#838383' />
            </TouchableOpacity>
         </View>

         <View style={styles.textcontainer}>
            <Text style={styles.text}>Minimalist style</Text>
            <TouchableOpacity>
               <Icon2 name='cross' size={20} color='#838383' />
            </TouchableOpacity>

         </View>
         <View style={styles.textcontainer}>
            <Text style={styles.text}>House for sale at reasonable price</Text>
            <TouchableOpacity>

               <Icon2 name='cross' size={20} color='#838383' />
            </TouchableOpacity>

         </View>

         <View style={styles.spaccer2} />

         <View style={styles.textcontainer}>
            <Text style={styles.heading}>Popular</Text>
            <TouchableOpacity>

               <Text style={{ color: '#838383', fontFamily: 'Poppins-Regular' }}>See all</Text>
            </TouchableOpacity>

         </View>

         <View style={{ flexDirection: 'row', marginLeft: 30, }}>
            <TouchableOpacity>

               <View style={{ height: 180, width: 280, backgroundColor: '#AFAFAF', borderRadius: 10, marginRight: 30, }} />
            </TouchableOpacity>
            <TouchableOpacity>

               <View style={{ height: 180, width: 280, backgroundColor: '#AFAFAF', borderRadius: 10, }} />
            </TouchableOpacity>
         </View>
         <View style={styles.spaccer3} />

         <View style={{ flexDirection: 'row', marginLeft: 30, }}>
            <Text style={[styles.heading, { marginRight: 30, }]}>Fresh space with plants         </Text>
            <Text style={styles.heading}>Fresh space with plants</Text>

         </View>

      </View>
   )
}

export default Search09

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   spaccer: {
      flex: 0.1,
   },
   spaccer2: {
      flex: 0.04,
   },
   spaccer3: {
      flex: 0.02,
   },
   backContainer: {
      height: 45,
      width: 45,
      borderRadius: 45,
      // backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6'
   },
   icon: {
      alignSelf: 'center',
      justifyContent: 'center'
   },
   headercontainer: {
      // width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal: 30,
      // backgroundColor: 'red',
   },
   tab: {
      justifyContent: 'center',
      backgroundColor: 'black',
      borderRadius: 12,
      height: 32,
      width: 108,
   },
   tabtext: {
      textAlign: 'center',
      color: 'white',
      fontSize: 14,
      fontFamily: 'Poppins-Regular'
   },
   tabcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
   },
   text: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 16
   },
   textcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      marginBottom: 5,
   },
   heading: {
      fontSize: 18,
      // fontWeight: '500',
      color: 'black',
      fontFamily: 'Poppins-Medium',
   },
   delete: {
      color: 'blue',
      fontFamily: 'Poppins-Regular'
   },
   underline:{
      textDecorationLine: 'underline',
   }


})