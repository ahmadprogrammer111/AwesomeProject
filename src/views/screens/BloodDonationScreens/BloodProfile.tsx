import { Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, FlatList, Pressable, ActivityIndicator } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon4 from 'react-native-vector-icons/Entypo'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import Icon7 from 'react-native-vector-icons/AntDesign'

import { Button as Button1 } from 'react-native-elements'

import { CommonActions, DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firestore from '@react-native-firebase/firestore'
import { launchImageLibrary } from 'react-native-image-picker'
import { addEmail, addUser } from '../../../redux/Slices/userSlice'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

import Icon6 from 'react-native-vector-icons/MaterialIcons'

import auth from '@react-native-firebase/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Menu, PaperProvider } from 'react-native-paper'
import { ConnectivityContext } from '../../../Context/Connection'
import { colors, textColors } from '../../../components/BloodComponent/BloodColors'
import { BottomSheet, ListItem } from 'react-native-elements'





const BloodProfile = () => {

    const { connected, checkNetwork, setOpen } = useContext(ConnectivityContext);


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

    const [isLoading, setisLoading] = useState(false)
    const user = useSelector((state: any) => state.blood.bloodUser)
    const Email = useSelector((state: any) => state.blood.bloodMail)
    console.log('WEmail for redux', Email)
    const [isVisibleSheet, setIsVisibleSheet] = useState(false);

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
        // setisLoading(true)
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
                setData(threadsArray[0])
                // setisLoading(false)
            }

            // console.log('Data ======>', data)

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
    }, [user])


    const setName = (Value: string) => {
        setData({ ...data, name: Value });
        console.log(' Edited name:', data?.name)
    }
    const setAddress = (Value: string) => {
        setData({ ...data, address: Value });
        console.log(' Edited Address:', data?.address)
    }
    const updateBloodGroup = (Value: string) => {
        setData({ ...data, bloodGroup: Value });
        console.log(' Edited BloodGroup:', data?.bloodGroup)
    }
    const updateCity = (Value: string) => {
        setData({ ...data, city: Value });
        console.log(' Edited CIty:', data?.city)
    }
    const updatePhone = (Value: string) => {
        setData({ ...data, phone: Value });
        console.log(' Edited phone:', data?.phone)
    }
    const updateAge = (Value: string) => {
        setData({ ...data, age: Value });
        console.log(' Edited Age:', data?.age)
    }

    const updateProfile = async () => {
        // setisLoading(true)
        const filteredData = await firestore()
            .collection('BloodUsers')
            .where('email', '==', Email)
            .get()

        const batch = firestore().batch()
        console.log('filtereed data,', filteredData)
        const updateFields = {
            name: data?.name,
            address: data?.address,
            bloodGroup: data?.bloodGroup,
            city: data?.city,
            age: data?.age,
            phone: data?.phone,
        }


        filteredData.forEach((document) => {
            const currentDocId = firestore().collection('BloodUsers').doc(document.id)
            batch.update(currentDocId, updateFields)
        })


        batch.commit().then(() => {
            console.log('Updating the profile on BloodPrfile Collection pls wait...')
            dispatch(addUser(data))
            setData(data)
            // setisLoading(false)


        })


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
                <View style={styles.container}>

                    {isLoading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button1 title="Solid" type="solid" loading buttonStyle={{ backgroundColor: colors.primary }} /></View> :
                        <>
                            <View style={styles.personInfo}>
                                <View style={{ height: '5%' }} />


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '35%' }}>

                                    <TouchableOpacity onPress={() => navigation.navigate('BloodHome')}
                                        style={styles.iconContainer}>
                                        <Icon2 name='arrow-back-outline' size={23} color={colors.contrast} />
                                    </TouchableOpacity>

                                    <Menu
                                        visible={visible3}
                                        onDismiss={() => setVisible3(false)}
                                        anchorPosition='bottom'
                                        contentStyle={{
                                            left: menuLayout ? menuLayout.x - 50 : 0,
                                            maxHeight: 200
                                        }}
                                        anchor={<TouchableOpacity onPress={() => setVisible3(true)} onLayout={(e) => setMenuLayout(e.nativeEvent.layout)}
                                            style={styles.menuIconContainer}
                                        >
                                            <Icon name='align-right' size={23} color={colors.contrast} />
                                        </TouchableOpacity>
                                        }>
                                        <Menu.Item onPress={() => { signOut() }} leadingIcon='logout' title='Logout' />
                                    </Menu>

                                </View>

                                <Text style={styles.heading}>Profile</Text>

                                <View style={{ height: '15%' }} />

                                <View style={styles.personDataWrapper}>
                                    <View>
                                        <Text style={styles.originalName}>{data?.name ?? 'Loading'}</Text>
                                        <Text style={styles.name} >{data?.email ?? 'Loading'}</Text>
                                    </View>

                                    <TouchableOpacity style={styles.profileContainer}>
                                        <Icon3 name='account' size={20} color={colors.contrast} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ height: '10%' }} />

                            <View style={styles.aboutContainer}>
                                <View style={{ gap: 20, }}>
                                    <Text style={styles.name}>Address:</Text>
                                    <Text style={styles.name}>Age:</Text>
                                    <Text style={styles.name}>Phone:</Text>
                                    <Text style={styles.name}>Gender:</Text>
                                </View>

                                <View style={{ gap: 20, }}>
                                    <Text style={styles.name}>{data?.address ? data?.address ?? 'loading' : 'PLease add address'}</Text>
                                    <Text style={styles.name}>{data?.age ? data?.age ?? 'loading' : 'PLease add age'}</Text>
                                    <Text style={styles.name}>{data?.phone ? data?.phone ?? 'loading' : 'PLease add number'}</Text>
                                    <Text style={styles.name}>{data?.gender ? data?.gender ?? 'loading' : 'PLease add genderF'}</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(true)}
                                    style={styles.editIconContainer}>
                                    <Icon6 name='edit' size={20} color={colors.contrast} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.shareIconContainer}>
                                    <Icon5 name='share' size={20} color={colors.contrast} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.chipContainer}>
                                <Text style={styles.chipText}>About</Text>
                            </View>

                            <View style={{ height: '3%' }} />

                            <View style={{ height: '1%' }} />

                            <View style={{ marginHorizontal: '10%', }}>

                                <Text style={styles.originalName}>Blood Group:</Text>

                                <View style={{ height: '4%' }} />

                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, }}>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'A+' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'A+' ? textColors.secondary : textColors.colored }]}>A+</Text>
                                    </View>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'B+' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'B+' ? textColors.secondary : textColors.colored }]}>B+</Text>
                                    </View>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'AB+' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'AB+' ? textColors.secondary : textColors.colored }]}>AB+</Text>
                                    </View>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'O+' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'O+' ? textColors.secondary : textColors.colored }]}>O+</Text>
                                    </View>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'A-' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'A-' ? textColors.secondary : textColors.colored }]}>A-</Text>
                                    </View>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'B-' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'B-' ? textColors.secondary : textColors.colored }]}>B-</Text>
                                    </View>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'AB-' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'Ab-' ? textColors.secondary : textColors.colored }]}>AB-</Text>
                                    </View>
                                    <View style={[styles.bloodGroupContainer, { backgroundColor: data?.bloodGroup == 'O-' ? colors.primary : colors.contrast }]}>
                                        <Text style={[styles.bloodGroup, { color: data?.bloodGroup == 'O-' ? textColors.secondary : textColors.colored }]}>O-</Text>
                                    </View>
                                </View>
                            </View>




                            <View style={{ flexDirection: 'row', gap: '80%', marginHorizontal: '10%', paddingHorizontal: '5%', paddingVertical: '3%', borderWidth: 1.5, borderColor: colors.primary, borderRadius: 10, justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('BloodBankDonorsSearch')}
                                    style={styles.buttonContainer1}>
                                    <Text style={styles.buttonText}>Donor</Text>
                                    <Icon7 name='search1' size={20} color={colors.contrast} style={{ transform: [{ scaleX: -1 }] }} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('BloodBankSearch')}
                                    style={styles.buttonContainer1}>
                                    <Text style={styles.buttonText}>Recepient</Text>
                                    <Icon7 name='search1' size={20} color={colors.contrast} style={{ transform: [{ scaleX: -1 }] }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: '2%' }} />

                            <TouchableOpacity
                                onPress={() => navigation.navigate('BloodRegister')}
                                style={{ width: '80%', backgroundColor: colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '4%', borderRadius: 6, alignSelf: 'center' }}>
                                <Text style={styles.buttonText}>Add Donor</Text>

                                <Icon7 name='adduser' size={20} color={colors.contrast} style={{ transform: [{ scaleX: -1 }] }} />


                            </TouchableOpacity>

                            <Modal
                                visible={modalVisible}

                                onRequestClose={() => setModalVisible(false)}

                            ><PaperProvider>

                                    <View style={{ backgroundColor: colors.contrast }}>

                                        <Image source={require('../../../assets/images/bloodBg2.png')} resizeMode='stretch' style={{ height: '25%', width: '100%', position: 'absolute', top: '0%' }} />
                                        <View style={{ height: '8%' }} />

                                        <TouchableOpacity onPress={() => setModalVisible(false)}
                                            style={{ marginHorizontal: '8%' }}>
                                            <Icon2 name='arrow-back-outline' size={23} color={colors.contrast} />
                                        </TouchableOpacity>

                                        <View style={{ height: '10%' }} />

                                        <View style={{ marginHorizontal: '10%' }}>
                                            <Text style={styles.title}>Name</Text>
                                            <TextInput style={[styles.textInput,]}
                                                value={data?.name} onChangeText={(Text) => setName(Text)}
                                                placeholder='Name' placeholderTextColor='grey' maxLength={20}
                                            />
                                        </View>

                                        <View style={{ height: '3%' }} />


                                        <View style={{ marginHorizontal: '10%' }}>
                                            <Text style={[styles.title,]}>Address</Text>
                                            <TextInput style={[styles.textInput,]}
                                                value={data?.address} onChangeText={(Text) => setAddress(Text)}
                                                placeholder='Add Address' placeholderTextColor='grey' maxLength={20} multiline={true}
                                            />
                                        </View>
                                        <View style={{ height: '3%' }} />

                                        <View style={{ marginHorizontal: '10%' }}>
                                            <Text style={[styles.title,]}>Age</Text>
                                            <TextInput style={[styles.textInput,]}
                                                value={data?.age} onChangeText={(Text) => updateAge(Text)}
                                                placeholder='Enter age' placeholderTextColor='grey' maxLength={2} multiline={true} keyboardType='number-pad'
                                            />
                                        </View>

                                        <View style={{ height: '3%' }} />


                                        <View style={{ marginHorizontal: '10%' }}>
                                            <Text style={[styles.title,]}>Phone number</Text>
                                            <TextInput style={[styles.textInput,]}
                                                value={data?.phone} onChangeText={(Text) => updatePhone(Text)}
                                                placeholder='Add number' placeholderTextColor='grey' maxLength={50} multiline={true} keyboardType='number-pad'
                                            />
                                        </View>

                                        <View style={{ height: '3%' }} />


                                        {renderMenu(bloodGroups, 'blood Group', visible, setVisible, lineLayout)}
                                        <Text style={styles.text1}>{bloodGroup ? bloodGroup : data?.bloodGroup}</Text>

                                        <View style={styles.line} onLayout={(event) => setLineLayout(event.nativeEvent.layout)} />

                                        <View style={{ height: '3%' }} />


                                        {renderMenu(cities, 'city', visible1, setVisible1, lineLayout1)}

                                        <Text style={styles.text1}>{city ? city : data?.city}</Text>

                                        <View style={styles.line} onLayout={(event) => setLineLayout1(event.nativeEvent.layout)} />

                                        <View style={{ flex: 0.5, }} />

                                        <TouchableOpacity
                                            onPress={() => {
                                                updateProfile();
                                                setModalVisible(false)
                                                // getDataFromFirebase()

                                            }}
                                            style={styles.buttonContainer}>
                                            <Text style={styles.buttonText}>Save</Text>
                                        </TouchableOpacity>

                                        {/* </View> */}
                                    </View>
                                </PaperProvider>
                            </Modal>


                        </>}

                </View >
            </PaperProvider >
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
        backgroundColor: colors.contrast,
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
        // marginTop: 3,
        color: textColors.primary,
        fontFamily: 'Lexend-Regular',
        // fontFamily: 'Nunito-Bold',
        fontSize: 18,
    },
    name: {

        color: textColors.primary,
        fontFamily: 'Lexend-Regular',
        fontSize: 14,
        flexWrap: 'wrap',
        // backgroundColor: 'red',/

        // width: '0%',
    },
    detailContainer: {
        marginHorizontal: 20,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        height: '6%'
    },
    buttonContainer: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        alignSelf: 'center',
        elevation: 10,
        width: '80%',
        paddingTop: 0,
        paddingBottom: 5,
        height: '6%',
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
        fontFamily: 'Lexend-Regular',
        fontSize: 17,
        color: textColors.primary,
        // marginHorizontal: '10%',
    },
    textInput: {
        // backgroundColor: 'red',
        // width: '80%',
        paddingVertical: 0,
        paddingHorizontal: '0.5%',
        fontFamily: 'Lexend-Regular',
        borderBottomWidth: 1,
        fontSize: 15,
        color: 'grey',
    },
    textInput1: {
        // backgroundColor: 'red',
        // width: '390%',
        paddingVertical: 0,
        paddingHorizontal: 8,
        // fontFamily: 'Nunito-Bold',
        fontSize: 17,
        color: textColors.tertiary,
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
        color: textColors.primary,
        fontSize: 18,
        fontFamily: 'Lexend-Regular'
    },
    personInfo: {
        // alignItems: 'center',
        // marginHorizontal: '10%',
        // flexDirection: 'row',
        elevation: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: '20%',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingVertical: '3%',
        backgroundColor: colors.primary,
        // marginRight: '10%'
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
        fontSize: 12,
        color: textColors.primary,
        fontFamily: 'Lexend-Regular'
    },
    section: {
        marginVertical: '-1%',
        // backgroundColor: 'red',
        marginHorizontal: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 30,
    },
    line: {
        height: 1.5,
        backgroundColor: '#000000',
        width: '80%',
        alignSelf: 'center'
    },
    text1: {
        fontSize: 16,
        color: textColors.tertiary,
        marginHorizontal: '10%',
        fontFamily: 'Lexend-Regular'
    },
    profileContainer: {
        backgroundColor: colors.secondary,
        // marginHorizontal: '5%',
        height: '65%',
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        // alignSelf: 'flex-end'
    },
    personDataWrapper: {
        elevation: 20,
        borderRadius: 12,
        paddingHorizontal: 10,
        // borderColor: colors.,
        // backgroundColor: '',
        // borderWidth: 1.5,
        marginHorizontal: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center',
        backgroundColor: colors.contrast,
    },
    iconContainer: {
        // backgroundColor: 'orange',
        marginLeft: '5%',
        height: '50%',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        color: textColors.secondary,
        fontSize: 30,
        fontFamily: 'Lexend-Regular',
        marginLeft: '8%',
    },
    chipContainer: {
        backgroundColor: colors.side,
        borderColor: colors.secondary,
        borderWidth: 1.5,

        position: 'absolute',
        top: '28%',
        left: '8%',
        // elevation: 20,
        padding: '2%',
        borderRadius: 5,
    },
    editIconContainer: {
        backgroundColor: colors.side,
        borderColor: colors.secondary,
        borderWidth: 1.5,
        position: 'absolute',
        // top: '42.5%',
        bottom: '-14%',
        right: '20%',
        // elevation: 20,
        padding: '2%',
        borderRadius: 5,
    },
    shareIconContainer: {
        backgroundColor: colors.side,
        borderColor: colors.secondary,
        borderWidth: 1.5,
        position: 'absolute',
        // top: '42.5%',
        bottom: '-14%',
        right: '6%',
        // elevation: 20,
        padding: '2%',
        borderRadius: 5,
    },
    chipText: {
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        color: textColors.secondary,
    },
    aboutContainer: {
        flexDirection: 'row',
        // columnGap: 10,
        gap: '150%',
        // justifyContent: 'space-between',
        // rowGap: 10,
        backgroundColor: colors.contrast,
        elevation: 5,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: colors.secondary,
        marginHorizontal: '5%',
        width: '90%',
        alignSelf: 'center',
        paddingTop: '10%',
        paddingHorizontal: '3%',
        paddingBottom: '3%'
    },
    bloodGroupContainer: {

        margin: '1%',
        width: '12%',
        backgroundColor: colors.primary,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.primary,
        padding: '1.5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    bloodGroup: {
        fontFamily: 'Lexend-Regular',
        color: textColors.secondary,
        fontSize: 13,
    },
    menuIconContainer: {
        alignSelf: 'flex-end',
        marginHorizontal: 30,
        marginVertical: 10,
        // backgroundColor: 'red',
        height: '70%',
        width: '50%', alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer1: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
        gap: '10%',
        // borderWidth: 2,
        // borderColor: '#FFFCFC',
        alignSelf: 'center',
        elevation: 2,
        width: '47%',
        padding: 14,
        // paddingTop: 0,
        // paddingBottom: 5,
    },
    buttonText: {
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        color: textColors.secondary,
        alignSelf: 'center',
    }
})