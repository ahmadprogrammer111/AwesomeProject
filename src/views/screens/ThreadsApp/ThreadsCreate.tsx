import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const ThreadsCreate = () => {
    const [length, setLength] = useState(30)

    const Line = () => {

        return (
            <View style={[styles.line, { height: length, }]} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Text style={styles.sideHeaders}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.header}>New Thread</Text>
                <TouchableOpacity>
                    <Text style={styles.sideHeaders}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 20 }} />

            <View style={styles.mainContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Icon name='person-circle' size={60} color='grey' />
                    <Line />
                </View>
                <View style={styles.threadTextContainer}>
                    <Text style={styles.userName}>Username</Text>
                    <TextInput

                        onChangeText={(text) => {
                            Line()
                            text.length > 30 && setLength(text.length / 1.6)
                        }}
                        multiline={true}
                        placeholder='Start a thread'
                        placeholderTextColor='grey'
                        style={styles.text} />
                </View>
            </View>
        </View>
    )
}

export default ThreadsCreate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        // backgroundColor:'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    header: {
        color: 'black',
        fontFamily: 'Raleway-Bold',
        fontSize: 22,
    },
    sideHeaders: {
        // backgroundColor: 'purple',
        color: 'grey',
        fontFamily: 'Nunito-Bold',
        fontSize: 18
    },
    mainContainer: {
        marginHorizontal: 20,
        // backgroundColor: 'red',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    threadTextContainer: {
        // backgroundColor: 'red',
        marginTop: 10,
        width: '80%',

        // height: '100%',
    },
    line: {
        width: 1.5,
        backgroundColor: '#bfc9ca',
        // position: 'absolute',
        // top: '30%'
    },
    text: {
        // height: 300,
        // backgroundColor: 'orange',
        width: '100%',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Nunito-Regular',
        // paddingVertical: 10
    },
    userName: { 
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        width: '70%',
        marginLeft: 5,
    },

})