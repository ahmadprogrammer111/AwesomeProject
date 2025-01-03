import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ThreadsCreateIcon = (Props: any) => {
    const navigation = useNavigation<any>()
    const [isPressed, setIsPressed] = useState(false)
    const { color } = Props
    return (


        <View style={[styles.container, { borderColor: !isPressed ? '#eaeded' : 'black' }]}>

            <TouchableOpacity onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)}
                onPress={() => navigation.navigate('ThreadsCreate')}
            >
                <Icon name='plus' size={30} color={color} style={styles.icon} />
            </TouchableOpacity>
        </View>

    )
}

export default ThreadsCreateIcon

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 20,
        backgroundColor: 'white',
        height: 60,
        width: 60,
        borderRadius: 40,
        // borderColor: '#eaeded',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        // backgroundColor: 'red',
        alignSelf: 'center'
    }
})