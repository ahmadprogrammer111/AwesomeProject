import { Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firestore from '@react-native-firebase/firestore'
import { launchImageLibrary } from 'react-native-image-picker'
import { addEmail, addUser } from '../../../redux/Slices/userSlice'
import Icon3 from 'react-native-vector-icons/Ionicons'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/FontAwesome'





const ThreadsProfile = () => {

    const navigation = useNavigation<any>()
    const [modalVisible, setModalVisible] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user.user)
    const Email = useSelector((state: any) => state.user.tempMail)

    const [data, setData] = useState<any>()
    // const [email, setEmail] = useState('')
    const [myThreads, setMyThreads] = useState<any>()


    const getDataFromFirebase = async () => {
        try {
            // if (Email) {
            const data = await firestore()
                .collection('Threads')
                .where('email', '==', Email)
                .orderBy('createdAt', 'desc')
                .get()

            const threadsArray = data.docs.map(item => ({
                id: item.id,
                ...item.data()
            })
            )
            console.log("Array ===>", threadsArray)
            if (threadsArray) {
                console.log('my array', threadsArray)
                setMyThreads(threadsArray)
            }

            console.log('Data ======>', data)

            // .onSnapshot(documentSnapshot => {
            //     console.log('Threads  at Profile: ', documentSnapshot)
            //     const threadsArray = documentSnapshot.docs.map(item => item.data())
            //     if (threadsArray) {
            //         console.log('my array', threadsArray)
            //         setMyThreads(threadsArray)
            //     }
            // })
            // return () => subscriber();
            // } else {
            //     console.log('from Homescreen. There is no value in Email: ', Email)
            //     console.error('Error consoled', Error)
            // }

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }

    const deletePost = async (id: any) => {
        try {
            await firestore()
                .collection('Threads')
                .doc(id)
                .delete()
            console.log("Post deleted successfuly")
            getDataFromFirebase()
        } catch (error) {
            console.log("Error", error)
        }
    }


    useFocusEffect(useCallback(() => {
        console.log('Use Focus')
        getDataFromFirebase()
    },
        [Email],
    ))




    useEffect(() => {

        if (user) {
            console.log('user from redux', user)
            setData(user)
        }
    }, [])



    const openImagePicker = () => {
        const options: any = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setData({ ...data, selectedImage: imageUri })
                console.log(' Edited selectedImage:', data?.selectedImage)
            }
        });
    };

    const setName = (Value: string) => {
        setData({ ...data, name: Value });
        console.log(' Edited name:', data?.name)
    }
    const setBio = (Value: string) => {
        setData({ ...data, bio: Value });
        console.log(' Edited Bio:', data?.bio)
    }

    const updateProfile = async () => {
        firestore()
            .collection('Users')
            .doc(Email)
            .update({
                name: data?.name,
                bio: data?.bio,
            })
            .then(() => {
                dispatch(addUser(data))
                console.log(`User with Email:  ${Email}  updated on    F I R E S T O R E   and   R E D U X  !`);
            })

        const filteredData = await firestore()
            .collection('Threads')
            .where('email', '==', Email)
            .get()

        const batch = firestore().batch()


        const updateFields = {
            name: data?.name,
            bio: data?.bio
        }

        filteredData.forEach((document) => {
            const currentDocId = firestore().collection('Threads').doc(document.id)
            batch.update(currentDocId, updateFields)
        })
        console.log('Updating the profile on Threads Collection pls wait...')
        batch.commit()

    }
    const Line = (props: any) => {
        const { width } = props
        return (
            <View style={{ height: 1, backgroundColor: '#d0d3d4', width: width, alignSelf: 'flex-start', marginHorizontal: 20, marginBottom: 5 }} />
        )
    }




    const renderContacts = ({ item }: any) => {

        // console.log('Items in the flatlist:', item)/

        return (<View style={{}}>
            <TouchableOpacity
                // onPress={() => navigation.navigate('ThreadsDetails', { user: item })} */}
                style={styles.main}>
                <Icon3 name='person-circle' size={50} color='grey' />
                <View style={styles.submain}>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.text}>{item.thread}</Text>
                    </View>
                    <TouchableOpacity onPress={() => deletePost(item.id)}>
                        <Icon4 name='more-horizontal' size={22} color='red' />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <View style={styles.icons}>

                <TouchableOpacity>
                    <Icon4 name='heart' size={22} color='black' />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Icon5 name='comment-o' size={22} color='black' />
                </TouchableOpacity >

                <TouchableOpacity >
                    <Icon3 name='paper-plane-outline' size={22} color='black' />
                </TouchableOpacity>

            </View >
            <View style={styles.hline} />
        </View >)
    }



    return (
        <View style={styles.container}>
            <View style={{ flex: 0.05 }} />
            <TouchableOpacity onPress={() => navigation.navigate('ThreadsSettings')}
                style={{ alignSelf: 'flex-end', marginHorizontal: 30, marginVertical: 10, }}>
                <Icon name='align-right' size={20} color='black' />
            </TouchableOpacity>

            <View style={styles.personInfo}>
                <View>
                    <Text style={styles.originalName}>{data?.name}</Text>
                    <Text style={styles.name}>{data?.email}</Text>
                </View>
                {!data?.selectedImage ? <Icon2 name='person-circle' size={60} color='grey' /> :
                    <Image source={{ uri: data?.selectedImage }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                }
            </View>

            <View style={{ height: '2%' }} />

            <View style={styles.detailContainer}>
                <Text style={{ color: '#616a6b', fontFamily: 'Nunito-Regular' }}>{data?.bio}</Text>
                <Text style={{ color: '#cacfd2', fontFamily: 'Nunito-Regular' }}>3 Followers</Text>
            </View>

            <View style={{ height: "3%" }} />

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() =>
                    setModalVisible(true)
                }
                    style={[styles.button, { backgroundColor: 'white' }]}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'white' }]}>
                    <Text style={styles.buttonText}>Share Profile</Text>
                </TouchableOpacity>
            </View>




            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType='slide'
            >

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false)
                        setData(user)
                    }}
                    >
                        <Text style={styles.sideHeaders}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.header}>Edit Profile</Text>
                    <TouchableOpacity onPress={() => {
                        updateProfile();
                        setModalVisible(false)
                    }}>
                        <Text style={[styles.sideHeaders, { fontFamily: 'Nunito-Black' }]}>Done</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#d7dbdd', flex: 1 }}>
                    <View style={{ flex: 0.3 }} />

                    <View style={styles.settingContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={[styles.title, { marginLeft: 15 }]}>Name</Text>
                                <TextInput style={[styles.textInput1, { marginLeft: 10 }]}
                                    value={data?.name} onChangeText={(Text) => setName(Text)}
                                    placeholder='Name' placeholderTextColor='grey' maxLength={20}
                                />
                            </View>
                            <TouchableOpacity onPress={openImagePicker}
                                style={{ position: 'absolute', right: 10, top: -10 }}>
                                {!data?.selectedImage ? <Icon2 name='person-circle' size={60} color='grey' /> :
                                    <Image source={{ uri: data?.selectedImage }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                                }
                            </TouchableOpacity>
                        </View>

                        <Line width='80%' />

                        <Text style={[styles.title, { marginLeft: 15 }]}>Bio</Text>
                        <TextInput style={[styles.textInput, { marginLeft: 10 }]}
                            value={data?.bio} onChangeText={(Text) => setBio(Text)}
                            placeholder='Bio here' placeholderTextColor='grey' maxLength={50} multiline={true}
                        />

                        <Line width='90%' />

                        <Text style={[styles.title, { marginLeft: 15 }]}>Link</Text>
                        <TextInput style={[styles.textInput, { marginLeft: 10 }]}
                            placeholder='Create Link' placeholderTextColor='grey' maxLength={20}
                        />
                    </View>

                </View>
            </Modal>


            <View style={{ alignItems: 'center', }}>
                <Text style={styles.threads}>
                    Threads
                </Text>
            </View>


            {myThreads ? (
                <FlatList
                    data={myThreads}
                    renderItem={renderContacts}
                    style={{ marginTop: 30 }}
                />
            ) : (
                <Text style={{ textAlign: 'center', marginVertical: 20, color: 'black' }}>Loading threads...</Text>
            )}

        </View >
    )
}

