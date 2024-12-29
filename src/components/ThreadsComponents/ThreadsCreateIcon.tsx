import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ThreadsCreateIcon = (Props: any) => {
    const navigation = useNavigation<any>()
    const { color } = Props
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ThreadsCreate')}>
                <Icon name='plus' size={40} color={color} style={styles.icon} />
            </TouchableOpacity>
        </View>

    )
}

export default ThreadsCreateIcon

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 30,
        backgroundColor: 'white',
        height: 70,
        width: 70,
        borderRadius: 40,
        borderColor: '#eaeded',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        // backgroundColor: 'red',
        alignSelf: 'center'
    }
})