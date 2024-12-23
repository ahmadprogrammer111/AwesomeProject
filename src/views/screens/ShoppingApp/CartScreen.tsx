import { StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../redux/Slices/CartSlice'
import { useFocusEffect } from '@react-navigation/native'
import  Icon2  from 'react-native-vector-icons/Ionicons'



const cartScreen = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: any) => state.cart.items)


  const total = cartItems.reduce((sum: any, item: any) =>
    sum + (item?.price * item?.quantity || 1)
    , 0)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon2 name='chevron-back-circle' size={20} color='white'/>
        {/* <Image style={{ width: 47, height: 47, }} source={require('../../../assets/images/Ellipse_4.png')} /> */}
        <Text style={{ color: 'black', fontSize: 24, fontWeight: '700' }}>My Cart</Text>
        <Image style={{ width: 50, height: 47, }} source={require('../../../assets/images/5.png')} />
      </View>

      <View style={{ flex: 0.75, alignSelf: 'center' }}>
        <ScrollView>
          {cartItems?.map((item: any) => {


            const delet = () => {
              dispatch(removeItem(item))
            }

            return <View key={item.id} style={{ flexDirection: 'row', marginVertical: 20 }}>
              <View style={styles.image}>
                <Image resizeMethod='resize' style={styles.productimage} source={{ uri: item?.image }} />
              </View>

              <View style={styles.pricecontainer}>
                <Text numberOfLines={3} style={styles.productname}>{item?.title}</Text>
                <Text style={styles.price}>{item?.quantity}x{item?.price}={(item?.quantity * item?.price).toFixed(2)}</Text>
              </View>

              <TouchableOpacity onPress={delet}>
                <Icon name='delete-outline' size={30} color='#C85959' />
              </TouchableOpacity>
            </View>
          }
          )}
        </ScrollView>
      </View>

      <View style={styles.total}>

        <View style={{ width: 180, }}>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>Total:</Text>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>Shipping:</Text>
          <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>Grand Total:</Text>
        </View>
        <View style={{ width: 180, alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>{total.toFixed(2)}$</Text>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>0.00$</Text>
          <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>{total.toFixed(2)}$</Text>
        </View>
      </View>

      <View style={styles.spaccer} />

      <View style={styles.CheckOut}>

        <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Checkout</Text>

      </View>

    </View>



  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff1f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 45,
  },
  image: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginTop: 0,
    marginRight: 10,

  },
  sizes: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 100,
    marginLeft: 168,
  },
  sizes2: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 90,
    marginLeft: 170,
  },
  total: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 90,
    // marginEnd: 20,
    // marginStart: 20,
  },
  CheckOut: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d05c5c',
    height: 65,
    // marginTop: 5,
  },
  spaccer: {
    height: 20
  },
  price: {
    color: '#757575',
    fontSize: 16,
    fontFamily: 'Inter_24pt-SemiBold',
  },
  pricecontainer: {
    // backgroundColor: 'red',
    // position: 'absolute',
    // flexDirection: 'row',
    width: '50%',
    // left: 150,
    // top: 100
  },
  productname: {
    // backgroundColor: 'black',  
    height: 'auto',
    // marginHorizontal: 20,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter_24pt-SemiBold',
    width: '90%'
  },
  productimage: {
    width: 120,
    height: 170,
    borderRadius: 20,
  }

})




export default cartScreen