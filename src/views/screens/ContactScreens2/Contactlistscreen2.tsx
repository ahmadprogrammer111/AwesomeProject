import { Image, StyleSheet, TouchableOpacity, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';



import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import Icon4 from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native-gesture-handler'




const Contactlistscreen = () => {
   const [isLoading, setIsLoading] = useState(true)
   const [contacts, setContacts] = useState([])
   const navigation = useNavigation<any>();

   useEffect(() => {
      const subscriber = firestore()
         .collection('Users')
         .doc('usersArray')
         .onSnapshot(documentSnapshot => {
            console.log('User data: ', documentSnapshot.data());
            const data: any = documentSnapshot.data()
            console.log(data.user)
            setContacts(data.user)
            setIsLoading(false)
         });
      return () => subscriber();
   }, [])

   const exceedmaxlength = (text: string, maxlength: number) => {
      return text?.length > maxlength ? text.slice(0, maxlength) + '...' : text
   }

   const Showcontacts = ({ item, index }: any) => {

      return (

         <View style={styles.flatlistcontainer}>
            <TouchableOpacity
               onPress={() => navigation.navigate('Contactdetailscreen', { data: item, index, })}
            >

               <View style={styles.flatlistmain}>

                  <View style={styles.flatlist}>

                     {item?.selectedImage ?
                        item?.selectedImage &&
                        <Image style={{ height: 48, width: 48, borderRadius: 25, marginLeft: 4 }} source={{ uri: item?.selectedImage }} /> :
                        <View >
                           <Icon1 name="account-circle" size={56} color="grey"
                              style={{
                                 height: 52, width: 52,
                                 // backgroundColor: 'red', 
                              }}
                           />
                        </View>
                     }

                     <View style={{
                        // backgroundColor: 'black', 
                        marginLeft: 10,
                        marginTop: item?.selectedImage ? 2 : 7
                     }}>
                        <Text style={styles.name}>
                           {exceedmaxlength(item?.name, 12)}{' '}{exceedmaxlength(item?.surname, 12)}
                        </Text>
                        <Text style={styles.phone}>
                           {exceedmaxlength(item?.phone, 12)}
                        </Text>
                     </View>
                  </View>

                  <View style={styles.flatlist}>
                     <Icon1 name="call" size={30} color="#4eab45" style={styles.phoneicon} />

                     {/* Emergency button */}
                     {/* <TouchableOpacity onPress={() => deleteContact(index)}>
                        <Icon2 name="delete" size={30} color="black" />
                     </TouchableOpacity> */}
                  </View>
               </View>

            </TouchableOpacity>
         </View>
      )
   }




   const Emptylist_shower = () => {
      return contacts?.length !== 0 ? <FlatList
         data={contacts}
         renderItem={Showcontacts}
      /> :
         <View style={styles.emptylistshower}>
            <Image style={styles.emptybox} source={require('../../../assets/images/Group_2.png')} />
            <Text style={styles.emptytext}>You have no contacts yet</Text>
         </View>
   }

   // const [showsearch, setshowsearch] = useState(false)
   // const [text, settext] = useState('')


   return (

      <View style={styles.container}>
         <View style={styles.Headercontainer}>
            <View style={styles.imagecontainer}>

               <View style={styles.headertextcontainer}>
                  <Text style={styles.Headertextstyle}>Contacts</Text>
               </View>
            </View>

            <View style={styles.imagecontainer}>
               <TouchableOpacity
               // onPress={()=> setshowsearch(true)}
               >
                  <Icon name='search' size={25} color='black' style={styles.search} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Icon3 name='more-vertical' size={25} color='black' />
               </TouchableOpacity>
            </View>
         </View>

         {isLoading ? <View><ActivityIndicator size='large' color='blue' /></View> :
            <>
               <Emptylist_shower />

               <TouchableOpacity style={styles.addcontactbutton} onPress={() => navigation.navigate('Contactaddscreen')}>
                  <Icon4 name='plus' size={22} color='white' />
               </TouchableOpacity>
            </>
         }
      </View>




   )
}

export default Contactlistscreen

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
      fontFamily: '',
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
   flatlistmain: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   flatlist: {
      flexDirection: 'row',
      marginVertical: 12,
      paddingVertical: 0,
      paddingHorizontal: 0,
   },
   flatlistcontainer: {
      // alignItems: 'center',
      justifyContent: 'center',
      marginStart: 20,
      marginEnd: 20,
   },
   name: {
      color: '#000000',
      fontSize: 16,
      fontFamily: 'Roboto-SemiBold',
      fontWeight: '700'
   },
   phone: {
      color: '#8B8B8B',
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: '500'

   },
   image: {
      height: 60,
      width: 60,
   },
   phoneicon: {
      // height: 31,
      // width: 31,
      marginRight: 15,
   },
   delete: {
      width: 30,
      height: 30,
   },
   emptybox: {
      height: 135,
      width: 140,
   },
   emptytext: {
      padding: 20,
      color: 'grey',
      fontWeight: '700',
      fontFamily: 'Roboto'
   },
   emptylistshower: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
   },
   addcontactbutton: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      bottom: 50,
      right: 20,
      height: 70,
      width: 70,
      borderRadius: 35,
      backgroundColor: '#00B2FF',
      position: 'absolute',
      // shadowRadius: 10,
      // shadowColor: 'black'
   },
   searchtext: {
      backgroundColor: 'black'
   },
})






