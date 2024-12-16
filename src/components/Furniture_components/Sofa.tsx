import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Sofa = (Props: any) => {
   // const {}= Props

   return (

      <View style={{
         flexDirection: 'row',
         height: '140%',
         justifyContent: 'space-between', width: '60%',
         //  backgroundColor: 'orange',
         marginHorizontal: 20,
         marginVertical: 5


      }}>
         <View style={{
            backgroundColor: '#AFAFAF',
            // height: '140%',
            width: '40%', borderRadius: 14
         }} />
         <View style={{ marginRight: 40, width: '40%', height: '60%'}}>
            <Text style={{ color: 'black', fontFamily: 'Poppins-Medium', fontSize: 14 }}>Sofa</Text>
            <Text style={{ color: '#737373', fontFamily: 'Poppins-Medium', fontSize: 14 }}>Color: Black</Text>
            <Text style={{ color: '#007DFC', fontFamily: 'Poppins-Medium', fontSize: 14 }}>$145</Text>
         </View>
      </View>

   )
}



export default Sofa

const styles = StyleSheet.create({
   container: {
      // height: '140%',

   }

})