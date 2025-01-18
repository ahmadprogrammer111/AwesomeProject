import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

import { colors, textColors } from './BloodColors'

const BloodInput = (props: any) => {
    // const [first, setfirst] = useState(second)
    const { placeHolder , value, setValue } = props

    return (

        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeHolder} placeholderTextColor='#9C9C9C'
            value={value} onChangeText={setValue}
            />
        </View>

    )
}

export default BloodInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary,
        // backgroundColor: 'red',

        height: '6.5%',
        alignSelf: 'center',
        borderRadius: 5,
        elevation: 20,
        // height: '15%',
        width: '80%',
        marginHorizontal: '10%',
        // width: '80%',
        // alignSelf: 'center',
        // alignItems: 'center',
        justifyContent: 'center'

    },
    placeHolderColor: {

    },
    input: {
        marginHorizontal: 4,
        // backgroundColor: 'red',
        // alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'Lexend-Regular',
        color: textColors.primary,

        // opacity: 50,


        // backgroundColor: colors.tertiary

    }
})