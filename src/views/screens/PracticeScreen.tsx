
import { Button, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { arrayRemove } from '@react-native-firebase/firestore';


const PracticeScreen = () => {


  const [data, setData] = useState<any>()

  const users = [
    { id: 1, name: "Alice", age: 25, gender: "female" },
    { id: 2, name: "Bob", age: 30, gender: "male" },
    { id: 3, name: "Charlie", age: 35, gender: "male" },
    { id: 4, name: "Diana", age: 28, gender: "female" },
  ];


  return (
    <View style={styles.container}>
      <View style={{ height: '20%' }} />
      <Button title='refresh' color="#841584" />
      <View style={{ height: '6%' }} />
      {/* {data?.map((item: any, index: number) => {

        let uitem = ({ ...item, key: index })
        console.log(uitem)
        return ( */}
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ color: '#fff', fontFamily: 'Lexend-Bold', fontSize: 30 }}>
          { } has  body
        </Text>
      </View>
      {/* )
      })
      } */}
    </View>
  )



}


export default PracticeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },

})


































































































































