import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'



const ThreadsProfile = () => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.05 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
                <View>
                    <Text style={styles.originalName}>OrignalName</Text>
                    <Text style={styles.userName}>Original_Name</Text>
                </View>
                <Icon name='person-circle' size={60} color='grey' />
            </View>

            <View style={{ flex: 0.02 }} />

            <View style={styles.detailContainer}>
                <Text style={{ color: '#616a6b', fontFamily: 'Nunito-Regular' }}>Formula 1 Driver for Scudera Ferrari</Text>
                <Text style={{ color: '#cacfd2', fontFamily: 'Nunito-Regular' }}>3 Followers</Text>
            </View>

            <View style={{ flex: 0.05 }} />


            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'white' }]}>
                    <Text style={[styles.buttonText,]}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'white' }]}>
                    <Text style={[styles.buttonText,]}>Save Profile</Text>
                </TouchableOpacity>
            </View>


            <View style={{ alignItems: 'center', }}>
                <Text style={styles.threads}>
                    Threads
                </Text>
            </View>
        </View >
    )
}

export default ThreadsProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    originalName: {
        marginTop: 3,
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
    },
    userName: {
        color: '#616a6b',
        fontFamily: 'Nunito-Medium',
        fontSize: 14,
        // width: '70%',
    },
    detailContainer: {
        marginHorizontal: 20,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        flex: 0.09
    },
    buttonContainer: {
        // gap: 10,
        // backgroundColor: 'red',
        marginHorizontal: '5%',
        flexDirection: 'row',
        height: '6.5%',
        justifyContent: 'space-between',
    },
    button: {
        // backgroundColor: 'black',
        borderRadius: 15,
        borderColor: '#cacfd2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        height: '80%',
        borderWidth: 2.5,
    },
    buttonText: {
        fontFamily: 'Nunito-Bold',
        color: 'black',
        fontSize: 16
    },
    threads: {
        fontFamily: 'Raleway-SemiBold',
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10,
        padding: 10,
        paddingHorizontal: 30,
        borderBottomWidth: 1.5,
    },

})