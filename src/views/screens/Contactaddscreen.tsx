
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Contactlistscreen from './Contactlistscreen'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../components/CustomInput'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

import { launchImageLibrary } from 'react-native-image-picker'


const Contactaddscreen = () => {
   const [selectedImage, setSelectedImage] = useState<any>(null)

   const openImagePicker = () => {
      const options: any = {
         mediaType: 'photo',
         includeBase64: false,
         maxHeight: 2000,
         maxWidth: 2000,
      };




      launchImageLibrary(options, (response: any) => {
         if (response.didCancel) {
            console.log('User cancelled image picker');
         } else if (response.error) {
            console.log('Image picker error: ', response.error);
         } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
         }
      });
   };


   const navigation = useNavigation()
   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')
   const [phone, setPhone] = useState('')
   const [contacts, setContacts] = useState([])


   const savecontact = () => {
      if (name !== '' && phone !== '') {
         const contactArray = [...contacts, { name, surname, phone, selectedImage }]
         setContacts(contactArray as any)
         storeObjectValue(contactArray)
         setName('')
         setSurname('')
         setPhone('')
         setSelectedImage(null)
         navigation.navigate('Contactlistscreen' as never)

      }
      else {
         Alert.alert('Please fill required data')
      }
   }


   useEffect(() => {
      getStoredObjectValue()
   }, [])

   const storeObjectValue = async (Contactlist: any) => {
      try {
         const jsonvalue = JSON.stringify(Contactlist)
         await AsyncStorage.setItem('Contacts', jsonvalue)
         console.log('your value stored')
      } catch (error) {
         console.log('Error', error)
      }
   }

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


   return (
      <View style={styles.container}>

         <View style={styles.Headercontainer}>

            <View style={styles.headertextcontainer}>
               <Text style={styles.Headertextstyle}>Add</Text>
            </View>

            <View style={styles.imagecontainer}>

               <TouchableOpacity
                  onPress={() => navigation.goBack()}
               >
                  <Icon name='arrow-back' size={25} color='black' />
               </TouchableOpacity>

               <TouchableOpacity onPress={savecontact}>
                  <Icon2 name='check' size={25} color='black' />
               </TouchableOpacity>
            </View>
         </View>

         <View style={styles.spaccer} />
         <TouchableOpacity onPress={openImagePicker} style={{marginRight: 20,}}>
            <Icon name='image' color='black' size={25} style={{ alignSelf: 'flex-end' }} />
         </TouchableOpacity>
         {
            selectedImage &&
            <Image style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center' }} source={{ uri: selectedImage }} />
         }
         <View>
            <CustomInput value={name} setValue={setName} placeholder="Enter Name" keyboardType='default' header='Name' />
         </View>
         <View style={styles.spaccer} />
         <View>
            <CustomInput value={surname} setValue={setSurname} placeholder="Enter Surname (Optional)" keyboardType='default' header='Surname' />
         </View>
         <View style={styles.spaccer} />
         <View>
            <CustomInput value={phone} setValue={setPhone} placeholder="+998   _ _    _ _ _ _    _ _ _" keyboardType='phone-pad' header='Phone Number' />
         </View>






      </View>
   )
}


export default Contactaddscreen

const styles = StyleSheet.create({

   container: {
      backgroundColor: '#fafafb',
      flex: 1,
   },
   Headercontainer: {
      backgroundColor: 'white',
   },
   headertextcontainer: {
      position: 'absolute',
      width: '45%',
      alignItems: 'center',
      // alignSelf: 'center',
      marginTop: 20,
      // backgroundColor: 'red',
      marginHorizontal: 15,
   },
   Headertextstyle: {
      color: 'black',
      fontSize: 22,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
   },
   imagecontainer: {
      marginTop: 15,
      padding: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
   },


   mainbuttoncontainer: {
      backgroundColor: 'red'
   },
   namecontainer: {
      backgroundColor: '#f2f3f4',
      borderWidth: 1.8,
      marginHorizontal: 25,
      justifyContent: 'center',
      padding: 5.5,
   },
   name: {
      color: 'black',
      fontSize: 16,
   },
   spaccer: {
      flex: 0.06,
      // backgroundColor: 'blue',
      backgroundColor: '#fafafb',
   },
   buttoncontainer: {

      alignItems: 'center',
      marginVertical: 10,
   },
   button: {
      borderWidth: 1,
      borderColor: 'grey',
      // borderColor: '#2c3e50',
      backgroundColor: '#f2f3f4',
      borderRadius: 35,
      padding: 7,
      paddingHorizontal: 33,
   },
   buttontext: {
      fontWeight: '800',
      fontSize: 17,
      color: 'black',
   },
   flatlistmain: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   flatlist: {
      flexDirection: 'row',
      marginVertical: 6,
      paddingVertical: 8,
      paddingHorizontal: 0,
   },
   flatlistcontainer: {
      marginStart: 20,
      marginEnd: 20,
   }

})







































































































































