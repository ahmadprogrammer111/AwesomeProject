import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'



const CustomInput = (props: any) => {
    const { value, setValue, placeholder, keyboardType, header } = props
    return (
        <View>
            <Text style={{ color: 'black', left: 25, fontSize: 16, }}>{header} </Text>
            <View style={styles.namecontainer}>
                <TextInput
                    style={styles.name}
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    placeholderTextColor={'grey'}
                    keyboardType={keyboardType} />

            </View>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    name: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'poppins_extrabolditalic'
    },
    namecontainer: {
        backgroundColor: '#f2f3f4',
        borderWidth: 1.3,
        borderColor: 'grey',
        borderRadius: 5,
        marginHorizontal: 25,
        marginVertical: 1,
        justifyContent: 'center',
        padding: 5.5,
    },
})