import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/MaterialIcons'



const Message14 = () => {
    return (
      
            <View style={styles.container}>
                <View style={styles.spaccer} />

                <View style={styles.headercontainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.headerlogo} />
                        <View >
                            <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', fontSize: 20, }}>Zeke Yeager</Text>
                            <Text style={{ color: '#09CA67', fontFamily: 'Poppins-Regular', marginTop: -10, }}>Online</Text>
                        </View>
                    </View>
                    <Icon name='phone' size={22} color='black' />
                </View>

                <View style={styles.straightline} />
                <View style={{ height: 15, }} />

                <Text style={{ color: '#838383', fontSize: 11, fontFamily: 'Poppins_Regular', alignSelf: 'center' }}> Today</Text>
                <View style={styles.spaccer2} />

                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <View style={{
                        alignSelf: 'flex-end',
                        backgroundColor: '#007DFC',
                        height: 40,
                        width: '45%',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                    }} >
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', alignSelf: 'center', marginTop: 10, }} >Hello!!! I need advice</Text>
                    </View>

                    <View style={[styles.circle, { alignSelf: 'flex-end', marginHorizontal: 5, }]} />

                </View>
                <View style={styles.spaccer} />


                <View style={{ flexDirection: 'row', }}>
                    <View style={[styles.circle, { alignSelf: 'flex-end', marginHorizontal: 5, }]} />

                    <View style={{
                        alignSelf: 'flex-end',
                        backgroundColor: 'white',
                        height: 150,
                        width: '80%',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        padding: 5,
                    }} >
                        <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', alignSelf: 'center', marginTop: 10, }} >Hello! Thank you for contacting Glamorous. This is an automated message. Please submit your request. We will try to respond as quickly as possible. Thank you for trusting and choosing our products!</Text>
                    </View>
                </View>
                <View style={styles.spaccer} />

                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', marginLeft: 15 }}>
                    <View style={{
                        alignSelf: 'flex-end',
                        backgroundColor: '#007DFC',
                        height: 65,
                        width: '88%',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                    }} >
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', alignSelf: 'center', marginTop: 10, }} >I want to advise on a lipstick suitable for people with average skin</Text>
                    </View>

                    {/* <View style={[styles.circle, { alignSelf: 'flex-end', marginHorizontal: 5,  }]} /> */}
                </View>
                <View style={styles.spaccer} />

                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <View style={{
                        alignSelf: 'flex-end',
                        backgroundColor: '#007DFC',
                        height: 40,
                        width: '65%',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                    }} >
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', alignSelf: 'center', marginTop: 10, }} >Could you recommend for me?</Text>
                    </View>

                    <View style={[styles.circle, { alignSelf: 'flex-end', marginHorizontal: 5, }]} />
                </View>

                <View style={styles.spaccer} />


                <View style={{ flexDirection: 'row', }}>
                    <View style={[styles.circle, { alignSelf: 'flex-end', marginHorizontal: 5, }]} />

                    <View style={{
                        alignSelf: 'flex-end',
                        backgroundColor: 'white',
                        height: 65,
                        width: '80%',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingHorizontal: 6,
                    }} >
                        <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', alignSelf: 'center', marginTop: 10, }} >I recommend you try looking into the Mac brand's lipstick line</Text>
                    </View>
                </View>
                <View style={styles.spaccer} />


                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <View style={{
                        alignSelf: 'flex-end',
                        backgroundColor: '#007DFC',
                        height: 40,
                        width: '30%',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                    }} >
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', alignSelf: 'center', marginTop: 10, }} >Oh, thank u!</Text>
                    </View>

                    <View style={[styles.circle, { alignSelf: 'flex-end', marginHorizontal: 5, }]} />
                    <View>
                    </View>
                </View>


                <View style={{ height: 10, }} />

                <View style={{ height: 130, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', marginVertical: 20, marginLeft: 20, }}>
                        <TouchableOpacity>
                            <Icon2 name='sticker-emoji' size={20} color='#838383' style={{ marginHorizontal: 5, }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='image' size={20} color='#838383' style={{ marginHorizontal: 5, }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon5 name='attach-file' size={20} color='#838383' style={{ marginHorizontal: 5, }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon3 name='idcard' size={20} color='#838383' style={{ marginHorizontal: 5, }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='more-vertical' size={20} color='#838383' />
                        </TouchableOpacity>
                    </View>

                    <View style={
                        styles.inputcontainer}>
                        <TextInput style={styles.textinput2} placeholder='Type something' placeholderTextColor='#838383' />
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Icon4 name='send-outline' size={20} color='#838383' />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
       
    )
}

export default Message14

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    headerlogo: {
        backgroundColor: '#AFAFAF',
        // height: '150%',
        width: '22.5%',
        marginRight: 5,
        borderWidth: 3,
        borderRadius: 80,
        borderColor: '#09CA67'
    },
    headercontainer: {
        flexDirection: 'row',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    spaccer: {
        height: 15,
    },
    spaccer2: {
        height: 30,
    },
    straightline: {
        height: 1,
        backgroundColor: '#E6E6E6',
        marginTop: 15,
        marginBottom: 8,
    },
    circle: {
        backgroundColor: '#AFAFAF',
        height: 30,
        width: 30,
        borderRadius: 30,
    },
    textinput2: {
        padding: 10,
        width: '90%',
        color: 'black',
        fontFamily: 'Poppins-Regular'
    },
    inputcontainer: {
        // height: '7%',

        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        // borderRadius: 12,
        // marginHorizontal: 20,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 27,
        borderRadius: 10,
        //  flexDirection:'row'

    }
})