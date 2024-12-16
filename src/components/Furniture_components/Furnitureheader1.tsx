import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'

const Furnitureheader1 = (Props: any) => {
   const navigation = useNavigation()
   const { name, width } = Props
   return (
      <View style={[styles.container, { width: width }]}>

         <TouchableOpacity onPress={()=> navigation.goBack()}>
            <View style={styles.backContainer}>
               <Icon name='arrow-left' size={20} color='black' style={styles.icon} />
            </View>
         </TouchableOpacity>
         <View>
            <Text style={styles.heading}>{name}</Text>
         </View>



      </View>
   )
}

export default Furnitureheader1

const styles = StyleSheet.create({
   container: {
      // width: '75%',
      // backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 25,
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
   heading: {
      fontSize: 20,
      fontFamily: 'Poppins-Regular',
      color: 'black'
   },
})