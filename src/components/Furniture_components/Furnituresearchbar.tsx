import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'


const Furnituresearchbar = (Props: any) => {
    const { width, marginh } = Props
    const [search, setSearch] = useState('')



    return (
        <View style={styles.container}>
            <View style={[styles.search, { width: width, marginHorizontal: marginh, }]}>
                <Icon name='search1' size={20} color='#838383' style={styles.searchicon} />
                <TextInput 
                style={[styles.searchtextstyle, { fontSize: 12, color: 'black'}]} 
                value={search} 
                onChangeText={setSearch} 
                placeholder='Search here       ' 
                placeholderTextColor='#838383' 
                // maxLength={}
                
                />
            </View>
        </View>
    )
}

export default Furnituresearchbar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    search: {
        // borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchtextstyle: {
        marginHorizontal: 0,
        // backgroundColor: 'red',
        width: '85%',
        fontFamily: 'Poppins-Regular',
        // paddingVertical: ,
    },
    searchicon: {
        marginHorizontal: 10,
    }
})