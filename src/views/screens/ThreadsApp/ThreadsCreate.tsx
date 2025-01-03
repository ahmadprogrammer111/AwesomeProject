import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'





const ThreadsCreate = () => {
    const navigation = useNavigation<any>()
    const user = useSelector((state: any) => state.user.user)
    const Email = useSelector((state: any) => state.user.tempMail)


    if (Email) {
        console.log('Email from redux store', Email)
    } else {
        console.log('No Email  from redux store')
    }
    const [thread, setThread] = useState('')

    console.log('My thread:::', thread)


    const createThread = async () => {
        try {
            await
                firestore()
                    .collection('Threads')
                    // .doc(Email)
                    .add({
                        thread: thread,
                        email: Email,
                        username: user.username,
                        bio: user.bio,
                        createdAt: firestore.FieldValue.serverTimestamp()
                    })

            setThread('')
            console.log(' Created thread')
            navigation.navigate('ThreadsHome')
        } catch (error) {
            console.log('error Creating thread', error)
        }
    }
    // try {
    //     await
    //         firestore()
    //             .collection('allThreads')
    //             .doc(Email)
    //             .set({
    //                 post: firestore.FieldValue.arrayUnion({
    //                     thread,
    //                 }),
    //                 // email: Email,
    //                 // username: user.username,
    //                 // bio: user.bio,
    //                 createdAt: firestore.FieldValue.serverTimestamp()
    //             })

    //     setThread('')
    //     console.log(' Created thread')
    //     navigation.navigate('ThreadsHome')
    // } catch (error) {
    //     console.log('error Creating thread', error)
    // }

    // }




    const [length, setLength] = useState(30)
    const Line = () => {
        return (
            <View style={[styles.line, { height: length, }]} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.sideHeaders}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.header}>New Thread</Text>
                <TouchableOpacity onPress={() => {
                    createThread();

                }}>
                    <Text style={styles.sideHeaders}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 20 }} />

            <View style={styles.mainContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Icon name='person-circle' size={60} color='grey' />
                    <Line />
                </View>
                <View style={styles.threadTextContainer}>
                    <Text style={styles.userName}>{user.username}</Text>
                    <TextInput
                        value={thread}
                        onChangeText={(text) => {
                            setThread(text)
                            Line()
                            text.length > 30 && setLength(text.length / 1.6)
                        }}
                        multiline={true}
                        placeholder='Start a thread'
                        placeholderTextColor='grey'
                        style={styles.text} />
                </View>
            </View>
        </View>
    )
}

export default ThreadsCreate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        // backgroundColor:'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    header: {
        color: 'black',
        fontFamily: 'Raleway-Bold',
        fontSize: 22,
    },
    sideHeaders: {
        // backgroundColor: 'purple',
        color: 'grey',
        fontFamily: 'Nunito-Bold',
        fontSize: 18
    },
    mainContainer: {
        marginHorizontal: 20,
        // backgroundColor: 'red',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    threadTextContainer: {
        // backgroundColor: 'red',
        marginTop: 10,
        width: '80%',

        // height: '100%',
    },
    line: {
        width: 1.5,
        backgroundColor: '#bfc9ca',
        // position: 'absolute',
        // top: '30%'
    },
    text: {
        // height: 300,
        // backgroundColor: 'orange',
        width: '100%',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Nunito-Regular',
        // paddingVertical: 10
    },
    userName: {
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        width: '70%',
        marginLeft: 5,
    },

})