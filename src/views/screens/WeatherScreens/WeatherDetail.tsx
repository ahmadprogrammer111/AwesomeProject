import { Alert, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Cloud from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback } from 'react'




const WeatherDetail = ({ route }: any) => {
    const { data, position } = route.params
    console.log('My data', data)
    console.log('my pos', position)
    const [weatherData, setWeatherData] = useState<any>([])

    const [city, setCity] = useState('')
    const [Loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [selectedItem, setSelectedItem] = useState<string | null>(null)


    console.log('city', city)

    const date = new Date()
    const mon = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


    useFocusEffect(
        useCallback(
            () => {
                console.log('got city', data)
            },
            [],
        )
    )

    useFocusEffect(
        useCallback(() => {

            getstoreddata()
            console.log('your data got', data)
        }, [data || position])
    )


    const API_KEY = 'b297f53ea47e6377f655848ec36eb23d'

    const getstoreddata = async () => {
        setLoading(true)
        const URL = data ? `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${API_KEY}&units=metric`
            : `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`


        try {
            const response = await fetch(URL)
            const Data = await response.json()
            console.log('data=======>', Data)
            if (response.ok) {
                setWeatherData(Data)
                setError('')
            } else {
                // const errmsg = error || JSON.stringify(error)
                setError(Data.message)
            } setLoading(false)


        } catch (error: any) {


            console.error('Error details:', error);


            Alert.alert('Error', error);
            setError(error);

        }
    }

    // console.log('ispressed', selectedItem)

    const renderItem = ({ item, index }: any) => {
        // console.log('date', item.dt_txt)
        const date = new Date(item.dt_txt)
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return (
            
            <Pressable style={[styles.flatlistmaincontainer, { backgroundColor: selectedItem === index ? '#88c4f4' : 'transparent', borderWidth: selectedItem === index ? 1 : 0, borderColor: '#FFFFFF' }]} 
            onPress={() => setSelectedItem(index)} >
                <View style={styles.tabitem}>
                    <Text >{item.main.temp}°C</Text>
                    {item?.weather[0]?.icon ? <Image
                                style={{ alignSelf: 'center' }}
                                onError={(e) => console.log('Image Load Error:', e.nativeEvent.error)}
                                height={60} width={60}
                                source={{ uri: `https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@4x.png` }} />
                                : <Text style={styles.text}>Loading icon....</Text>
                            }
                    <Text>{time}</Text>
                </View>
            </Pressable>
            //  </View>
        )
    }



    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {Loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size='large' color='white' /></View> :
                <>
                    <View style={{ flex: 2 }} />

                    <Image source={require('../../../assets/images/Vector_11.png')} style={{ position: 'absolute', right: 0 }} />
                    <Image source={require('../../../assets/images/Vector_12.png')} style={{ position: 'absolute', left: 0, top: 70, }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, }}>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.mainheadercontainer}>
                                <Icon name='chevron-left' color='white' size={25} />
                                <Text style={styles.back}>Back</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icon2 name='setting' size={20} color='white' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1.5 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, }}>
                        <Text style={styles.today}>Today</Text>
                        <Text style={{ fontFamily: 'Overpass-SemiBold', color: 'white', fontSize: 18, fontWeight: '400' }}>{mon[date.getMonth()]},{date.getDate()}</Text>
                    </View>

                    <View style={{ height: 15 }} />

                    <FlatList data={weatherData.list}
                        renderItem={renderItem as any}
                        horizontal={true}
                        style={styles.flatlist}

                    />



                    <View style={{ flex: 2, }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, }}>
                        <Text style={{ fontFamily: 'Overpass-SemiBold', color: 'white', fontSize: 24, }}>Next Forecast</Text>
                        <Icon2 name='calendar' color='white' size={20} />
                    </View>

                    <View style={{ flex: 1 }} />

                    <View style={{ height: 300, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, }}>
                            <Text style={{ fontFamily: 'Overpass-Regular', fontSize: 20, color: 'white' }}>Sep,13</Text>
                            <Cloud name='cloud-sun' size={20} color='white' />
                            <Text style={{ fontSize: 20, color: 'white' }}>21°</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, }}>
                            <Text style={{ fontFamily: 'Overpass-Regular', fontSize: 20, color: 'white' }}>Sep,13</Text>
                            <Cloud name='cloud-rain' size={20} color='white' />
                            <Text style={{ fontSize: 20, color: 'white' }}>21°</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, }}>
                            <Text style={{ fontFamily: 'Overpass-Regular', fontSize: 20, color: 'white' }}>Sep,13</Text>
                            <Icon3 name='sunny' size={25} color='#fab422' />
                            <Text style={{ fontSize: 20, color: 'white' }}>21°</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, }}>
                            <Text style={{ fontFamily: 'Overpass-Regular', fontSize: 20, color: 'white' }}>Sep,13</Text>
                            <Cloud name='cloud' size={20} color='white' />
                            <Text style={{ fontSize: 20, color: 'white' }}>21°</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, }}>
                            <Text style={{ fontFamily: 'Overpass-Regular', fontSize: 20, color: 'white' }}>Sep,13</Text>
                            <Cloud name='cloud-moon' size={20} color='white' />
                            <Text style={{ fontSize: 20, color: 'white' }}>21°</Text>
                        </View>
                    </View>

                    <View style={{ flex: 2 }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Icon3 name='sunny' size={20} color='white' style={{ margin: 5 }} />
                        <Text style={{ fontWeight: '400', fontFamily: 'Overpass-Regular', color: 'white', fontSize: 18, }}>AccuWeather</Text>
                    </View>

                    <View style={{ flex: 2 }} />
                </>
            }
        </View>
    )
}

export default WeatherDetail

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#49a3f3'
    },
    tabitem: {
        height: '100%',
        justifyContent: 'space-between',
        // backgroundColor:'red',
        paddingVertical: 0,
        alignItems: 'center',
        paddingHorizontal: 8
        // width: '140%'
    },
    flatlistmaincontainer: {
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingVertical: 13,
        // width: '20%'
    },
    mainheadercontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatlist: {
        // backgroundColor: 'orange',
        height: '13%',
        marginHorizontal: 25
    },
    back: {

        fontFamily: 'Overpass-Regular',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
    },
    today: {
        fontFamily: 'Overpass-Regular',
        color: 'white',
        fontSize: 24,
        fontWeight: '900'
    },
    text: {
        color: 'white',
        fontFamily: 'Overapass-Regular',
    },
})