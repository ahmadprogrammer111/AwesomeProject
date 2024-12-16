import { StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Furnituresearchbar from '../../../components/Furniture_components/Furnituresearchbar'
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType'
import { useNavigation } from '@react-navigation/native'


const Home08 = () => {
    const navigation = useNavigation()
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View >

                <View style={styles.spaccer} />

                <View style={styles.searchbar}>
                    <View style={styles.searchbarcontainer}>
                        <Furnituresearchbar width='100%' marginh='60' />
                    </View>
                    <TouchableOpacity
                        style={styles.iconcart} onPress={() => navigation.navigate('Cart12' as never)}>
                        {/* <View > */}
                        <Icon name='shoppingcart' color='black' size={25} style={{ marginRight: 5, }} />
                        {/* </View> */}
                    </TouchableOpacity>
                </View>

                <View style={styles.spaccer} />

                <View style={styles.tabcontainer}>
                    <TouchableOpacity>
                        <View style={styles.tab}>
                            <Text style={styles.tabtext}>Living Room</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <View style={styles.tab2}>
                            <Text style={styles.tabtext2}>Dining Room</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <View style={styles.tab2}>
                            <Text style={styles.tabtext2}>Bed Room</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.spaccer2} />


                <ScrollView>
                    <View style={styles.mainbodycontainer}>
                        <View>
                            <View>
                                <View style={{ backgroundColor: '#AFAFAF', height: 240, width: 160, borderRadius: 20, }} />
                                <Text style={styles.Titlename}>Fresh space with </Text><Text style={styles.Titlename}>plants</Text>
                            </View>
                            < View>
                                <View style={{ backgroundColor: '#AFAFAF', height: 240, width: 160, borderRadius: 20, }} />
                                <Text style={styles.Titlename}>Fresh space with</Text><Text style={styles.Titlename}>plants</Text>
                            </View>
                        </View>

                        <View>
                            < View>
                                <View style={{ backgroundColor: '#AFAFAF', height: 148, width: 160, borderRadius: 20, }} />
                                <Text style={styles.Titlename}>Fresh space with</Text><Text style={styles.Titlename}>plants</Text>
                            </View>
                            < View>
                                <View style={{ backgroundColor: '#AFAFAF', height: 240, width: 160, borderRadius: 20, }} />
                                <Text style={styles.Titlename}>Fresh space with</Text><Text style={styles.Titlename}>plants</Text>
                            </View>


                        </View>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Home08

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    iconcart: {
        width: 47,
        height: 47,
        borderRadius: 47,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6'
    },
    searchbarcontainer: {
        // backgroundColor: 'red',
        width: '85%',
    },
    searchbar: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    spaccer: {
        height: 15,
    },
    spaccer2: {
        height: 18,
    },
    tab: {
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 12,
        height: 32,
        width: 108,
    },
    tabtext: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    tab2: {
        justifyContent: 'center',
        backgroundColor: '#E6E6E6',
        borderRadius: 12,
        height: 32,
        width: 108,
    },
    tabtext2: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    tabcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    Titlename: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    mainbodycontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
    }

})