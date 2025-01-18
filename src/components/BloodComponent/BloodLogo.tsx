import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { Image } from 'react-native-elements'

const BloodLogo = () => {


    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/images/bloodDrop.png')}
                resizeMode='contain'
                containerStyle={styles.bloodDrop}
                PlaceholderContent={<ActivityIndicator />}
            />

            <Text style={styles.title}>Blood Bank</Text>

            <Text style={styles.slogan}>Global</Text>
          

        </View>
    )
}

export default BloodLogo

const styles = StyleSheet.create({
    container: {
        height: '11%',
        // backgroundColor: 'red',
        width: '50%',
        alignSelf: 'center',
    },
    bloodDrop: {
        // backgroundColor: 'red',
        height: '40%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        color: '#fff',
        alignSelf: 'center',
        fontFamily: 'Lexend-Regular',
        fontSize: 24,
        // fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.40', // Shadow color
        textShadowOffset: { width: 5.5, height: 3 }, // Shadow offset (x, y)
        textShadowRadius: 10
    },
    slogan: {
        textShadowColor: 'rgba(0, 0, 0, 0.40', // Shadow color
        textShadowOffset: { width: 5.5, height: 3 }, // Shadow offset (x, y)
        textShadowRadius: 10,
        fontFamily: 'Lexend-Regular',
        alignSelf: 'center',
        letterSpacing: 17,
        fontSize: 14,
        color: '#fff'

    },
})