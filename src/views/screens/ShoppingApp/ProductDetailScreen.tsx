import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../redux/Slices/CartSlice'
import { useFocusEffect } from '@react-navigation/native'

const ProductDetailScreen = ({ route }: any) => {

   const { item, index } = route.params || {}
   console.log('route', route?.params)

   console.log('item,', item?.image)
   console.log('inedx:,', index)

   const dispatch = useDispatch()

   const addToCart = () => {
      dispatch(addItem(item))
   }


   useEffect(() => {


      if (!item?.image) {
         return Alert.alert('Please select a product to get details')



      }
   }, [])






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
                  <Text style={{ color: 'black', fontSize: 20 }}> No IMage to show
                  </Text>

               }
            </View>

            <View style={{ flexDirection: 'row', }}>
               <Text numberOfLines={3} style={{ color: '#000000', fontSize: 17.5, fontWeight: '700', marginTop: 24, marginLeft: 23, width: '65%', }}>{item?.title}</Text>
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

            <View style={styles.colorandsize}>
               <Image style={{ marginRight: 7, width: 62.5, height: 62.5, }} source={require('../../../assets/images/Group_7.png')} />
               <Image style={{ marginRight: 7, width: 57, height: 57, }} source={require('../../../assets/images/Ellipse_9.png')} />
               <Image style={{ marginRight: 7, width: 57, height: 57, }} source={require('../../../assets/images/Ellipse_10.png')} />
            </View>
            <View style={styles.spaccer} />
         </View>

         <TouchableOpacity onPress={addToCart} disabled={!item?.id ? true : false} style={styles.addtocartview}>
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
      backgroundColor: '#C85959',
      height: 65,
      width: '100%',
      alignSelf: 'center',
      bottom: 0,


   },
   spaccer: {
      height: 20
   }

})





export default ProductDetailScreen