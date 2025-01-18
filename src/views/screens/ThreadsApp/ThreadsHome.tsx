import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { addEmail, addUser } from '../../../redux/Slices/userSlice'
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import { LogLevel, OneSignal } from 'react-native-onesignal';







const ThreadsHome = ({ route }: any) => {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    const [isRefreshing, setIsRefreshing] = useState(false)

    const Email = useSelector((state: any) => state.user.tempMail)
    const user = useSelector((state: any) => state.user.user)


    const [threads, setThreads] = useState<any>()

    useFocusEffect(useCallback(
        () => {
            try {
                const subscriber = firestore()
                    .collection('Threads')
                    .orderBy('createdAt', 'desc')
                    .onSnapshot(documentSnapshot => {
                        console.log('Threads at Home: ', documentSnapshot.docs)
                        const threadsArray = documentSnapshot.docs.map(item => item.data())
                        if (threadsArray) {
                            console.log('my array at home', threadsArray)
                            setThreads(threadsArray)
                        }
                    })

                return () => subscriber();
            } catch (error) {
                console.log('error fetching threads...', error)
            }
        },
        [],
    ))

    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.initialize("479ae6a7-d38e-4116-88a4-0835ca09a6d4");
 
    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true);
 
    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', (event) => {
       console.log('OneSignal: notification clicked:', event);
    });




    const getDataFromFirebase = () => {
        try {
            if (Email) {
                const subscriber = firestore()
                    .collection('Users')
                    .where('email', '==', Email)
                    .onSnapshot(documentSnapshot => {
                        console.log('Threads  at profile: ', documentSnapshot.docs)
                        const threadsArray = documentSnapshot.docs.map(item => item.data())
                        if (threadsArray) {
                            console.log('userData is being Transferred to redux ', threadsArray)
                            dispatch(addUser(threadsArray[0]))
                        }
                    })
                return () => subscriber();
            } else {
                console.log('from Homescreen. There is no value in Email: ', Email)
            }

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    useFocusEffect(useCallback(
        () => {
            getDataFromFirebase()
        },
        [],
    ))


    const renderContacts = ({ item }: any) => {

        
        return (<View style={{}}>
            <TouchableOpacity onPress={() => navigation.navigate('ThreadsDetails', { user: item })}
                style={styles.main}>
                <Icon name='person-circle' size={50} color='grey' />
                <View style={styles.submain}>
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.text}>{item.thread}</Text>
                    </View>
                    <Icon2 name='more-horizontal' size={22} color='black' />
                </View>
            </TouchableOpacity>
            <View style={styles.icons}>
                <TouchableOpacity>

                    <Icon2 name='heart' size={22} color='black' />
                </TouchableOpacity>

                <TouchableOpacity >

                    <Icon3 name='comment-o' size={22} color='black' />
                </TouchableOpacity >
                <TouchableOpacity >

                    <Icon name='paper-plane-outline' size={22} color='black' />
                </TouchableOpacity>

            </View >
            <View style={styles.line} />
        </View >)
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '1%' }} />
            <Image style={{ width: 50, height: 50, alignSelf: 'center' }}
                source={require('../../../assets/images/Threads.png')} />
            <View style={{ height: '1%' }} />

            {isRefreshing ? <View></View> :
                <FlatList
                    data={threads}
                    renderItem={renderContacts}
                    refreshing={isRefreshing}
                    onRefresh={getDataFromFirebase}
                />
            }

        </View>
    )
}

export default ThreadsHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    userName: {
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        // marginTop: 6
        // width: '70%',
        // marginLeft: 5,
    },
    text: {
        // width: '100%',
        color: 'grey',
        fontSize: 16,
        fontFamily: 'Nunito-Medium',
    },
    main: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 5
    },
    submain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        width: '80%'
    },
    textContainer: {
        marginLeft: 6,
        // backgroundColor: '20',
        width: '90%'
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#d7dbdd',
        marginVertical: 15
    },
    icons: {
        // backgroundColor: 'red',
        width: '50%',
        flexDirection: 'row',
        marginLeft: '19%',
        // alignSelf: 'center',
        // marginRight: 35,
        gap: 20,
    }

})