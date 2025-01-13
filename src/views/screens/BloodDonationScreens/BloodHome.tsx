import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { useFocusEffect } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/FontAwesome'



const BloodHome = ({ route }: any) => {

    const data = route?.params


    console.log(data || undefined)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [bloodArray, setBloodArray] = useState<any>()



    const renderList = ({ item }: any) => {

        return (
            <LinearGradient colors={['#b0b0b0', '#b8b8b8', '#d1cece']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.listItem}
            >
                <View>
                    <View style={styles.dataSubContainer}>
                        <Text style={styles.dt1}>Name: </Text>
                        <Text style={styles.dt2}> {item?.name}</Text>

                    </View>
                    <View style={styles.dataSubContainer}>
                        <Text style={styles.dt1}>Blood Group:</Text>
                        <Text style={styles.dt2}>{item?.bloodGroup}</Text>

                    </View>
                    <View style={styles.dataSubContainer}>
                        <Text style={styles.dt1}>City:</Text>
                        <Text style={styles.dt2}> {item?.city}</Text>

                    </View>
                    <View style={styles.dataSubContainer}>
                        <Text style={styles.dt1}>Type:</Text>
                        <Text >{item?.type}</Text>

                    </View>
                </View>




            </LinearGradient>

        )
    }

    const getDataFromFirebase = () => {
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
    return (

        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['#DB2424', '#EA7960']} style={styles.container}>
                <View style={{ height: '2%' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={styles.title}>Blood Bank</Text>
                    <Icon name='align-right' size={20} color='black' style={{ alignSelf: 'flex-end', marginHorizontal: '10%' }} />

                </View>



                <View style={{ height: '2%' }} />

                {isRefreshing ? <View> </View> :
                    <FlatList
                        data={data ? data : bloodArray}
                        renderItem={renderList}
                        refreshing={isRefreshing}
                        onRefresh={getDataFromFirebase}
                    />
                }

            </LinearGradient>
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
        color: '#680606',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginHorizontal: '5%'
    },
    dataSubContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 8,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    dt1: {
        fontSize: 20,
        color: 'black',
        borderBottomWidth: 1.5,
    },
    dt2: {
        fontSize: 20,
        color: 'grey',
        // borderBottomWidth: 1.5,
    },
})