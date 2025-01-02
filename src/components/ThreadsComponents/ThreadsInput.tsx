import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useState } from 'react'

const ThreadsInput = (Props: any) => {
    const { name, placeholder, text, onChangeText } = Props
    // const [Name, setName] = useState('')

    return (


        <View style={styles.textinputcontainer}>
            <TextInput value={text} onChangeText={onChangeText}
                style={styles.textinput} placeholder={placeholder} placeholderTextColor='#a6acaf' />
            

        </View>

    )
}

export default ThreadsInput

const styles = StyleSheet.create({
    maininputcontainer: {
    },
    textinputcontainer: {
        padding: 8,
        marginHorizontal: 25,
        backgroundColor: '#f2f3f4',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#D9D9D9',
    },
    textinput: {
        color: 'black',
        fontFamily: 'Nunito-Medium',
        fontSize: 17
    },
    header: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 17,
    },

})