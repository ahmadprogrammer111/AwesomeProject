import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ActivityIndicator, TextInput, NativeEventEmitter } from 'react-native'
import React, { useCallback } from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/EvilIcons'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'
import WeatherDetail from './WeatherDetail'
import Geolocation from '@react-native-community/geolocation'

const WeatherHome = () => {

    const navigation = useNavigation<any>()

    const [searchText, setSearchText] = useState('')
    const [weatherData, setWeatherData] = useState<any>([])
    const [Loading, setLoading] = useState(true)
    const [city, setCity] = useState('')
    const [showableCity, setShowableCity] = useState('')
    const [error, setError] = useState('')
    const [position, setPosition] = useState({})




    const API_KEY = 'b297f53ea47e6377f655848ec36eb23d'





    useEffect(() => {
        getcurrentlocation()
    }, [])


    // useFocusEffect(
    //     useCallback(() => {
    //         getcurrentlocation()
    //     },
    //         [],
    //     )

    // )



    const getcurrentlocation = async () => {
        console.log(' test')
        setLoading(true);

        Geolocation.getCurrentPosition(

            (pos) => {
                console.log('your coords', pos)
                getData(pos)
                setPosition(pos)
            },
            (error: any) => {
                const err = JSON.stringify(error)
                console.log('GetCurrentPosition Error', (err))
                setError(err)
                setLoading(false)
            },
        );
    }


    // Readme VVVVVVV
    // Pass the date constant in the flatlist render function and then it will iterate that const array 


    const getData = async (pos: any) => {

        setLoading(true)
        const URL = city ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` : `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`

        try {
            const responce = await fetch(URL)
            const data = await responce.json()
            if (responce.ok) {
                setWeatherData(data)
                setError('')
            } else {
                setError(data.message || 'Something went wrong ')
                setShowableCity('')
            }
            setLoading(false)
        } catch (error: any) {
            const err = JSON.stringify(error)
            Alert.alert('Error', err)
            setError(err)
            setLoading(false)
        }
    }




    const date = new Date()
    const monthNames = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];


    // console.log('logged error', error)

    return (
        <View style={styles.container}>

            {Loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size='large' color='white' /></View> :
                <>
                    {error ?
                        <View style={{ flex: 1, justifyContent: 'center' }}>

                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '70%', backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', }}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder='Enter Region'
                                    placeholderTextColor='grey'
                                    value={city}
                                    onChangeText={(Text) => {
                                        setCity(Text)
                                    }}
                                    maxLength={20}
                                />

                                <TouchableOpacity onPress={() => {
                                    getcurrentlocation()
                                    setShowableCity(city)
                                }
                                } style={styles.searchcontainer}

                                >
                                    <Icon name='search' size={20} color={'#444E72'} style={styles.search} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 0.2 }} />

                            <Text style={styles.errortext}>{error}</Text>
                        </View>
                        : <View style={styles.container2}>
                            <Image source={require('../../../assets/images/Vector_11.png')} style={{ position: 'absolute', right: 0 }} />
                            <Image source={require('../../../assets/images/Vector_12.png')} style={{ position: 'absolute', left: 0, top: 70, }} />
                            <View style={{ height: 25 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Icon name='location' size={25} color='white' />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', fontFamily: 'Overpass-Regular', fontSize: 20, marginHorizontal: 20 }}>{showableCity}</Text>
                                    <TouchableOpacity>
                                        <Icon2 name='chevron-small-down' size={20} color='white' />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{ alignSelf: 'center' }}>
                                    <Icon name='bell' color='white' size={20}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: 10 }} />

                            <View style={styles.textinputcontainer}>
                                <TextInput
                                    style={styles.textinput}
                                    placeholder='Enter Region'
                                    value={city}
                                    placeholderTextColor='grey'

                                    onChangeText={(Text) => {
                                        setCity(Text)
                                    }}

                                    maxLength={20}
                                />

                                <TouchableOpacity onPress={() => {
                                    getcurrentlocation()
                                    setShowableCity(city)
                                }} style={styles.searchcontainer}>
                                    <Icon name='search' size={20} color='#444E72' style={styles.search} />
                                </TouchableOpacity>

                            </View>
                            {weatherData?.weather[0]?.icon ? <Image
                                style={{ alignSelf: 'center' }}
                                onError={(e) => console.log('Image Load Error:', e.nativeEvent.error)}
                                height={200} width={200}
                                source={{ uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png` }} />
                                : <Text style={styles.text}>Loading icon....</Text>
                            }


                            <View style={styles.weatherdatacontainer}>
                                <Text style={styles.date}>Today, {date.getDate()} {monthNames[date.getMonth()]}</Text>
                                <Text style={styles.temp}>{weatherData?.main?.temp}°C</Text>
                                <Text style={styles.weathercondition}>{weatherData?.weather[0].main}</Text>

                                <View style={styles.weatherdetailscontainer}>
                                    <View style={{ justifyContent: 'space-between', marginVertical: 13 }}>
                                        <Icon3 name='wind' size={20} color='white' />
                                        <Icon4 name='droplet' size={20} color='white' />
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Text style={styles.weatherdetails}>    Wind     |    {weatherData?.wind?.speed} km/h</Text>
                                        <Text style={styles.weatherdetails}>    Hum      |    {weatherData?.main?.humidity}%</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ height: 50 }} />

                            <TouchableOpacity onPress={
                                () => navigation.navigate('WeatherDetail' as never, { data: city, position })
                            }
                                style={styles.bottombutton}>
                                <Text style={styles.buttontext}>Forecast report</Text>
                                <Icon2 name='chevron-small-up' size={20} color='#444E72'
                                    style={{ marginRight: 23 }}
                                />

                            </TouchableOpacity>

                            <View style={{ flex: 2 }} />

                        </View>
                    }
                </>
            }
        </View>
    )
}


export default WeatherHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49a3f3',
    },
    container2: {
        flex: 1
    },
    errortext: {
        color: '#444E72',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        fontFamily: 'Overpass-Regular',
        padding: 20,
    },
    textinput: {
        marginLeft: 10,
        // backgroundColor: 'white',
        width: '70%',
        color: '#444E72',
        fontFamily: 'Overpass-Regular',
        // backgroundColor: 'red',
    },
    textinputcontainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
    },
    searchcontainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginRight: 10,
        // backgroundColor: 'blue',
        height: '100%',
        width: '15%',
    },
    search: {
        alignSelf: 'center',
        marginTop: 15,
    },
    bottombutton: {
        height: 64, width: 204,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'space-evenly'
    },
    buttontext: {
        color: '#444E72',
        fontFamily: 'Overpass-Regular',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 10,
    },
    weatherdetails: {
        color: 'white',
        fontFamily: 'Overpass-Regular',
        fontSize: 16,
        marginVertical: 10,
        marginLeft: 0,
    },
    text: {
        color: 'white',
        fontFamily: 'Overapass-Regular',
    },
    weatherdetailscontainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
        width: '60%'
    },
    weatherdatacontainer: {
        backgroundColor: '#88c4f4',
        width: 330,
        height: 300,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#BFBFBFB2'
    },
    date: {
        color: 'white',
        fontFamily: 'Overpass-Regular',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    temp: {
        // backgroundColor: 'red',
        // height: '30%',
        color: 'white',
        fontFamily: 'Overpass-Regular',
        fontSize: 65,
        textAlign: 'center',

    },
    weathercondition: {
        color: 'white',
        fontFamily: 'Overpass-Regular',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    }
})




