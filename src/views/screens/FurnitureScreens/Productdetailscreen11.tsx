import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Productdetailscreen11 = () => {
    const navigation = useNavigation()

    const [color, setColor] = useState(false)

const togglecolor=()=>{
    
    setColor(!color)
}
    return (
        <View style={styles.container}>


            <View style={{ backgroundColor: '#AFAFAF', height: 265 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.backContainer}>
                            <Icon name='arrow-left' size={15} color='#1D1D1D' style={styles.icon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => togglecolor() }
                    >
                        <View style={{ margin: 40, }}>
                            <Icon2 name='bookmark-alt' color={color ? '#007DFC' : '#E6E6E6'} size={25} />
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 120, }} />
                <View style={styles.boxcontainer}>
                    <View style={styles.boxes} />
                    <View style={styles.boxes} />
                    <View style={styles.boxes} />
                    <View style={styles.boxes} />
                </View>
            </View>

            <View style={{ height: 40, }} />


            <Text
                style={{
                    fontSize: 18,
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                    marginTop: 18,
                    marginHorizontal: 20,
                }}>Modern Armchair
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: 'Poppins-regular',
                        color: 'blue',
                        marginHorizontal: 20,
                    }}>$145
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon3 name='star' size={15} color='#FCD400' />
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Poppins-regular',
                            color: '#838383',
                            marginRight: 20,
                        }}>4.7
                    </Text>
                </View>
            </View>

            <View style={{ height: 20 }} />

            <View style={styles.tabcontainer}>
                <View style={styles.tab}>
                    <Text style={styles.tabtext}>Description</Text>
                </View>
                <View style={styles.tab2}>
                    <Text style={styles.tabtext2}>How to use</Text>
                </View>
                <View style={styles.tab2}>
                    <Text style={styles.tabtext2}>Reviews</Text>
                </View>
            </View>
            <View style={{
                margin: 20,
                width: '93%'
            }}>
                <Text style={styles.text}>Tincidunt dui, faucibus leo ultrices sit integer vitae</Text><Text style={styles.text}>ultricies proin ut id eu tincidunt diam condimentum</Text><Text style={styles.text}> massa lacinia tellus...<Text style={{ color: 'blue', fontFamily: 'Poppins-Regular' }}>Read more</Text>
                </Text>
            </View>

            <View style={{ margin: 20, }}>
                <Text style={styles.props}>Origin:<Text style={styles.innerprops}>Veitnam</Text> </Text>
                <Text style={styles.props}>Material:<Text style={styles.innerprops}>Velvet ceiling fabric</Text> </Text>
                <Text style={styles.props}>Color: <Text style={styles.innerprops}>Black, Gray & White</Text> </Text>
                <Text style={styles.props}>Size: <Text style={styles.innerprops}>70x70x100 cm</Text> </Text>
                <Text style={styles.props}>Weight: <Text style={styles.innerprops}>2350g</Text> </Text>
            </View>
            <View style={{ flex: 0.3, }} />


            <View style={{ backgroundColor: 'white', height: '11%', width: '100%', justifyContent: 'center' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, }}>
                    <View>

                        <Text style={{ color: '#838383', }}>Quantity: 1, Color: Black</Text>
                        <Text style={{ color: '#007DFC', fontSize: 20, }}>$145</Text>
                    </View>

                    <TouchableOpacity style={styles.addtocart} onPress={() => navigation.navigate('Cart12' as never)}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Productdetailscreen11

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9f9'
    },
    backContainer: {
        height: 45,
        width: 45,
        borderRadius: 45,
        // backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        margin: 30,
    },
    icon: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    boxes: {
        backgroundColor: '#AFAFAF',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 10,
        height: 78,
        width: 78,
    },
    boxcontainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    tab: {
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
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
        backgroundColor: '#f8f9f9',
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
    text: {
        color: 'black', fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    addtocart: {

        backgroundColor: 'black',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 30,
        borderRadius: 12
    },
    props: {
        color: 'grey',
        fontFamily: 'Poppins-Regular'
    },
    innerprops: {
        color: 'black',
        fontFamily: 'Poppins-Regular'
    }

})