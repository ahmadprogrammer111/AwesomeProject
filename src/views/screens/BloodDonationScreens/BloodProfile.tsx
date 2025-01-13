import { Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, FlatList, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon4 from 'react-native-vector-icons/Entypo'
import { CommonActions, DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firestore from '@react-native-firebase/firestore'
import { launchImageLibrary } from 'react-native-image-picker'
import { addEmail, addUser } from '../../../redux/Slices/userSlice'
import Icon3 from 'react-native-vector-icons/Ionicons'

import Icon6 from 'react-native-vector-icons/MaterialCommunityIcons'

import auth from '@react-native-firebase/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Menu, PaperProvider } from 'react-native-paper'





const BloodProfile = () => {

    const bloodGroups = [
        { id: '1', name: 'O+' },
        { id: '2', name: 'O-' },
        { id: '3', name: 'A+' },
        { id: '4', name: 'A-' },
        { id: '5', name: 'B+' },
        { id: '6', name: 'B-' },
        { id: '7', name: 'AB+' },
        { id: '8', name: 'AB-' },
    ];
    const cities = [
        { id: '1', name: 'Lahore' },
        { id: '2', name: 'Rawalpindi' },
        { id: '3', name: 'Faisalabad' },
        { id: '4', name: 'Multan' },
        { id: '5', name: 'Sialkot' },
        { id: '6', name: 'Gujranwala' },
        { id: '7', name: 'Sargodha' },
        { id: '8', name: 'Bahawalpur' },
        { id: '9', name: 'Jhang' },
        { id: '10', name: 'Rahim Yar Khan' },
        { id: '11', name: 'Muzaffargarh' },
        { id: '12', name: 'Sheikhupura' },
        { id: '13', name: 'Mianwali' },
        { id: '14', name: 'Chiniot' },
        { id: '15', name: 'Kasur' },
        { id: '16', name: 'Bhakkar' },
        { id: '17', name: 'Nankana Sahib' },
        { id: '18', name: 'Layyah' },
        { id: '19', name: 'Okara' },
        { id: '20', name: 'Attock' },
        { id: '21', name: 'Toba Tek Singh' },
        { id: '22', name: 'Dera Ghazi Khan' },
        { id: '23', name: 'Zafarwal' },
        { id: '24', name: 'Bhalwal' },
        { id: '25', name: 'Kot Adu' },
        { id: '26', name: 'Mandi Bahauddin' },
        { id: '27', name: 'Jhelum' },
        { id: '28', name: 'Khushab' },
        { id: '29', name: 'Hafizabad' },
        { id: '30', name: 'Chakwal' }
    ];

    const navigation = useNavigation<any>()

    const [modalVisible, setModalVisible] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector((state: any) => state.blood.bloodUser)
    const Email = useSelector((state: any) => state.blood.bloodMail)



    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [menuLayout, setMenuLayout] = useState<any>()
    const [bloodGroup, setBloodGroup] = useState('')

    const [lineLayout, setLineLayout] = useState<any>(null)
    const [lineLayout1, setLineLayout1] = useState<any>(null)
    const [city, setCity] = useState('');

    const [data, setData] = useState<any>()
    // const [post, setPost] = useState('')
    const [myThreads, setMyThreads] = useState<any>()

    const getDataFromFirebase = async () => {
        try {
            const data = await firestore()
                .collection('BloodUsers')
                .where('email', '==', Email)
                .orderBy('createdAt', 'desc')
                .get()
            const threadsArray = data.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            console.log("Array ===>", threadsArray)

            if (threadsArray) {
                console.log('my array', threadsArray)
                // const maped = threadsArray.map((item) => item)
                // console.log('Mappped Arrrrrrrraaaaay', maped)
                setMyThreads(threadsArray[0])
            }

            console.log('Data ======>', data)

        } catch (error) {
            console.log('Err fetching data-------->', error)
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


    const setName = (Value: string) => {
        setData({ ...data, name: Value });
        console.log(' Edited name:', data?.name)
    }
    const setBio = (Value: string) => {
        setData({ ...data, bio: Value });
        console.log(' Edited Bio:', data?.bio)
    }
    const updateBloodGroup = (Value: string) => {
        setData({ ...data, bloodGroup: Value });
        console.log(' Edited BloodGroup:', data?.bloodGroup)
    }
    const updateCity = (Value: string) => {
        setData({ ...data, city: Value });
        console.log(' Edited CIty:', data?.city)
    }

    const updateProfile = async () => {

        const filteredData = await firestore()
            .collection('BloodUsers')
            .where('email', '==', Email)
            .get()

        const batch = firestore().batch()
        console.log('filtereed data,', filteredData)
        const updateFields = {
            name: data?.name,
            bio: data?.bio,
            bloodGroup: data?.bloodGroup,
            city: data?.city
        }

        dispatch(addUser(data))

        filteredData.forEach((document) => {
            const currentDocId = firestore().collection('BloodUsers').doc(document.id)
            batch.update(currentDocId, updateFields)
        })
        console.log('Updating the profile on Threads Collection pls wait...')

        batch.commit()


    }



    const Line = (props: any) => {
        const { width } = props
        return (
            <View style={{ height: 2, backgroundColor: 'black', width: width, alignSelf: 'flex-start', marginHorizontal: 20, marginBottom: 5 }} />
        )
    }


    const signOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'BloodLogin' }],
                    })
                );
                console.log('User signed out!')
            });
    }


    const renderItem = ({ item }: any, type: any) => {

        return (<TouchableOpacity
            style={styles.cityItem}
            onPress={() => {
                if (type == 'blood Group') {
                    setBloodGroup(item.name);
                    updateBloodGroup(item.name)
                    setVisible(false)
                } else if (type == 'city') {
                    setCity(item.name);
                    updateCity(item.name)
                    setVisible1(false)
                }
            }}
        >
            <Text style={styles.cityText}>{item.name}</Text>
        </TouchableOpacity >
        )
    }


    const renderMenu = (data: any, type: string, visible: boolean, setVisible: any, lineLayout: any) => {
        return (
            // <ConnectivityContext.Provider value={isCone}
            <Menu
                visible={visible}
                anchorPosition='bottom'
                onDismiss={() => setVisible(false)}
                anchor={<Pressable style={styles.section} onPress={() => setVisible(true)}
                >

                    <Text style={styles.text}>Select {type}</Text>
                    <Icon4 name='chevron-small-down' size={33} color='black' />
                </Pressable>}

                contentStyle={{
                    width: lineLayout ? lineLayout.width : '80%',
                    left: lineLayout ? lineLayout.x : 0,
                    maxHeight: 200
                }}
            >
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderItem({ item }, type)}
                />
            </Menu>
        )
    }




    return (
        <SafeAreaView style={styles.safeArea}>
            <PaperProvider>
                <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>

                    <View style={{ flex: 0.05 }} />
                    <Menu
                        visible={visible3}
                        onDismiss={() => setVisible3(false)}
                        anchorPosition='bottom'
                        contentStyle={{
                            left: menuLayout ? menuLayout.x - 150 : 0,
                            maxHeight: 200
                        }}
                        anchor={<TouchableOpacity onPress={() => setVisible3(true)} onLayout={(e) => setMenuLayout(e.nativeEvent.layout)}
                            style={{ alignSelf: 'flex-end', marginHorizontal: 30, marginVertical: 10, }}
                        >
                            <Icon name='align-right' size={30} color='black' />
                        </TouchableOpacity>
                        }>
                        <Menu.Item onPress={() => { signOut() }} leadingIcon='logout' title='Logout' />

                    </Menu>

                    <LinearGradient
                        colors={['#b0b0b0', '#b8b8b8', '#d1cece']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.personInfo}>

                        <View>
                            <Text style={styles.originalName}>{data?.name}</Text>
                            <Text style={styles.name}>{data?.email}</Text>
                        </View>
                        <Icon2 name='person-circle' size={60} color='grey' />

                    </LinearGradient>
                    <View style={{ height: '2%' }} />

                    <View style={styles.detailContainer}>
                        <Text style={{ color: '#616a6b', }}>{data?.bio}</Text>
                        <Text style={{ color: '#cacfd2', }}>3 Followers</Text>
                    </View>

                    <View style={{ height: "3%" }} />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() =>
                            setModalVisible(true)
                        }
                            style={[styles.button]}>
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button]}>
                            <Text style={styles.buttonText}>Share Profile</Text>
                        </TouchableOpacity>
                    </View>

                    <Modal
                        visible={modalVisible}
                        transparent={true}
                        onRequestClose={() => setModalVisible(false)}
                        animationType='slide'
                    ><PaperProvider>
                            <View style={{ height: '20%' }} />

                            <LinearGradient
                                colors={['#f4eeee', '#949494', '#900C3F']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.settingContainer}>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={[styles.title, { marginLeft: 15 }]}>Name</Text>
                                        <TextInput style={[styles.textInput1, { marginLeft: 10 }]}
                                            value={data?.name} onChangeText={(Text) => setName(Text)}
                                            placeholder='Name' placeholderTextColor='grey' maxLength={20}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: 10, top: -10 }}>
                                        <Icon2 name='person-circle' size={60} color='grey' />
                                    </TouchableOpacity>
                                </View>

                                <Line width='80%' />

                                <View style={{ height: '3%' }} />

                                <Text style={[styles.title, { marginLeft: 15 }]}>Bio</Text>

                                <TextInput style={[styles.textInput, { marginLeft: 10 }]}
                                    value={data?.bio} onChangeText={(Text) => setBio(Text)}
                                    placeholder='Bio here' placeholderTextColor='grey' maxLength={50} multiline={true}
                                />
                                <Line width='90%' />
                                <View style={{ height: '3%' }} />

                                {renderMenu(bloodGroups, 'blood Group', visible, setVisible, lineLayout)}
                                <Text style={styles.text1}>{bloodGroup ? bloodGroup : null}</Text>

                                <View style={styles.line} onLayout={(event) => setLineLayout(event.nativeEvent.layout)} />

                                <View style={{ height: '3%' }} />

                                {renderMenu(cities, 'city', visible1, setVisible1, lineLayout1)}

                                <Text style={styles.text1}>{city ? city : null}</Text>

                                <View style={styles.line} onLayout={(event) => setLineLayout1(event.nativeEvent.layout)} />

                                <View style={{ height: '10%' }} />

                                <View style={styles.buttonContainer2}>

                                    <TouchableOpacity onPress={() => setModalVisible(false)}
                                        style={styles.gradientContainer}
                                    >
                                        <Text style={styles.buttonText2}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            updateProfile()
                                            setModalVisible(false)

                                        }}
                                        style={styles.gradientContainer}
                                    >
                                        <Text style={styles.buttonText2}>Save</Text>
                                    </TouchableOpacity>

                                </View>
                            </LinearGradient>
                        </PaperProvider>
                    </Modal>



                    <View style={{ alignItems: 'flex-start', flexDirection: 'row', marginBottom: 10, marginHorizontal: 30 }}>
                        <Icon6 name='test-tube' size={30} color='' />
                        <Text style={styles.threads} >
                            Data
                        </Text>
                    </View>
                    <Line width='30%' />


                    <View style={{ height: '3%' }} />

                    <LinearGradient
                        colors={['#b0b0b0', '#b8b8b8', '#d1cece']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.dataContainer}>

                        <View>
                            <View style={styles.dataSubContainer}>
                                <Text style={styles.dt1}>Blood Group:</Text>
                                <Text style={styles.dt2}>{myThreads?.bloodGroup}</Text>
                            </View>

                            <View style={styles.dataSubContainer}>
                                <Text style={styles.dt1}>City:</Text>
                                <Text style={styles.dt2}>{myThreads?.city}</Text>
                            </View>
                            <View style={styles.dataSubContainer}>
                                <Text style={styles.dt1}>Gender:</Text>
                                <Text style={styles.dt2}>{myThreads?.gender}</Text>

                            </View>
                            <View style={styles.dataSubContainer}>
                                <Text style={styles.dt1}>Type:</Text>
                                <Text style={styles.dt2}>{myThreads?.type}</Text>

                            </View>

                        </View>
                    </LinearGradient>







                </LinearGradient>
            </PaperProvider>
        </SafeAreaView >
    )
}

