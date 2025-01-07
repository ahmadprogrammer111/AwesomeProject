import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon1 from 'react-native-vector-icons/MaterialIcons'

import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import firestore from '@react-native-firebase/firestore'


const ThreadsSearch = () => {


    const navigation = useNavigation<any>()

    const [search, setsearch] = useState('')

    // const [users, setUsers] = useState<any>()
    const [searchedUsers, setSearchedUsers] = useState<any>()


    useEffect(() => {

        try {
            if (search !== '') {
                const subscriber = firestore()
                    .collection('Users')
                    // .where('name', '==', search) This will not work because it matches the string exactly.
                    .onSnapshot(documentSnapshot => {
                        console.log('My array on Search screen', documentSnapshot.docs)
                        const regex = new RegExp(search, 'i')

                        const data: any = documentSnapshot?.docs?.map((item: any) => item.data()).filter((item) => regex.test(item.name))

                        console.log('d:', data)
                        setSearchedUsers(data)

                        // if (data) {
                        //     console.log('my array', JSON.stringify(Threads))
                        //     console.log('Only Threads', data.map((item: any) => item.thread))
                        //     setUsers(data)
                        // }
                    })
                return () => subscriber();
            } else {
                console.log('Search is empty---->', search)
            }

        }

        catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }

    }, [search])




    const renderContacts = ({ item }: any) => {





        // console.log(item)
        return (<View style={{}}>
            <TouchableOpacity onPress={() => navigation.navigate('ThreadsDetails', { user: item })}
                style={styles.main}>
                <Icon name='person-circle' size={50} color='grey' />
                <View style={styles.submain}>
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.text}>{item.bio}</Text>
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
            <View style={{ height: 40 }} />
            <Text style={styles.heading}>Search</Text>
            <View style={styles.search}>
                <Icon1 name='search' size={22} color='grey' style={styles.searchIcon} />
                <TextInput placeholder='Search' style={styles.textInput}
                    placeholderTextColor='grey' value={search} onChangeText={setsearch} />
                    {/* <Icon/> */}
            </View>



            {searchedUsers ? (
                <FlatList
                    data={searchedUsers}
                    renderItem={renderContacts}
                    style={{ marginTop: 30 }}
                />
            ) : (
                <Text style={{ textAlign: 'center', marginVertical: 20, fontFamily: 'Nunito-Bold', color: 'silver' }}>Search name...</Text>
            )}
        </View>
    );
}

export default ThreadsSearch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Raleway-Bold',
        marginHorizontal: 20,
        marginVertical: 10
    },
    search: {
    
        backgroundColor: '#e5e7e9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        height: 40
    },
    textInput: {
        width: '80%',
        height: '140%',
        color: 'black',
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
        alignSelf: 'center',

        // backgroundColor: 'red'
    },
    searchIcon: {
        marginHorizontal: 5
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


})