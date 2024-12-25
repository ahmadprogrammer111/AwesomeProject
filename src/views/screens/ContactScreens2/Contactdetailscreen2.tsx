import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'


import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import Callhistory from '../../../components/Callhistory'
import { launchImageLibrary } from 'react-native-image-picker'


const Contactdetailscreen = ({ route }: any) => {



   const { data, index, } = route.params
   console.log('DATA ====>', data)

   const navigation = useNavigation<any>()

   const [contacts, setContacts] = useState([])


   useFocusEffect(
      useCallback(() => {
         getStoredObjectValue()
      },
         [],
      )
   )


   const getStoredObjectValue = async () => {
      try {
         const jsonvalue = await AsyncStorage.getItem('Contacts')
         const storedobjectvalue = JSON.parse(jsonvalue as any)
         if (storedobjectvalue !== null) {
            setContacts(storedobjectvalue as any)
         }
         console.log('Got stored value', storedobjectvalue)
      } catch (error) {
         console.log('Error', error)
      }
   }



   const deleteContact = async (indextodelete: any) => {
      try {
         const filteredcontactarray = contacts.filter((_, i) => i !== indextodelete)
         setContacts(filteredcontactarray)
         const jsonvalue = JSON.stringify(filteredcontactarray)
         await AsyncStorage.setItem('Contacts', jsonvalue)
         console.log('Your contact deleted')
         navigation.goBack()
      } catch (error) {
         console.log('Error', error)
      }
   }

   return (
      <View style={styles.container}>
         <View style={styles.Headercontainer}>
            <View style={styles.imagecontainer}>
               <TouchableOpacity
                  onPress={() => navigation.goBack()}
               >
                  <Icon name='arrow-back' size={25} color='black' />
               </TouchableOpacity>

               <View style={styles.headertextcontainer}>
                  <Text style={styles.Headertextstyle}>Contact</Text>
               </View>
            </View>

            <View style={styles.imagecontainer}>
               <TouchableOpacity>
                  <Icon name='search' size={25} color='black' style={styles.search} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Icon3 name='more-vertical' size={25} color='black' />
               </TouchableOpacity>
            </View>
         </View>


         <View style={styles.spaccer} />

         <View style={styles.contactpiccontainer}>
            {/* <Icon1 name="account-circle" size={150} color="grey" style={styles.Contactpic} /> */}

            {data.selectedImage ? data.selectedImage &&
               <Image style={{ height: 150, width: 150, borderRadius: 100, }} source={{ uri: data.selectedImage }} /> :

               <TouchableOpacity>
                  <Icon1 name="account-circle" size={160} color="grey" style={styles.Contactpic} />
               </TouchableOpacity>
            }


            <View style={styles.Iconcontainer}>
               <TouchableOpacity onPress={() => deleteContact(index)}>
                  <Icon2 name="delete" size={35} color="black" style={styles.delete} />
               </TouchableOpacity>

               <TouchableOpacity onPress={() =>
                  navigation.navigate('Contactaddscreen', {
                     data: data,
                     // name: data.name,
                     // surname: data.surname,
                     // phone: data.phone,
                     // contactphoto: data.selectedImage,
                     index: index
                  })
               }>
                  <Icon1 name="edit" size={35} color="black" style={styles.delete} />
               </TouchableOpacity>
            </View>
         </View>

         <View style={styles.spaccer2} />


         <Text style={[styles.contactname,]}>{data.name} {data.surname}</Text>

         <View style={styles.spaccer4} />

         <View style={styles.contactdetailcontainer}>
            <Text style={styles.detailtext}>{data.phone}</Text>

            <View style={styles.detailicon}>
               <TouchableOpacity>
                  <View style={{ height: 50, width: 50, backgroundColor: '#08AE2D', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                     <Icon1 name="call" size={20} color="white" />
                  </View>

               </TouchableOpacity>
               <TouchableOpacity>
                  <View style={{ height: 50, width: 50, backgroundColor: '#E9AD13', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                     <Icon1 name="message" size={20} color="white" />
                  </View>
               </TouchableOpacity>
            </View>
         </View>


         <View style={styles.spaccer3} />

         <View style={{ flex: 1, }}>
            <View>
               <Text style={styles.callhistoryheading}>Call history</Text>
            </View>

            <View style={styles.spaccer2} />
            <View style={styles.spaccer2} />


            <Callhistory date='Apr 27, 14:16' datestyle={styles.callhistorytext} number='+998901234567' iconname='arrow-top-right' iconcolor='black' status='Didn`t connect' />


            <Callhistory date='Apr 20, 10:35' datestyle={styles.callhistorytext2} number='+998901234567' iconname='arrow-bottom-right' iconcolor='red' status='Rang 5 times' />

            <Callhistory date='Mar 05, 19:23' datestyle={styles.callhistorytext} number='+998901234567' iconname='arrow-top-right' iconcolor='black' status='Outgoing 15 min 12 sec' />
            <Callhistory date='Feb 12, 08:03' datestyle={styles.callhistorytext} number='+998901234567' iconname='arrow-top-right' iconcolor='black' status='Incoming 30 sec' />




         </View>
      </View>

   )
}


export default Contactdetailscreen


const styles = StyleSheet.create({

   container: {
      backgroundColor: '#fafafb',
      // backgroundColor: 'black',
      flex: 1,
   },
   Headercontainer: {
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   headertextcontainer: {
      // position: 'absolute',
      // width: '50%',
      // alignItems: 'center',
      marginTop: -5,
      marginHorizontal: 10,
      backgroundColor: 'white'
   },
   Headertextstyle: {
      color: 'black',
      fontSize: 22,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      // backgroundColor: 'blue'
   },
   imagecontainer: {
      marginTop: 15,
      padding: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      // backgroundColor: 'blue',
      width: '35%',
   },
   search: {
      marginLeft: 50,
      height: 22,
      width: 22,
   },
   imagesubcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
   },
   spaccer: {
      flex: 0.15,
   },
   spaccer2: {
      flex: 0.05,
   },
   spaccer3: {
      flex: 0.17,
   },
   spaccer4: {
      flex: 0.06,
   },
   aligner: {
      justifyContent: 'center',
      // backgroundColor: 'blue',
   },
   contactpiccontainer: {
      // backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      flex: 0.5,
   },
   Contactpic: {
      // backgroundColor: 'pink',
      height: 160,
      width: 160,
      marginRight: 0,
   },
   Iconcontainer: {
      position: 'absolute',
      bottom: 0,
      right: 25,
      // marginHorizontal: 20,
      alignSelf: 'flex-end',
      // marginTop: -10,
      // backgroundColor: 'red',
      flexDirection: 'row',
      //   justifyContent: 'flex-end',
      width: '20%',
   },
   delete: {
      marginHorizontal: 5,
      // width: 30,
      // height: 30,
   },
   contactname: {
      fontSize: 22,
      color: 'black',
      fontWeight: '700',
      alignSelf: 'center',
      marginVertical: 20,
   },
   callicon: {
      width: 50,
      height: 50,
   },
   contactdetailcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
   },
   detailtext: {
      fontWeight: '700',
      color: 'black',
      alignSelf: 'center',
   },
   detailicon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'red',
      width: '30%',
      height: '70%',
   },
   callhistoryheading: {
      color: 'grey',
      fontSize: 12,
      marginHorizontal: 15,
   },
   callhistorylistelement: {
      marginVertical: 10,
      flexDirection: 'row',
      marginHorizontal: 20,
      justifyContent: 'space-between',
      // backgroundColor: 'black'
   },
   callhistorytext: {
      color: 'black',
      fontSize: 16,
   },
   callhistorytext2: {
      color: 'red',
      fontSize: 16,
   },
   calledtonumcontainer: {
      flexDirection: 'row'
   },
   calledtonumtext: {
      color: 'grey',
      fontSize: 12,
   },


})