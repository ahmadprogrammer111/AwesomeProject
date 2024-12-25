import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import FurnitureButton2 from '../../../components/Furniture_components/FurnitureButton2'
import FurnitureButton from '../../../components/Furniture_components/FurnitureButton'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Furnitureinput from '../../../components/Furniture_components/Furnitureinput'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'



const Signup05 = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    

    const createUserWithEmailAndPassword = async () => {
        console.log('Email:', email);
        console.log('Password:', password);
        // console.log('Name:', name);
        if ( !email || !password) {
            console.log('Name, Email, or Password is empty');
            return;
        }
        try {
            auth()
            .createUserWithEmailAndPassword(email, password);
            navigation.navigate('Home08' as never);
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            if (error.code === 'auth/operation-not-allowed') {
                console.log('The email is disabled by the owner of the app.');
            }
            console.log(error);

        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.spaccer4} />
            <Furnitureheader1 name='Sign Up' width='55%' />
            <View style={styles.spaccer2} />
            <View style={styles.maininputcontainer}>
                <Text style={styles.header}>Name</Text>
                <View style={styles.textinputcontainer}>
                    <TextInput value={name} onChangeText={setName}
                        style={styles.textinput} placeholder='Text Your Name' placeholderTextColor='#838383' />
                </View>
            </View>

            <View style={styles.spaccer3} />
            <View style={styles.maininputcontainer}>
                <Text style={styles.header}>Email</Text>
                <View style={styles.textinputcontainer}>
                    <TextInput value={email} onChangeText={setEmail}
                        style={styles.textinput} placeholder='Text Your Email' placeholderTextColor='#838383' />
                </View>
            </View>

            <View style={styles.spaccer3} />
            <View style={styles.maininputcontainer}>
                <Text style={styles.header}>Password</Text>
                <View style={styles.textinputcontainer}>
                    <TextInput value={password} onChangeText={setPassword}
                        style={styles.textinput} placeholder='Text Your Email' placeholderTextColor='#838383' />
                </View>
            </View>
            {/* <Furnitureinput name='Confirm Password' placeholder='Text your Password(Optional)' /> */}
            <View style={styles.spaccer4} />

            <FurnitureButton name='Sign up' textcolor='white' bgcolor='black' screen={() => {
                createUserWithEmailAndPassword()
            }} />
            <View style={styles.spaccer3} />

            <View style={styles.orContainer}>
                <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
                <Text style={styles.partitiontext}>Or</Text>
                <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '45%' }} />
            </View>
            <View style={styles.spaccer3} />
            <FurnitureButton2 Iconname='google' name='Continue with Google' />
            <FurnitureButton2 Iconname='facebook' name='Continue with Facebook' />
        </View>
    )
}

export default Signup05

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    spaccer: {
        flex: 0.15,
    },
    spaccer2: {
        flex: 0.25,
    },
    spaccer3: {
        flex: 0.04,
    },
    spaccer4: {
        flex: 0.1,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    partitiontext: {
        color: '#838383'
    },
    maininputcontainer: {
        marginHorizontal: 25,
    },
    textinputcontainer: {
        // backgroundColor: 'blue',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#D9D9D9',
    },
    textinput: {
        color: 'black',
        fontFamily: 'Poppins-Regular'
    },
    header: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 16,
    },

})


