import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const FurnitureButton = (Props: any) => {
    const {name, bgcolor, screen, textcolor, borderWidth } = Props
  return (
    <View>
      <TouchableOpacity style={[ styles.button ,{backgroundColor: bgcolor,borderWidth: borderWidth,}]}  onPress={screen}>
            <Text style={{color: textcolor, fontFamily: 'Poppins-Regular'}}>{name}</Text>
         </TouchableOpacity>
    </View> 
  )
}

export default FurnitureButton

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        
     },
})