import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { addEmail, addUser } from '../../../redux/Slices/userSlice'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ThreadsHome = ({ route }: any) => {

    
    const email = useSelector((state: any) => state.user.tempMail)


    if (email) {
        console.log('Email getting from redux, ', email)
    }else{
        console.log('No Email from redux')
    }





    return (
        <View style={styles.container}>
            <View style={{ flex: 0.02 }} />
            <Image style={{ width: 50, height: 50, alignSelf: 'center' }}
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