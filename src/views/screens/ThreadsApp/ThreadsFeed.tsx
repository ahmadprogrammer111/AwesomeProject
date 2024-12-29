import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'



const ThreadsFeed = () => {
    const [isSelected, setisSelected] = useState<number>(0)

    const handlePress = (buttonId: number) => {
        return setisSelected(buttonId)
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1 }} />
            <Text style={styles.header}>Activity</Text>
            <View style={{ flex: 0.019 }} />


            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handlePress(0)}
                    style={[styles.button, { backgroundColor: isSelected == 0 ? 'black' : 'white' }]}>
                    <Text style={[styles.buttonText, { color: isSelected !== 0 ? 'black' : 'white' }]}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress(1)}
                    style={[styles.button, { backgroundColor: isSelected == 1 ? 'black' : 'white' }]}>
                    <Text style={[styles.buttonText, { color: isSelected !== 1 ? 'black' : 'white' }]}>Replies</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.04 }} />
            
            <View style={styles.mainContainer}>
                <Icon name='person-circle' size={60} color='grey' />
                <View style={styles.textContainer}>
                    <Text style={styles.userName}>Username</Text>
                    <Text style={styles.following}>Follwoing you</Text>
                </View>
                <TouchableOpacity onPress={() => handlePress(2)}
                    style={[styles.button, { backgroundColor: isSelected == 2 ? 'black' : 'white' }]}>
                    <Text style={[styles.buttonText, { color: isSelected !== 2 ? 'black' : 'white' }]}>Replies</Text>
                </TouchableOpacity>
            </View>
        </View>




    )
}

export default ThreadsFeed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginHorizontal: '8%',
        fontFamily: 'Raleway-Bold',
        fontSize: 34,
        color: 'black'
    },
    buttonContainer: {
        gap: 10,
        // backgroundColor: 'red',
        marginHorizontal: '8%',
        flexDirection: 'row',
        height: '6.5%',
        justifyContent: 'flex-start',
    },
    button: {
        // backgroundColor: 'black',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '38%',
        borderWidth: 1.5,
    },
    buttonText: {
        fontFamily: 'Nunito-Bold',
        // color: 'white',
        fontSize: 16
    },
    mainContainer: {
        marginHorizontal: 25,
        // backgroundColor: 'red',
        flexDirection: 'row',
        gap: 5

        // justifyContent: 'space-between'
    },
    userName: {
        marginTop: 3,
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
    },
    textContainer: {
        flexWrap: 'nowrap',
        width: 'auto',
        // backgroundColor: 'red'
    },
    following: {
        color: 'grey',
        fontFamily: 'Nunito-Medium',
        fontSize: 16,
        // width: '70%',
    }
})