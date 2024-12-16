import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'



const Callhistory = (props: any) => {
   const { date, number, iconname, iconcolor, status, datestyle } = props
   return (
      <View>
         <TouchableOpacity>
            <View style={styles.callhistorylistelement}>
               <View>
                  <Text style={datestyle}
                  >{date}</Text>
                  <View style={styles.calledtonumcontainer}>
                     <Text style={styles.calledtonumtext}>{number} </Text>
                     <Icon2
                        name={iconname}
                        size={12}
                        color={iconcolor}
                        style={{ alignSelf: 'center' }}
                     />

                  </View>
               </View>
               <View style={styles.aligner}>
                  <Text style={styles.calledtonumtext}>{status}</Text>
               </View>
            </View>
         </TouchableOpacity>
      </View>
   )
}

export default Callhistory

const styles = StyleSheet.create({
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
   aligner: {
      justifyContent: 'center',
      // backgroundColor: 'blue',
   },

})