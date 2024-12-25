import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../../redux/Slices/CartSlice'
import { useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'

const ProductDetailScreen = ({ route }: any) => {

   const { item, index } = route.params || {}


   console.log('item,', item?.image)
   console.log('inedx:,', item)

   const cartItems = useSelector((state: any) => state.cart.items)
   const dispatch = useDispatch()

   const addToCart = () => {
      dispatch(addItem(item))
   }

   useEffect(() => {
      if (!item?.image) {
         return Alert.alert('Please select a product to get details')
      }
   }, [])


   const itemQuantity = cartItems?.filter((element: any,) => element?.id === item?.id)
   if (itemQuantity) {
      // console.log('quan=========>', itemQuantity[0]?.quantity)
   }
   return (
      <View style={styles.container}>

         <View>
            <Image style={styles.circle} source={require('../../../assets/images/4.png')} />
            <Image style={styles.cImg} source={require('../../../assets/images/1.png')} />
            <Image style={styles.Imglogo} source={require('../../../assets/images/5.png')} />
         </View>

         <View>
            <View style={{
               height: '39%',
            }}>
               {item?.image ?
                  <Image
                     resizeMode='contain'
                     style={{
                        height: '100%',
                        width: '100%',
                     }}
                     source={{ uri: item?.image }}
                     onError={(e) => console.log('Cannot load Image', e.nativeEvent.error)}
                  />
                  :
                  <Image
                     resizeMode='contain'
                     style={{
                        height: '100%',
                        width: '100%',
                     }}
                     source={require('../../../assets/images/placeholder.png')}
                     onError={(e) => console.log('Cannot load Image', e.nativeEvent.error)} />
               }
            </View>

            <View style={{ flexDirection: 'row', }}>
               <Text numberOfLines={3} style={styles.title}>{item?.title}</Text>
               <Text style={{ color: '#757575', fontSize: 14, fontWeight: '700', marginTop: 28.5, marginLeft: 33, }}>{item?.price}  $</Text>
            </View>
            <View>
               <Text style={{ color: '#000000', fontSize: 13, fontWeight: '700', marginTop: 21, marginLeft: 33, }}>Size</Text>
            </View>

            <View style={styles.colorandsize}>
               <Image style={{ marginRight: 7, width: 57, height: 57, }} source={require('../../../assets/images/Group_1.png')} />
               <Image style={{ marginRight: 7, width: 57, height: 57, }} source={require('../../../assets/images/Group_6.png')} />
               <Image style={{ marginRight: 7, width: 57, height: 57, }} source={require('../../../assets/images/Group_3.png')} />
               <Image style={{ marginRight: 7, width: 57, height: 57, }} source={require('../../../assets/images/Group_4.png')} />
            </View>

            <View>
               <Text style={{ color: '#000000', fontSize: 13, fontWeight: '700', marginTop: 15, marginLeft: 33, }}>Color</Text>
            </View>

         </View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 200 }}>

            <TouchableOpacity
               onPress={() => dispatch(removeItem(item))} disabled={itemQuantity[0]?.quantity == 0 || !item?.id ? true : false}>
               <Icon name='minussquare' size={30} color={itemQuantity[0]?.quantity == 0 || !item?.id? 'grey' : 'black'} />
            </TouchableOpacity>

            <Text style={{ color: 'black' }}>{itemQuantity[0]?.quantity ? itemQuantity[0]?.quantity : 0}</Text>

            <TouchableOpacity disabled={!item?.id ? true : false}
               onPress={() => dispatch(addItem(item))}>
               <Icon name='plussquare' size={30} color={itemQuantity[0]?.quantity == 0 || !item?.id? 'grey' : 'black'} />
            </TouchableOpacity>

         </View>

         <TouchableOpacity
            onPress={addToCart} disabled={!item?.id || itemQuantity[0]?.quantity == 0 ? true : false}
            style={[styles.addtocartview, { backgroundColor: !item?.id || itemQuantity[0]?.quantity == 0 ? 'grey' : '#C85959' }]}>
            <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Add to Cart</Text>
         </TouchableOpacity>
      </View>
   )
}






const styles = StyleSheet.create({

   container: {
      flex: 1,
      backgroundColor: '#fff1f6',
   },
   circle: {
      width: 50,
      height: 50,
      marginHorizontal: 35,
      marginVertical: 35,
   },
   cImg: {
      width: 30,
      height: 30,
      marginHorizontal: 45,
      marginVertical: -75,
   },
   Imglogo: {
      width: 56,
      height: 53,
      marginHorizontal: 310,
      marginVertical: 35,
   },
   img13: {
      width: 420,
      // backgroundColor: 'orange'
      // marginTop: -20,
   },
   // hearts: {
   //    marginLeft: 340,
   //    marginTop: -270,
   //    width: 35,
   //    height: 35,
   // },
   colorandsize: {
      flexDirection: 'row',
      marginLeft: 30,
      marginTop: 10,
   },

   addtocartview: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#C85959',
      height: 65,
      width: '100%',
      alignSelf: 'center',
      bottom: 0,


   },
   spaccer: {
      height: 20
   },
   title: {
      color: '#000000',
      fontSize: 17.5,
      fontWeight: '700',
      marginTop: 24,
      marginLeft: 23,
      width: '65%',
   }

})





export default ProductDetailScreen