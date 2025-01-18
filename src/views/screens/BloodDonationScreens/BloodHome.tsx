import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Ionicons'
import { ConnectivityContext } from '../../../Context/Connection'
import { addUser } from '../../../redux/Slices/BloodSlice'
import { useDispatch, useSelector } from 'react-redux'
import { colors, textColors } from '../../../components/BloodComponent/BloodColors'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ActivityIndicator, Button, Dialog, Portal } from 'react-native-paper'
import { Button as Button1 } from 'react-native-elements'


const BloodHome = ({ route }: any) => {

    const { connected, checkNetwork, setOpen } = useContext(ConnectivityContext);

    const { data, } = route?.params || {}

    console.log('data as props', data || undefined)

    const [OpenDialog, setOpenDialog] = useState(false);

    const [isRefreshing, setIsRefreshing] = useState(false)
    const [bloodArray, setBloodArray] = useState<any>()
    const navigation = useNavigation<any>()

    const Email = useSelector((state: any) => state.blood.bloodMail)
    const dispatch = useDispatch()





    const getUserDataFromFirebase = () => {

        console.log('Email at BloodMenu', Email)
        try {
            if (Email) {
                const subscriber = firestore()
                    .collection('BloodUsers')
                    .where('email', '==', Email)
                    .onSnapshot(documentSnapshot => {
                        console.log('BloodApp Data  at BloodMenu ______________>:', documentSnapshot.docs)
                        const threadsArray = documentSnapshot.docs.map(item => item.data())
                        if (threadsArray) {
                            console.log('userData is being Transferred to redux ', threadsArray)
                            dispatch(addUser(threadsArray[0]))
                        }
                    })

                return () => subscriber();
            } else {
                console.log('from Homescreen. There is no value in Email: ', Email)
            }

        } catch (error) {
            console.log('Err fetching Email from redux-persist', error)
        }
    }


    useEffect(() => {

        getUserDataFromFirebase()


    }, [])







    const getDataFromFirebase = () => {
        setIsRefreshing(true)
        try {
            const subscriber = firestore()
                .collection('BloodUsers')
                .orderBy('createdAt', 'desc')
                .onSnapshot(documentSnapshot => {
                    console.log('Blooods at bloodList: ', documentSnapshot.docs)
                    const threadsArray = documentSnapshot.docs.map(item => item.data())
                    if (threadsArray) {
                        console.log('my array at BloodList', threadsArray)
                        setBloodArray(threadsArray)
                    }
                })
            setIsRefreshing(false)

            return () => subscriber();
        } catch (error) {
            console.log('error fetching threads...', error)
        }
    }

    useFocusEffect(useCallback(
        () => {
            getDataFromFirebase()
        
        },
        [],
    ))


    useFocusEffect(useCallback(
        () => {

            if (data?.length === 0) {
                setOpenDialog(true)
                console.log('opening Dilaog')
            }
        },
        [],
    ))




    const renderList = ({ item }: any) => {

        return (
            <View
                style={styles.listItem}
            >
                <Image source={require('../../../assets/images/bloodListBg.png')} style={{ position: 'absolute', left: '0%', top: '0%', bottom: '0%', height: '108%', width: '60%', }} resizeMode='stretch' />

                <View style={{ justifyContent: 'flex-start', width: '60%', gap: '20%', marginVertical: '2%', marginHorizontal: '4%' }}>
                    <Text style={styles.dt1}>{item?.name}</Text>
                    <Text style={styles.dt2}>{item?.city}</Text>
                    <Text style={styles.dt2}>{item?.address !== "" ? item?.address : 'No address added'}</Text>
                    <Text style={styles.dt2}>{item?.type}</Text>
                    <Text style={styles.dt2}>{item?.gender}</Text>
                    <Text style={styles.dt2}>{item?.phone !== "" ? item?.phone : 'No phone added'}</Text>


                </View>

                <View style={styles.bloodGroupContainer}>
                    <Text style={styles.bloodGroup}>{item?.bloodGroup}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* <View style={{ height: '2%' }} /> */}
                <View style={styles.headingContainer}>

                    <View style={styles.headingWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={styles.iconContainer}>
                            <Icon name='arrow-back-outline' size={23} color={colors.contrast} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Blood Bank</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('BloodProfile')}
                        style={styles.profileContainer}>
                        <Icon2 name='account' size={20} color={colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: '2%' }} />
                {isRefreshing ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button1 title="Solid" type="solid" loading buttonStyle={{ backgroundColor: colors.primary }} /></View> :
                    <FlatList
                        data={data ? data : bloodArray}
                        renderItem={renderList}
                        refreshing={isRefreshing}
                        onRefresh={getDataFromFirebase}

                    />
                }


                <Portal>
                    <Dialog visible={OpenDialog} onDismiss={() => setOpenDialog(false)}>
                        <Dialog.Title>Alert!</Dialog.Title>
                        <Dialog.Content>
                            <Text>No Donors Found</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setOpenDialog(false)}>ok</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </SafeAreaView >

    )
}

export default BloodHome

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    title: {
        color: textColors.secondary,
        fontSize: 22,
        fontFamily: 'Lexend-Regular',
        // marginHorizontal: '5%'
    },
    // dataSubContainer: {
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     // marginVertical: 10,
    //     // marginHorizontal: 20,
    // },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        // alignContent: 'center',
        marginHorizontal: 20,
        marginVertical: 8,
        // backgroundColor: 'orange',
        borderWidth: 1.5,
        borderColor: colors.secondary,
        borderRadius: 15,
        // borderWidth: 1.5,
        paddingLeft: 0,
        paddingRight: 5,
        padding: 0,
        paddingVertical: 5,
    },
    dt1: {
        // backgroundColor: 'red',/
        fontFamily: 'Lexend-Regular',
        fontSize: 20,
        color: textColors.primary,
        // borderBottomWidth: 1.5,
    },
    dt2: {
        fontSize: 16,
        fontFamily: 'Lexend-Regular',
        width: '90%',
        // fontSize: 18,
        color: textColors.primary,
    },
    bloodGroup: {
        fontFamily: 'Lexend-Light',
        color: textColors.secondary,
        fontSize: 13,
    },
    iconContainer: {
        marginLeft: '5%',
        // height: '100%',
        // width: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingContainer: {
        alignItems: 'center',

        flexDirection: 'row',
        elevation: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: '10%',
        justifyContent: 'space-between',
        // alignItems: 'center',
        paddingVertical: '3%',
        backgroundColor: colors.primary,
    },
    headingWrapper: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: '80%',
        marginHorizontal: '5%',
        gap: '50%'
    },
    bloodGroupContainer: {
        margin: '1%',
        // width: 
        backgroundColor: colors.primary,
        borderRadius: 3,
        padding: '1.5%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    profileContainer: {
        backgroundColor: colors.contrast,
        marginHorizontal: '5%',
        height: '60%',
        width: '8%',
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'flex-end'
    }
})