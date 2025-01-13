import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { CheckBox, Button as Button1 } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import Auth from '@react-native-firebase/auth'
import { CommonActions, useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { DefaultTheme, Dialog, Menu, Portal, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Entypo'
import { addEmail, addUser } from '../../../redux/Slices/BloodSlice'



const BloodRegister = () => {

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

    const [open, setOpen] = useState(false);
    const [error, setError] = useState('')
    const navigation = useNavigation();
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


const bio= ''

    const createUserWithEmailAndPassword = async () => {
        setIsLoading(true)

        if (!checkEmail(email)) {
            Alert.alert('Enter Correct Email!!');
            setIsLoading(false);
            return;
        } else {
            console.log('Email:', email);
            console.log('Email:', name);
            console.log('Password:', password);
            if (!email || !password || !name || !city || !gender || !bloodGroup) {
                console.log('Email or Password or Name is empty');
                Alert.alert('Email or Password is empty');
                return setIsLoading(false);
            }
            else {
                dispatch(addEmail(email))
                Auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User Signed Up! sucessfully')
                        firestore()
                            .collection('BloodUsers')
                            .add({
                                name: name,
                                bio: bio,
                                email: email,
                                password: password,
                                city: city,
                                gender: gender,
                                type: donor ? 'donor' : 'recepient',
                                bloodGroup: bloodGroup,
                                createdAt: new Date().toISOString()
                            });

                        setIsLoading(false)
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'BloodMenu' }],
                            })
                        );
                    })
                    .catch((error) => {
                        if (error.code == 'auth/email-already-in-use') {
                            console.log('That email address is already in use!')
                            // Alert.alert('That email address is already in use!')
                        }
                        if (error.code == 'auth/invalid-email') {
                            console.log('That email address is invalid!!')
                            // Alert.alert('That email address is invalid!!')
                        }
                        if (error.code == 'auth/operation-not-allowed') {
                            console.log('The email is disabled by the owner of the app.')
                            // Alert.alert('The email is disabled by the owner of the app.')
                        }

                        const err = `Pls check your Email:${error.code}: ${error.message}`
                        setError(err)
                        setOpen(true)
                        console.log(error)

                    })
            }
        }
    }



    return (

        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>

                {isLoading ? <View><Button1 title="Solid" type="solid" loading /></View> :

                    <>
                        <View style={{ height: '8%' }} />

                        <Text style={styles.title}>Registration</Text>

                        <View style={{ height: '5%' }} />

                        <View style={styles.inputContainer}>

                            <TextInput
                                value={name}
                                onChangeText={setName}
                                placeholder='Name'
                                placeholderTextColor='#D8BFBF'
                                style={styles.input}
                            />


                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder='Email'
                                placeholderTextColor='#D8BFBF'
                                style={styles.input}
                            />

                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder='Password'
                                placeholderTextColor='#D8BFBF'
                                style={styles.input}
                            />
                        </View>
                        <View style={{ height: '2%' }} />


                        {renderMenu(bloodGroups, 'blood Group', visible, setVisible, lineLayout)}
                        <Text style={styles.text1}>{bloodGroup ? bloodGroup : null}</Text>

                        <View style={styles.line} onLayout={(event) => setLineLayout(event.nativeEvent.layout)} />

                        <View style={{ height: '3%' }} />

                        {renderMenu(cities, 'city', visible1, setVisible1, lineLayout1)}
                        <Text style={styles.text1}>{city ? city : null}</Text>
                        <View style={styles.line} onLayout={(event) => setLineLayout1(event.nativeEvent.layout)} />



                        <View style={{ height: '2%' }} />
                        <Text style={styles.gender}>Select Gender</Text>

                        <View style={styles.genderOption}>
                            <Pressable onPress={() => setGender('male')}
                                style={styles.subGenderOptions}>
                                <CheckBox
                                    // title='Male'
                                    checked={gender == 'male'}
                                    onPress={() => setGender('male')}
                                    checkedIcon="dot-circle-o"
                                    checkedColor='black'
                                    uncheckedColor='#D8BFBF'
                                    uncheckedIcon="circle-o"
                                />
                                <Text style={{
                                    fontSize: 25,
                                    color: gender == 'male' ? 'black' : '#FFFFFF',
                                }}>Male</Text>
                            </Pressable>

                            <Pressable onPress={() => setGender('female')}
                                style={styles.subGenderOptions}>
                                <CheckBox
                                    checked={gender === 'female'}
                                    onPress={() => setGender('female')}
                                    checkedColor='black'
                                    uncheckedColor='#D8BFBF'
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                />
                                <Text style={{
                                    fontSize: 25,
                                    color: gender == 'female' ? 'black' : '#FFFFFF',
                                }}>Female</Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={() => setDonor(!donor)}
                            style={styles.checkBoxContainer}>
                            <CheckBox
                                checked={donor}
                                onPress={() => setDonor(!donor)}
                                iconType="material-icons"
                                checkedIcon="check-box"
                                uncheckedIcon="check-box-outline-blank"
                                uncheckedColor='black'
                                checkedColor="#D8BFBF"
                                size={40}
                            />
                            <Portal>
                                <Dialog visible={open} onDismiss={() => setOpen(false)} >
                                    <Dialog.Title>Alert!</Dialog.Title>
                                    <Dialog.Content>
                                        <Text>{error}</Text>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button onPress={() => setOpen(false)}>ok</Button>
                                    </Dialog.Actions>
                                </Dialog>
                            </Portal>
                            <Text style={styles.genderText}>Be A Donor</Text>
                        </Pressable>
                        <View style={{ height: '3%' }} />
                        <TouchableOpacity style={styles.button} onPress={() => createUserWithEmailAndPassword()}>
                            <Text style={styles.buttonText}>Create Account</Text>
                        </TouchableOpacity>
                    </>}
            </LinearGradient>
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
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold'
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
    },
    subGenderOptions: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    genderText: {
        fontSize: 25,
        color: '#FFFFFF',
        // marginHorizontal: '10%',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        marginHorizontal: '4%',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '55%'
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
    buttonText: {
        color: '#000000',
        fontSize: 25,
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
    text: {
        fontSize: 19,
        color: 'black',
    },
    flatList: {
        backgroundColor: 'white',
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