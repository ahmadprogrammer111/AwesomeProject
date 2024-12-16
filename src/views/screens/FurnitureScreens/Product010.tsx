import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Furnituresearchbar from '../../../components/Furniture_components/Furnituresearchbar'
import Icon from 'react-native-vector-icons/AntDesign'
import FurnitureArmChair from '../../../components/Furniture_components/FurnitureArmChair'
import { useNavigation } from '@react-navigation/native'

const Product010 = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.spaccer} />

            <View style={styles.searchbar}>
                <View style={styles.searchbarcontainer}>
                    <Furnituresearchbar width='100%' />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Cart12' as never)}>
                    <View style={styles.iconcart}>
                        <Icon name='shoppingcart' color='black' size={25} style={{ marginRight: 5, }} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.spaccer} />

            <View style={styles.tabcontainer}>
                <TouchableOpacity>
                    <View style={styles.tab}>
                        <Text style={styles.tabtext}>Arm Chair</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tab2}>
                        <Text style={styles.tabtext2}>Bed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tab2}>
                        <Text style={styles.tabtext2}>Table</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tab2}>
                        <Text style={styles.tabtext2}>wardrobe</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tab2}>
                        <Text style={styles.tabtext2}>lan</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.spaccer2} />
            <View>
                <View style={{ backgroundColor: '#AFAFAF', height: 208, width: '85%', borderRadius: 16, alignSelf: 'center' }} />
            </View>
            <View style={styles.spaccer2} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, }}>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#838383' }}>113 pproducts</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'black' }}>Most popular</Text>
                    <Icon name='down' size={20} color='black' />
                </View>
            </View>
            <View style={{ height: 15, }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ flexDirection: 'column', marginLeft: 32, }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Productdetailscreen11' as never)}>
                        <FurnitureArmChair />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Productdetailscreen11' as never)}>
                        <FurnitureArmChair />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', marginRight: 32 }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Productdetailscreen11' as never)}>
                        <FurnitureArmChair />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Productdetailscreen11' as never)}>
                        <FurnitureArmChair />
                    </TouchableOpacity>
                </View>

            </View>

        </View >
    )
}
export default Product010

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    iconcart: {
        width: 47,
        height: 47,
        borderRadius: 10,
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
        height: 20,
    },
    spaccer2: {
        height: 15,
    },
    // spaccer: {
    //     flex: 0.09,
    // },
    // spaccer2: {
    //     flex: 0.07,
    // },
    tab: {
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 12,
        marginRight: 10,

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
        marginRight: 10,
        paddingHorizontal: 10,
        // width: 108,
    },
    tabtext2: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    tabcontainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginHorizontal: 30,
    },


})