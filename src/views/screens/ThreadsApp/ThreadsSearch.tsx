import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


const ThreadsSearch = () => {

    return (
        <View style={styles.container}>
            <View style={{height: 40}}/>
            <Text style={styles.heading}>Search</Text>
            <View style={styles.search}>
                <Icon name='search' size={22} color='grey' style={styles.searchIcon} />
                <TextInput placeholder='Search' style={styles.textInput} placeholderTextColor='grey' />
            </View>
        </View>
    );
}

export default ThreadsSearch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Raleway-Bold',
        marginHorizontal: 20,
        marginVertical: 10
    },
    search: {
        // paddingTop: 
        backgroundColor: '#e5e7e9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        height: 40
    },
    textInput: {
        width: '80%',
        height: '140%',
        color: 'black',
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
        alignSelf: 'center',
        
        // backgroundColor: 'red'
    },
    searchIcon: {
        marginHorizontal: 5
    }

})