export default ThreadsProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    originalName: {
        marginTop: 3,
        color: 'black',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
    },
    name: {
        color: '#616a6b',
        fontFamily: 'Nunito-Medium',
        fontSize: 14,
        // width: '70%',
    },
    detailContainer: {
        marginHorizontal: 20,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        height: '6%'
    },
    buttonContainer: {
        // gap: 10,
        // backgroundColor: 'red',
        marginHorizontal: '5%',
        flexDirection: 'row',
        height: '6.5%',
        justifyContent: 'space-between',
    },
    button: {
        // backgroundColor: 'black',
        borderRadius: 15,
        borderColor: '#cacfd2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        height: '80%',
        borderWidth: 2.5,
    },
    buttonText: {
        fontFamily: 'Nunito-Bold',
        color: 'black',
        fontSize: 16
    },
    threads: {
        fontFamily: 'Raleway-SemiBold',
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10,
        padding: 10,
        paddingHorizontal: 30,
        borderBottomWidth: 1.5,
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
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 17,
        color: 'black',
        marginLeft: 30,
    },
    textInput: {
        // backgroundColor: 'red',
        // width: '80%',
        paddingVertical: 0,
        paddingHorizontal: 8,
        fontFamily: 'Nunito-Bold',
        fontSize: 17,
        color: 'grey',
    },
    textInput1: {
        // backgroundColor: 'red',
        width: '390%',
        paddingVertical: 0,
        paddingHorizontal: 8,
        fontFamily: 'Nunito-Bold',
        fontSize: 17,
        color: 'grey',
    },
    settingContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 10,
        paddingVertical: 20,
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
    hline: {
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
    },
    text: {
        // width: '100%',
        color: 'grey',
        fontSize: 16,
        fontFamily: 'Nunito-Medium',
    },
    personInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
    }

})