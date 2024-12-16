import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Furniturelogo = (Props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image style={ styles.logo} source={require('../../assets/images/furniture.png')} />
                <Text style={styles.logotext}>Furniture</Text>
            </View>
        </View>
    )
}

export default Furniturelogo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo:{
        width:74,
        height: 87.2,
    },
    logotext:{
        fontSize: 34,
        padding: 10,
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        marginTop: 40,
    },
})
