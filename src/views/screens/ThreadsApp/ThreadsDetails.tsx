import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/ThreadsComponents/Header'

const ThreadsDetails = () => {
    return (
        <View style={styles.container}>

            <Header />
            <View>
                <Text style={styles.threads}>
                    Threads
                </Text>
                <View style={styles.line} />
            </View>

        </View>
    )
}

export default ThreadsDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    threads: {
        fontFamily: 'Raleway-SemiBold',
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        width: '35%',
        alignSelf: 'center'
    }

})