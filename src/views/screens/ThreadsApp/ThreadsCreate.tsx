import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore'
import { useFocusEffect, useNavigation } from '@react-navigation/native'



const ThreadsCreate = ({ route }: any) => {

    const { id, propThread, } = route.params || {}


    const user = useSelector((state: any) => state.user.user)
    const Email = useSelector((state: any) => state.user.tempMail)


    const navigation = useNavigation<any>()
    const [threadEdit, setThreadEdit] = useState('')
    const [thread, setThread] = useState('')





    useFocusEffect(useCallback(
        () => {
            // console.log('empting threads')

            if (propThread !== undefined || '') {
                setThreadEdit(propThread)
            } else {
                setThreadEdit('')
            }
        }, [propThread],))

    if (route.params) {
        console.log('Parameters from profile screen to E D I T the P O S T', route.params, id, propThread)
    } else {
        console.log('No route.P A R A M S  from profile')
    }


    if (Email) {
        console.log('Email from redux store', Email)
    } else {
        console.log('No Email  from redux store')
    }

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
                        name: user?.name,
                        bio: user?.bio,
                        createdAt: firestore.FieldValue.serverTimestamp()
                    })

            setThread('')
            console.log(' Created thread')
            navigation.navigate('ThreadsHome')
        } catch (error) {
            console.log('error Creating thread', error)
        }
    }

    const [length, setLength] = useState(30)
    const Line = () => {
        return (
            <View style={[styles.line, { height: length, }]} />
        )
    }


    const updatePost = async () => {

        try {
            await firestore()
                .collection('Threads')
                .doc(id)
                .update({
                    thread: threadEdit
                })
            console.log("Post E D I T E D successfuly")
            setThreadEdit('')
            navigation.navigate('ThreadsProfile1')
            // getDataFromFirebase()
        } catch (error) {
            console.log("Error", error)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => {
                    // setThreadEdit('')
                    // setThread('')
                    navigation.goBack();

                }}>
                    <Text style={styles.sideHeaders}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.header}>{threadEdit !== undefined ? 'Edit Thread' : 'New Thread'}</Text>
                <TouchableOpacity onPress={() => {
                    threadEdit !== undefined ? updatePost() : createThread();
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
                    <Text style={styles.name}>{user.name}</Text>
                    <TextInput
                        value={threadEdit !== undefined ? threadEdit : thread}
                        onChangeText={(text) => {

                            threadEdit !== undefined ? setThreadEdit(text) : setThread(text);
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
    name: {
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        width: '70%',
        marginLeft: 5,
    },
})
