import { ActivityIndicator, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'


const Account15 = () => {

    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()

    const signOut = () => {
        
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        setIsLoading(false)
    }

    return (
        <View style={styles.container}>
            {isLoading ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color='blue' size='large' />
                </View> :
                <>
                    <View style={{ height: 25 }} />

                    <Furnitureheader1 name='Account' width='55%' />

                    <View style={{ height: 25 }} />

                    <View style={styles.headercontainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.headerlogo} />
                            <View >
                                <Text style={{ color: 'black', fontFamily: 'Poppins-Medium', fontSize: 18, }}>Zeke Yeager</Text>
                                <Text style={{ color: '#838383', fontFamily: 'Poppins-Regular', marginTop: -10, }}>Yeager@gmail.com</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Icon name='edit-3' size={22} color='black' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 25 }} />

                    <View style={styles.itemslist}>
                        <TouchableOpacity style={styles.itemlistelement}>

                            <Icon2 name='account-cog' size={25} color='#838383' style={{ marginRight: 30, }} />
                            <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>Personal information</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemlistelement}>

                            <Icon name='globe' size={25} color='#838383' style={{ marginRight: 30, }} />
                            <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>Language</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemlistelement}>

                            <Icon name='lock' size={25} color='#838383' style={{ marginRight: 30, }} />
                            <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>Privacy Policy</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemlistelement}>

                            <Icon2 name='alpha-i-circle-outline' size={25} color='#838383' style={{ marginRight: 30, }} />
                            <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>Help center</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemlistelement}>
                            <Icon name='settings' size={25} color='#838383' style={{ marginRight: 30, }} />
                            <Text style={{ color: 'black', fontFamily: 'Poppins-Medium' }}>settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={
                            ()=>{
                                signOut()
                                setIsLoading(true)

                            }}
                            style={{ flexDirection: 'row', marginHorizontal: 30, marginTop: 10 }}>
                            <Icon name='log-out' size={25} color='red' style={{ marginRight: 30, }} />
                            <Text style={{ color: 'red', fontFamily: 'Poppins-Medium' }}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}

export default Account15

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerlogo: {
        backgroundColor: '#AFAFAF',
        // height: '22.0%',
        width: '20.5%',
        marginRight: 10,
        borderWidth: 30,
        borderRadius: 1000,
        borderColor: '#AFAFAF'
    },
    headercontainer: {
        flexDirection: 'row',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    itemslist: {
        borderTopWidth: 2,
        borderTopColor: '#F6F6F6'
    },
    itemlistelement: {
        // backgroundColor: 'red',
        height: '11%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F6F6F6',
        marginHorizontal: 30,
    }
})