import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/ThreadsComponents/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore'
import Icon3 from 'react-native-vector-icons/Ionicons'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'



const ThreadsDetails = ({ route }: any) => {
    const navigation = useNavigation<any>()
    const { user, } = route.params


    const [data, setData] = useState<any>()


    const [usersInfo, setUsersInfo] = useState<any>()
    const [ThreadsArray, setThreadsArray] = useState<any>()


    useEffect(() => {

        getData()

    }, [])


    const getData = async () => {
        if (user) {
            console.log('user from props', user)
        } else {
            console.error('No user from redux', Error)
        }
        try {
            if (user?.email) {
                const subscriber = firestore()
                    .collection('Threads')
                    .where('email', '==', user?.email)
                    .onSnapshot(documentSnapshot => {
                        // console.log('My array on detail screen', documentSnapshot?.docs?.map((item: any) => item.data()))
                        const Threads: any = documentSnapshot?.docs?.map((item: any) => item.data())

                        if (Threads) {
                            console.log('my array', JSON.stringify(Threads))
                            console.log('Only Threads', Threads.map((item: any) => item.thread))
                            const post = Threads.map((item: any) => item.thread)
                            setData(Threads)
                            setThreadsArray(post)
                        }
                    })
                return () => subscriber();
            } else {
                console.log('Error from Homescreen at getting threads.There is no value in Email:', user?.email)
            }

        }

        catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }

    }

    const renderContacts = ({ item }: any) => {


        return (<View style={{}}>
            <TouchableOpacity

                style={styles.main}>
                <Icon3 name='person-circle' size={50} color='grey' />
                <View style={styles.submain}>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{data[0]?.name}</Text>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                    <Icon4 name='more-horizontal' size={22} color='black' />
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

            <Header screen='ThreadsHome2' />
            <View>


                <View style={{ flex: 0.05 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
                    <View>
                        <Text style={styles.originalName}>{data?.[0]?.name ?? 'Loading...'}</Text>
                        <Text style={styles.name}>{(data?.[0]?.bio || 'This User Has no About Info') ?? 'Loading...'}</Text>
                    </View>

                    <Icon2 name='person-circle' size={60} color='grey' />
                </View>



                <View style={styles.detailContainer}>
                    {/* <Text style={{ color: '#616a6b', fontFamily: 'Nunito-Regular' }}>{data?.[0]?.bio ?? 'Loading bio...'} </Text> */}
                    <Text style={{ color: '#cacfd2', fontFamily: 'Nunito-Regular' }}>3 Followers</Text>
                </View>

                <View style={{ flex: 0.05 }} />



            </View>
            <View style={{ alignItems: 'center', }}>
                <Text style={styles.threads}>
                    Threads
                </Text>
            </View>

            <View style={styles.line} />

            {ThreadsArray ? (
                <FlatList
                    data={ThreadsArray}
                    renderItem={renderContacts}
                    style={{ marginTop: 30 }}
                />
            ) : (
                <Text style={{ textAlign: 'center', marginVertical: 20, color: 'black' }}>Loading threads...</Text>
            )}

        </View>
    )
}

export default ThreadsDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    threads: {
        fontFamily: 'Raleway-SemiBold',
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        width: '35%',
        alignSelf: 'center'
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
        // backgroundColor: 'red',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        // flex: 0.09
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
    }


})