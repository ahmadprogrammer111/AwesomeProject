
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'
import { Button, Menu, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { ConnectivityContext } from '../../../Context/Connection'
import { colors, textColors } from '../../../components/BloodComponent/BloodColors'
import Icon2 from 'react-native-vector-icons/Ionicons'


const BloodBankDonorsSearch = () => {

    const { connected, checkNetwork, setOpen } = useContext(ConnectivityContext);


    const [gender, setGender] = useState('');
    const [name, setName] = useState('')
    const navigation = useNavigation<any>()


    const [data, setData] = useState<any>()
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


    const getDataFromFirebase = async() => {

        try {
            if (bloodGroup !== '') {
                const subscriber = await firestore()
                    .collection('BloodUsers')
                    .where('type', '==', 'donor') //This might  be  a bit buggy because it matches the string exactly.
                    .get()
                   

                        console.log('My array on Search screen', subscriber.docs)
                        const regex = new RegExp(bloodGroup, 'i')

                        const data: any = subscriber?.docs?.map((item: any) => item.data()).filter((item) => regex.test(item.bloodGroup))
                        console.log('First test passed', data)

                        const regex2 = new RegExp(city, 'i')

                        const data1: any = data.map((item: any) => item).filter((item: any) => regex2.test(item.city))
                        const regex3 = new RegExp(gender, 'i')

                        const data2: any = data1.map((item: any) => item).filter((item: any) => regex3.test(item.gender))
                        console.log('Third  test passed', data2)

                        if (name) {
                            const regex4 = new RegExp(name, 'i')
                            const data3: any = data2.map((item: any) => item).filter((item: any) => regex4.test(item.name))
                            console.log('Fourth test passed', data3)
                            setData(data3)
                            navigation.navigate("BloodHome", { data: data3 })
                        } else {

                            if (data2) {
                                console.log('my array', JSON.stringify(data2))
                                console.log('Only Threads', data.map((item: any) => item.thread))
                                setData(data2)
                                navigation.navigate("BloodHome", { data: data2 })
                            }
                        }
                    // })


            
            // return () => subscriber;
        } else {
            console.log('Search is empty---->', bloodGroup)

        }

    } catch (error) {
        console.log('Errorin catch from bloodBank Search')
    }
}

const [visible, setVisible] = useState(false);
const [visible1, setVisible1] = useState(false);

const [bloodGroup, setBloodGroup] = useState('')
const [city, setCity] = useState('')


const [lineLayout, setLineLayout] = useState<any>(null)
const [lineLayout1, setLineLayout1] = useState<any>(null)

const renderItem = ({ item }: any, type: any) => {
    return (<TouchableOpacity
        style={styles.cityItem}
        onPress={() => {
            if (type == 'blood Group') {
                setBloodGroup(item.name);
                setVisible(false)
            } else if (type == 'city') {
                setCity(item.name);
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

                <Icon name='chevron-small-down' size={33} color='black' />
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
            <View style={{ backgroundColor: colors.contrast, flex: 1, }}>

                <Image source={require('../../../assets/images/bloodBg2.png')} resizeMode='stretch' style={{ height: '25%', width: '100%', position: 'absolute', top: '0%' }} />
                <View style={{ height: '8%' }} />

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginHorizontal: '8%' }}>
                    <Icon2 name='arrow-back-outline' size={23} color={colors.contrast} />
                </TouchableOpacity>

                <View style={{ height: '10%' }} />

                {renderMenu(bloodGroups, 'blood Group', visible, setVisible, lineLayout)}
                <Text style={styles.text1}>{bloodGroup ? bloodGroup : null}</Text>

                <View style={styles.line} onLayout={(event) => setLineLayout(event.nativeEvent.layout)} />

                <View style={{ height: '3%' }} />

                {renderMenu(cities, 'city', visible1, setVisible1, lineLayout1)}

                <Text style={styles.text1}>{city ? city : null}</Text>

                <View style={styles.line} onLayout={(event) => setLineLayout1(event.nativeEvent.layout)} />

                <View style={{ height: '3%' }} />

                <View style={{ marginHorizontal: '10%' }}>
                    <Text style={styles.title}>Name</Text>
                    <TextInput style={[styles.textInput,]}
                        value={data?.name} onChangeText={(Text) => setName(Text)}
                        placeholder='Name(Optional)' placeholderTextColor='grey' maxLength={20}
                    />
                </View>

                <View style={{ height: '3%' }} />


                <View style={styles.genderOption}>
                    <Pressable onPress={() => setGender('male')}
                        style={styles.subGenderOptions}>
                        <CheckBox
                            // title='Male'
                            checked={gender == 'male'}
                            onPress={() => setGender('male')}
                            checkedIcon="dot-circle-o"
                            containerStyle={{ width: '20%' }}
                            size={15}
                            checkedColor={colors.primary}
                            uncheckedColor={colors.tertiary}
                            uncheckedIcon="circle-o"
                        />
                        <Text style={[styles.text, {

                            color: gender == 'male' ? textColors.primary : textColors.tertiary,
                        }]}>Male</Text>
                    </Pressable>

                    <Pressable onPress={() => setGender('female')}
                        style={styles.subGenderOptions}>
                        <CheckBox
                            checked={gender === 'female'}
                            onPress={() => setGender('female')}
                            size={15}
                            containerStyle={{ width: '20%' }}
                            checkedColor={colors.primary}
                            uncheckedColor={colors.tertiary}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Text style={[styles.text, {
                            color: gender == 'female' ? textColors.primary : textColors.tertiary,
                        }]}>Female</Text>
                    </Pressable>
                </View>

                {/* <View style={{ height: '3%' }} /> */}









                <View style={{ flex: 0.2, }} />

                {/* <View> */}
                <TouchableOpacity
                    onPress={() => {
                        getDataFromFirebase()
                    }}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Search Recepient</Text>
                </TouchableOpacity>
            </View>
        </PaperProvider>
    </SafeAreaView >
)
}


export default BloodBankDonorsSearch

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    // title: {
    //     color: '#680606',
    //     fontSize: 35,
    //     fontWeight: 'bold',
    //     alignSelf: 'center'
    // },
    mainContainer: {
        alignSelf: 'center',
        height: '50%',
        width: '90%',
        backgroundColor: '#D9D9D9',
        elevation: 10,
        borderRadius: 20
    },
    //   : {
    //         // backgroundColor: 'red',
    //         marginHorizontal: '10%',
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         // marginVe  sectionrtical: 10,
    //     },
    // : {
    //     fontSize: 19,
    //     color: 'black',
    // },text
    // text1: {
    //     fontSize: 19,
    //     color: 'black',
    //     marginHorizontal: '10%'
    // },
    // line: {
    //     height: 1,
    //     backgroundColor: '#000000',
    //     width: '80%',
    //     alignSelf: 'center'
    // },
    button: {
        backgroundColor: '#968D8D',
        opacity: 0.55,
        alignItems: 'center',
        borderRadius: 7,
        width: '75%',
        // alignSelf: 'center',
        marginHorizontal: '12%',
        elevation: 10
    },
    // buttonText: {
    //     color: '#000000',
    //     fontSize: 25,
    // },
    // cityItem: {
    //     padding: 10,
    // },
    // cityText: {
    //     fontSize: 16,
    //     color: '#000',
    // },
    genderOption: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    subGenderOptions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        color: 'black',
        // borderBottomWidth: 1.5,
        paddingHorizontal: 5,
        paddingVertical: 0
        // marginHorizontal: 
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
    // buttonText2: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     color: 'black'
    // },
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
        // gap: 20,
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
        paddingBottom: '0%'
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
})

