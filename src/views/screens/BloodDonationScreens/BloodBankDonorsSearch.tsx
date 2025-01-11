import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'


const BloodBankSearch = () => {

    return (

        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>

                <View style={{ height: '8%' }} />

                <Text style={styles.title}>Blood Donor</Text>

                <View style={{ height: '6%' }} />

                <View style={styles.mainContainer}>

                    <View style={{ height: '6%' }} />

                    <View style={{ marginHorizontal: '10%', }}>
                        <Text style={styles.text}>Enter Blood Group</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={{ height: '6%' }} />

                    <View style={{ marginHorizontal: '10%', }}>
                        <Text style={styles.text}>Enter District Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={{ height: '6%' }} />

                    <View style={{ marginHorizontal: '10%', }}>
                        <Text style={styles.text}>Enter Tehsil Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={{ height: '6%' }} />

                    <View style={{ marginHorizontal: '10%', }}>
                        <Text style={styles.text}>Enter City Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={{ height: '6%' }} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Search Bloodbank</Text>
                    </TouchableOpacity>

                    <View style={{ height: '6%' }} />
                        
                </View>

            </LinearGradient>
        </SafeAreaView >
    )
}

export default BloodBankSearch

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    title: {
        color: '#680606',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    mainContainer: {
        alignSelf: 'center',
        height: '60%',
        width: '90%',
        backgroundColor: '#D9D9D9',
        elevation: 10,
        borderRadius: 15
    },
    line: {
        height: '0.3%',
        backgroundColor: '#000000',
        width: '80%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 19,
        color: 'black',
        // padding:0
    },
    input: {
        borderBottomWidth: 1.5,
        paddingHorizontal: 5,
        paddingVertical: 0
        // marginHorizontal: 
    },
    button: {
        backgroundColor: '#968D8D',
        opacity: 0.55,
        alignItems: 'center',
        borderRadius: 7,
        height: '8%',
        width: '75%',
        // alignSelf: 'center',
        marginHorizontal: '12%',
        elevation: 10
    },
    buttonText: {
        color: '#000000',
        fontSize: 25,

    }
})