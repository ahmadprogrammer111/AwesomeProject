import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { addEmail, addUser } from '../../../redux/Slices/userSlice'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/FontAwesome'






const ThreadsHome = ({ route }: any) => {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()

    const Email = useSelector((state: any) => state.user.tempMail)
    const username = useSelector((state: any) => state.user.user.username)


    const [threads, setThreads] = useState<any>()




    useEffect(() => {
        // const getStoredEmail = async () => {
        try {
            if (Email) {
                console.log('Email getting from redux: ', Email)
            } else {
                console.log('No Email from redux')
            }
            console.log('Email!! from redux store', Email)

            if (Email) {
                const subscriber = firestore()
                    .collection('Users')
                    .where('email', '==', Email)
                    .onSnapshot(documentSnapshot => {
                        console.log('User data: ', documentSnapshot.docs[0].data())
                        const userData = documentSnapshot.docs[0].data()
                        dispatch(addUser(userData))
                    })
                return () => subscriber();
            } else {
                console.log('from Homescreen. There is no value in Email: ', Email)
            }

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
        // }
        // getStoredEmail()

    }, [])


    useEffect(() => {
        try {
            const subscriber = firestore()
                .collection('Threads')
                .orderBy('createdAt', 'desc')
                .onSnapshot(documentSnapshot => {
                    console.log('Threads: ', documentSnapshot.docs)
                    const threadsArray = documentSnapshot.docs.map(item => item.data())
                    if (threadsArray) {
                        console.log('my array', threadsArray)
                        setThreads(threadsArray)
                    }
                    // const threadsData = [...item.data().thread, item.data().thread]
                    // console.log(threadsData)
                })

            return () => subscriber();
        } catch (error) {
            console.log('error fetching threads...', error)
        }
    }, [])

    const renderContacts = ({ item }: any) => {

        // console.log(item)
        return (<View style={{}}>
            <TouchableOpacity onPress={() => navigation.navigate('ThreadsDetails', { user: item })}
                style={styles.main}>
                <Icon name='person-circle' size={50} color='grey' />
                <View style={styles.submain}>
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>{item.username}</Text>
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
            <View style={{ flex: 0.02 }} />
            <Image style={{ width: 50, height: 50, alignSelf: 'center' }}
                source={require('../../../assets/images/Threads.png')} />
            <FlatList
                data={threads}
                renderItem={renderContacts}
            />


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