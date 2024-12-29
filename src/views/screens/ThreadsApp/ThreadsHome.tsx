import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const ThreadsHome = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 0.02}}/>
            <Image style={{width: 50, height:50, alignSelf: 'center'}}
            source={require('../../../assets/images/Threads.png')} />
        </View>
    )
}

export default ThreadsHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})