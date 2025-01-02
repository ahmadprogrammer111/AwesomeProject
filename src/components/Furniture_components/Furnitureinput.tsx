import { StyleSheet, Text, View, TextInput, } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Furnitureinput = (Props: any) => {
    const { name, placeholder, text, onChangeText } = Props
    // const [Name, setName] = useState('')

    return (
        <View style={styles.maininputcontainer}>

            <Text style={styles.header}>{name}</Text>
            <View style={styles.textinputcontainer}>
                <TextInput value={text} onChangeText={onChangeText}
                    style={styles.textinput} placeholder={placeholder} placeholderTextColor='#838383' />
            </View>

        </View>
    )
}

export default Furnitureinput

const styles = StyleSheet.create({
    maininputcontainer: {
        marginHorizontal: 25,
    },
    textinputcontainer: {
        // backgroundColor: 'blue',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#D9D9D9',
    },
    textinput: {
        color: 'black',
        fontFamily: 'Poppins-Regular'
    },
    header: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 16,
    },

})