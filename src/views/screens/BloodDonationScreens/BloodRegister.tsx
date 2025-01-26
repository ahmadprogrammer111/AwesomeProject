import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { CheckBox, Button as Button1 } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import Auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { DefaultTheme, Dialog, Menu, Portal, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'


import { addEmail, addUser } from '../../../redux/Slices/BloodSlice'
import { ConnectivityContext } from '../../../Context/Connection'
import { colors, textColors } from '../../../components/BloodComponent/BloodColors'
import { color } from 'react-native-elements/dist/helpers'
import BloodInput from '../../../components/BloodComponent/BloodInput'



const BloodRegister = () => {
    const { connected, checkNetwork, setOpen, setUser } = useContext(ConnectivityContext);

    const dispatch = useDispatch()

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

    const [OpenDialog, setOpenDialog] = useState(false);
    const [error, setError] = useState<any>('')
    const navigation = useNavigation<any>();
    const [gender, setGender] = useState<string>('');
    const [donor, setDonor] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [bloodGroup, setBloodGroup] = useState('')

    const [lineLayout, setLineLayout] = useState<any>(null)
    const [lineLayout1, setLineLayout1] = useState<any>(null)

    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);



    const REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const checkEmail = (email: any) => REGEX.test(email)



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

    const phone = ''
    const age = ''
    // const bio = ''
    const address = ''

    const createUserWithEmailAndPassword = async () => {
        setIsLoading(true)

        if (!checkEmail(email.trim())) {
            // Alert.alert('Enter Correct Email!!');
            setError('Enter Correct Email!!')
            setOpenDialog(true)
            setIsLoading(false);
            return;
        } else {
            console.log('Email:', email);
            console.log('Email:', name);
            console.log('Password:', password);
            if (!email || !password || !name || !city || !gender || !bloodGroup) {
                console.log('PLease fill the required fiels ');
                setError('PLease fill the required fields ')
                setOpenDialog(true)

                // Alert.alert('Email or Password is empty');
                return setIsLoading(false);
            }
            else {
                try {
                    dispatch(addEmail(email))
                    await Auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            const user = firebase.auth().currentUser

                            if (user) {
                                console.log('User email: ', user.email);
                            } else {
                                console.log('No user Fetched')
                            }
                            user?.sendEmailVerification()
                            console.log('User Signed Up! sucessfully')
                            setUser(user)
                            firestore()
                                .collection('BloodUsers')
                                .add({
                                    name: name,
                                    // bio: bio,
                                    email: email,
                                    password: password,
                                    city: city,
                                    age: age,
                                    address: address,
                                    phone: phone,
                                    gender: gender,
                                    type: donor ? 'donor' : 'recepient',
                                    bloodGroup: bloodGroup,
                                    createdAt: new Date().toISOString()
                                });
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'BloodLogin' }],
                                })
                            );
                            setIsLoading(false)

                        })
                        .catch((error) => {
                            if (error.code === 'auth/email-already-in-use') {
                                console.error('That email address is already in use!');

                                setIsLoading(false)
                                setError(error.code)
                                setOpenDialog(true)
                                // Alert.alert('That email address is already in use!')
                            }
                            if (error.code == 'auth/invalid-email') {
                                console.error('That email address is invalid!!')
                                setIsLoading(false)
                                setError(error.code)
                                setOpenDialog(true)
                                // Alert.alert('That email address is invalid!!')
                            }
                            if (error.code == 'auth/operation-not-allowed') {
                                console.error('The email is disabled by the owner of the app.')
                                setIsLoading(false)
                                setError(error.code)
                                setOpenDialog(true)
                                // Alert.alert('The email is disabled by the owner of the app.')
                            }
                            const err = `Pls check your Email:${error.code}: ${error.message}`
                            setIsLoading(false)
                            setError(err)
                            setOpenDialog(true)
                            
                            console.log(error)

                        })
                } catch (e) {

                    setIsLoading(false)
                    setError(e)
                    setOpenDialog(true)
                   
                    console.log(e)
                }
            }
        }
    }



    return (

        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>


                {isLoading ? <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}><Button1 title="Solid" type="solid" containerStyle={{ backgroundColor: 'red' }} loading /></View> :

                    <>
                        <View style={{ height: '2%' }} />
                        <Image source={require('../../../assets/images/bloodBg.png')} resizeMode='stretch' style={{ position: 'absolute', height: '22%', width: '100%' }} />


                        <View style={styles.headingContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon2 name='arrow-back-outline' size={25} color={textColors.secondary} style={{}} adjustsFontSizeToFit={true} />
                            </TouchableOpacity>
                            <View style={{ height: '15%' }} />
                            <Text style={styles.title}>Create account</Text>
                            <Text style={styles.headingText}>And Recieve or Donate Blood</Text>

                        </View>
                        {/* <View style={{ height: '1%' }} /> */}

                        <View style={styles.boxContainer}>
                            <Text style={styles.headingText}>Credentials</Text>
                        </View>

                        <View style={{ height: '2%' }} />

                        <Text style={styles.inputTitle}>Name</Text>
                        <BloodInput placeHolder='eg. Harry' value={name} setValue={setName} />
                        <View style={{ height: '2%' }} />

                        <Text style={styles.inputTitle}>Email</Text>
                        <BloodInput placeHolder='example@email.com' value={email} setValue={setEmail} />
                        <View style={{ height: '2%' }} />

                        <Text style={styles.inputTitle}>Password</Text>
                        <BloodInput placeHolder='eg. /1^5dau9*' value={password} setValue={setPassword} />

                        <View style={{ height: '2%' }} />


                        {renderMenu(bloodGroups, 'blood Group', visible, setVisible, lineLayout)}
                        <Text style={styles.text1}>{bloodGroup ? bloodGroup : null}</Text>

                        <View style={styles.line} onLayout={(event) => setLineLayout(event.nativeEvent.layout)} />

                        <View style={{ height: '2%' }} />

                        {renderMenu(cities, 'city', visible1, setVisible1, lineLayout1)}
                        <Text style={styles.text1}>{city ? city : null}</Text>
                        <View style={styles.line} onLayout={(event) => setLineLayout1(event.nativeEvent.layout)} />

                        <View style={{ height: '2%' }} />
                        <Text style={styles.inputTitle}>Select Gender</Text>

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


                        <Portal>
                            <Dialog visible={OpenDialog} onDismiss={() => setOpenDialog(false)}>
                                <Dialog.Title>Alert!</Dialog.Title>
                                <Dialog.Content>
                                    <Text>{error}</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={() => setOpenDialog(false)}>ok</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>

                        <Pressable onPress={() => setDonor(!donor)}
                            style={styles.checkBoxContainer}>
                            <CheckBox
                                checked={donor}
                                onPress={() => setDonor(!donor)}
                                iconType="material-icons"
                                checkedIcon="check-box"
                                uncheckedIcon="check-box-outline-blank"
                                checkedColor={colors.primary}
                                uncheckedColor={colors.tertiary}
                                size={25}
                            />
                            <Text style={styles.text}>Be A Donor</Text>
                        </Pressable>

                        <View style={{ height: '3%' }} />

                        <TouchableOpacity
                            onPress={() => createUserWithEmailAndPassword()}
                            style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                    </>}

            </View>

            {/* </LinearGradient> */}
        </SafeAreaView>
    )
}

