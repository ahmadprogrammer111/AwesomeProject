import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome6'
import Icon3 from 'react-native-vector-icons/AntDesign'

const Header = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backContainer}>
                <Icon name='caret-back-sharp' size={22} color='black' style={styles.backIcon} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '23%' , marginTop: 7.5}}>
                <TouchableOpacity>
                    <Icon3 name='instagram' size={30} color='black' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='ellipsis-horizontal-circle-outline' size={31} color='black' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: '6%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        alignItems: 'center',
        marginVertical: 10,
    },
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    backIcon: {
        // backgroundColor: 'orange',
        height: '65%',
        marginTop: 3
    },
    backText: {
        color: 'black',
        // backgroundColor: 'purple',
        fontSize: 22,
        fontFamily: 'Raleway-Bold',
        textAlignVertical: 'top'
    }

})