export default BloodProfile

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    gradientContainer: {

        borderColor: 'black',
        width: '48%',
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70%',
        // height: '80%'

    },
    buttonContainer2: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: '20%'
    },
    originalName: {
        marginTop: 3,
        color: 'black',
        // fontFamily: 'Nunito-Bold',
        fontSize: 18,
    },
    name: {
        color: '#616a6b',
        // fontFamily: 'Nunito-Medium',
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
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        height: '80%',
        borderWidth: 2,
    },
    buttonText: {
        // fontFamily: 'Nunito-Bold',
        color: 'black',
        fontSize: 16
    },
    threads: {
        // fontFamily: 'Raleway-SemiBold',
        color: 'black',
        textAlign: 'center',
        fontSize: 24,

        fontWeight: 'bold'
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
        // fontFamily: 'Raleway-Bold',
        fontSize: 22,
    },
    sideHeaders: {
        // backgroundColor: 'purple',
        color: 'grey',
        // fontFamily: 'Nunito-Bold',
        fontSize: 18
    },
    title: {
        // fontFamily: 'Nunito-Bold',
        fontSize: 17,
        color: 'black',
        marginLeft: 30,
    },
    textInput: {
        // backgroundColor: 'red',
        // width: '80%',
        paddingVertical: 0,
        paddingHorizontal: 8,
        // fontFamily: 'Nunito-Bold',
        fontSize: 17,
        color: 'grey',
    },
    textInput1: {
        // backgroundColor: 'red',
        width: '390%',
        paddingVertical: 0,
        paddingHorizontal: 8,
        // fontFamily: 'Nunito-Bold',
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
        height: '60%',
        paddingVertical: 20,
    },
    main: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 5,
    },
    submain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        width: '80%',
    },
    textContainer: {
        marginLeft: 6,
        // backgroundColor: '20',
        width: '90%',
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
        // fontFamily: 'Nunito-Medium',
    },
    personInfo: {
        elevation: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        paddingLeft: 10,
        borderWidth: 1.5,
        borderColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    buttonText2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    dataContainer: {
        borderRadius: 20,
        elevation: 5,
        borderColor: 'grey',
        borderWidth: 1.5,
        marginHorizontal: 20,
        height: '30%'
    },
    dt1: {
        fontSize: 20,
        color: 'black',
        borderBottomWidth: 1.5,
    },
    dt2: {
        fontSize: 20,
        color: 'grey',
        // borderBottomWidth: 1.5,
    },
    dataSubContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    cityItem: {
        padding: 10,
    },
    cityText: {
        fontSize: 16,
        color: '#000',
    },
    section: {
        padding: 0,
        // backgroundColor: 'red',
        marginHorizontal: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 30,
    },
    line: {
        height: '0.3%',
        backgroundColor: '#000000',
        width: '80%',
        alignSelf: 'center'
    },
    text1: {
        fontSize: 19,
        color: 'black',
        marginHorizontal: '10%'
    },
})