export default BloodRegister

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    title: {
        // marginLeft: -5,
        marginTop: -10,
        marginBottom: -5,
        fontFamily: "Lexend-Regular",
        color: 'white',
        fontSize: 30,

    },
    input: {
        // backgroundColor: 
        borderBottomWidth: 2,
        padding: 0,
        fontSize: 25,
        marginHorizontal: '10%'
    },
    inputContainer: {
        gap: 30
    },
    gender: {
        fontSize: 25,
        color: '#D8BFBF',
        marginHorizontal: '10%',
    },
    genderOption: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red',
        width: '80%',
        marginTop: -7
        // height: '5%'
    },
    subGenderOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',

        width: '25%'

    },

    checkBoxContainer: {
        marginVertical: -10,
        // height: '5%',
        flexDirection: 'row',
        marginHorizontal: '4%',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '55%',
        // backgroundColor: 'red',
    },
    button: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        borderRadius: 7,
        width: '75%',
        // alignSelf: 'center',
        marginHorizontal: '12%',
        elevation: 10
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
        marginHorizontal: '10%',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    text: {
        // marginHorizontal: '10%',
        color: textColors.primary,
        fontFamily: 'Lexend-Regular',
        fontSize: 16,
    },
    flatList: {
        backgroundColor: 'white',
    },
    line: {
        height: '0.2%',
        backgroundColor: '#000000',
        width: '80%',
        alignSelf: 'center'
    },
    text1: {
        color: textColors.tertiary,
        fontFamily: 'Lexend-Regular',
        fontSize: 16,
        marginHorizontal: '10%'
    },
    headingContainer: {
        // backgroundColor: 'red',
        alignSelf: 'flex-start',
        marginHorizontal: '8%',
        height: '15%'
    },
    headingText: {
        fontFamily: "Lexend-Regular",
        color: 'white',
        // marginHorizontal: '10%',
        letterSpacing: 0.25,

        fontSize: 14.8,
        // alignSelf: 'center'
    },
    boxContainer: {
        backgroundColor: colors.side,
        width: '24%',
        borderRadius: 7,
        alignItems: 'center',
        marginHorizontal: '15%',
        padding: 4,
    },
    inputTitle: {
        marginHorizontal: '10%',
        color: textColors.primary,
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
    },
    buttonContainer: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        borderRadius: 6,
        // borderWidth: 2,
        // borderColor: '#FFFCFC',
        alignSelf: 'center',
        elevation: 10,
        width: '80%',
        paddingTop: 0,
        paddingBottom: 5,
        // paddingVertical: 5,
        height: '6%',
        // borderWidth: 20,
        // borderRadius: 20,
    },
    buttonText: {
        fontFamily: 'Lexend-Regular',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center'
    },
})