import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
const FurnitureArmChair = (Props: any) => {
    const { marginbottom } = Props
    return (
        <View style={styles.container}>
       
                <View style={{
                    backgroundColor: '#AFAFAF', width: 158, height: 178, alignItems: 'flex-end',
                    borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 12, borderBottomRightRadius: 12,
                }}>
                    <Icon name='bookmark' size={20} color='#E6E6E6' style={{ margin: 10, }} />
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5,}}>
                    <Icon2 name='star' size={20} color='#FCD400' />
                    <Icon2 name='star' size={20} color='#FCD400' />
                    <Icon2 name='star' size={20} color='#FCD400' />
                    <Icon2 name='star' size={20} color='#FCD400' />
                    <Icon2 name='staro' size={20} color='#FCD400' />
                </View>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'black' }}>Modern Armchair</Text>
                <View style={{ flexDirection: 'row', height: 25, }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'blue', fontSize: 16 }}>$145</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', textDecorationLine: 'line-through', fontSize: 10, color: '#838383', textAlignVertical: 'bottom', marginHorizontal: 6, }}>$185</Text>

                </View>

            </View>

       
    )
}

export default FurnitureArmChair

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        // 
        backgroundColor: 'white',
        height: 260,
        width: 160,
        marginBottom: 30,
    }
})