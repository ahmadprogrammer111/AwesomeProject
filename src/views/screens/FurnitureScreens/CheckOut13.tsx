import { ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FurnitureArmChair from '../../../components/Furniture_components/FurnitureArmChair'
import Furnitureheader1 from '../../../components/Furniture_components/Furnitureheader1'
import Sofa from '../../../components/Furniture_components/Sofa'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
// import Icon2 from 'react-native-vector-icons/'

const CheckOut13 = () => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <View style={styles.spaccer} />
                <Furnitureheader1 name='Check Out' width='60%' />
                <View style={styles.spaccer} />

                <View style={{ height: '10%', marginBottom: 40, }}>
                    <Sofa />
                </View>
                <View style={styles.spaccer} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>
                    <Text style={styles.heading}>Delivery information</Text>
                    <TouchableOpacity>
                        <Icon name='edit-3' size={20} color='#3D87CA' />
                    </TouchableOpacity>
                </View>

                <View style={styles.textcontainer}>
                    <Text style={styles.text}><Text style={{ fontWeight: '700' }}>Name:</Text> Eren Yeager</Text>
                    <Text style={styles.text}><Text style={{ fontWeight: '700' }}>Phone number:</Text>+837 736360</Text>
                    <Text style={styles.text}><Text style={{ fontWeight: '700' }}>Address:</Text>  LoogChoob the city Homestay, </Text><Text style={styles.text}>Bangkok</Text>
                </View>

                <View>
                    <Text style={[styles.heading, { margin: 20, }]}>Scheduling</Text>
                </View>


                <View style={{ flexDirection: 'row', marginHorizontal: 20, }}>
                    <View style={{ marginRight: 40, }}>
                        <Text style={styles.inputlabel}>Pick date</Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder='DD/MM/YYYY'
                            placeholderTextColor='#838383'
                            maxLength={6}
                        />
                    </View>
                    <View style={{ marginLeft: 40, }}>
                        <Text style={styles.inputlabel}>Pick Time</Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder='DD/MM/YYYY'
                            placeholderTextColor='#838383'
                            maxLength={6}

                        />
                    </View>
                </View>

                <View style={styles.straightline} />

                <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.text}>Delivery charges (2,3km)</Text>
                        <Text style={styles.text}>Other fees</Text>
                        <Text style={{ color: 'blue', fontSize: 14, fontFamily: 'Poppins-Regular' }}>Total</Text>
                    </View>
                    <View>
                        <Text style={[styles.text2, { textAlign: 'right' }]}>$145</Text>
                        <Text style={[styles.text2, { textAlign: 'right' }]}>$15</Text>
                        <Text style={{ color: 'blue', fontSize: 16, fontFamily: 'Poppins-Regular', textAlign: 'right' }}>$160</Text>
                    </View>
                </View>
                <View><Text style={[styles.heading, { marginHorizontal: 20, marginTop: 10 }]}>Payment methods</Text></View>
                <View style={styles.spaccer2} />

                <View style={styles.inputcontainer}>

                    <Icon name='credit-card' color='black' size={20} style={{ alignSelf: 'center' }} />
                    <TextInput
                        style={styles.bottominput}
                        placeholder='Mastercard' placeholderTextColor='#838383'
                    />
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Icon2 name='right' color='#838383' size={20} />
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default CheckOut13

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    spaccer: {
        height: 20,
    },
    spaccer2: {
        height: 10,
    },
    textcontainer: {
        borderWidth: 1.5,
        borderColor: '#F5F5F5',
        borderRadius: 20,
        height: '16%',
        marginHorizontal: 20,
        backgroundColor: 'transparent',
        padding: 10,
        justifyContent: 'space-evenly'
    },
    heading: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: 'black',
        // fontWeight: '700'
    },
    inputlabel: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        fontSize: 12,
    },
    textinput: {
        // backgroundColor: 'red',
        width: '150%',
        borderWidth: 2,
        borderColor: '#E6E6E6',
        borderRadius: 12,
        color: 'black',
        fontFamily: 'Poppins-Regular'
    },
    straightline: {
        height: 1,
        backgroundColor: '#E6E6E6',
        marginHorizontal: 20,
        marginTop: 25,
        marginBottom: 8,
    },
    text: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    },
    text2: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 12
    },
    bottominput: {
        // paddingTop: 20,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '90%'

    },
    inputcontainer: {
        height: '7%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 12,
        marginHorizontal: 20,

    }


})