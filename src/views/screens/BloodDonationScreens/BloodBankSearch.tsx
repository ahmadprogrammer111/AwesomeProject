



import { FlatList, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'
import { Button, Menu, MD3LightTheme } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
// import { color } from 'react-native-elements/dist/helpers'
// import { colors } from 'react-native-elements'




const BloodBankDonorsSearch = () => {

    const [selectedIndex, setIndex] = useState(9);


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


    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    // const [visible2, setVisible2] = useState(false);
    // const [visible3, setVisible3] = useState(false);




    const [bloodGroup, setBloodGroup] = useState('')
    const [city, setCity] = useState('')

    useEffect(() => {
        console.log(bloodGroup, city)


    }, [bloodGroup, city])



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

            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>

                <View style={{ height: '8%' }} />

                <Text style={styles.title}>Blood Bank</Text>

                <View style={{ height: '6%' }} />

                <View style={styles.mainContainer}>

                    <View style={{ height: '6%' }} />

                    {renderMenu(bloodGroups, 'blood Group', visible, setVisible, lineLayout)}
                    <Text style={styles.text1}>{bloodGroup ? bloodGroup : null}</Text>


                    <View style={styles.line} onLayout={(event) => setLineLayout(event.nativeEvent.layout)} />

                    <View style={{ height: '6%' }} />


                    {renderMenu(cities, 'city', visible1, setVisible1, lineLayout1)}
                    <Text style={styles.text1}>{city ? city : null}</Text>



                    <View style={styles.line} onLayout={(event) => setLineLayout1(event.nativeEvent.layout)} />

                    <View style={{ height: '6%' }} />
                    <View style={{ marginHorizontal: '10%', }}>
                        <Text style={styles.text}>Enter Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.line} />

                    <View style={{ height: '3%' }} />


                    <View style={styles.genderOption}>
                        <Pressable onPress={() => setIndex(0)}
                            style={styles.subGenderOptions}>
                            <CheckBox
                                checked={selectedIndex === 0}
                                onPress={() => setIndex(0)}
                                checkedIcon="dot-circle-o"
                                checkedColor='black'
                                uncheckedColor='grey'
                                uncheckedIcon="circle-o"
                            />
                            <Text style={{
                                fontSize: 25,

                                color: selectedIndex == 0 ? 'black' : 'grey',
                            }}>Male</Text>
                        </Pressable>

                        <Pressable onPress={() => setIndex(1)}
                            style={styles.subGenderOptions}>
                            <CheckBox
                                checked={selectedIndex === 1}
                                onPress={() => setIndex(1)}
                                checkedColor='black'
                                uncheckedColor='grey'
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            />

                            <Text style={{
                                fontSize: 25,
                                color: selectedIndex == 1 ? 'black' : 'grey',
                            }}>Female</Text>
                        </Pressable>
                    </View>
                    <View style={{ height: '5%' }} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Search Bloodbank</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
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
    title: {
        color: '#680606',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    mainContainer: {
        alignSelf: 'center',
        height: '50%',
        width: '90%',
        backgroundColor: '#D9D9D9',
        elevation: 10,
        borderRadius: 20
    },
    section: {
        // backgroundColor: 'red',
        marginHorizontal: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginVertical: 10,
    },
    text: {
        fontSize: 19,
        color: 'black',
    },
    text1: {
        fontSize: 19,
        color: 'black',
        marginHorizontal: '10%'
    },
    line: {
        height: 1,
        backgroundColor: '#000000',
        width: '80%',
        alignSelf: 'center'
    },
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
})

