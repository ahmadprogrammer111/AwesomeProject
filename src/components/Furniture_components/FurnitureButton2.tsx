import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Icon
const FurnitureButton2 = (Props: any) => {
    const { Iconname, Iconcolor, name, bgcolor, screen, textcolor } = Props
    return (
        <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'white', }]} onPress={screen}>
                
                <Icon name={Iconname} size={20} color='#3498db' />
                <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', marginLeft: 10, }}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FurnitureButton2

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',

        margin: 10,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.8,
        borderColor: '#EDEDED'
    },
})