import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProductDetailScreen = () => {
   return (
      <View style={styles.container}>
         <View>
            <View>
               <Image style={styles.circle} source={require('../../../assets/images/4.png')} />
               <Image style={styles.cImg} source={require('../../../assets/images/1.png')} />
               <Image style={styles.Imglogo} source={require('../../../assets/images/5.png')} />
             </View>

            <View>
               <View>
                  <Image style={styles.img13} source={require('../../../assets/images/13.png')} />
               </View>
               <View>
                  <Image style={styles.hearts} source={require('../../../assets/images/8.png')} />
               </View>

               <View style={{ flexDirection: 'row', }}>
                  <Text style={{ color: '#000000', fontSize: 17.5, fontWeight: '700', marginTop: 24, marginLeft: 23, }}> Striped Pink Dress</Text>
                  <Text style={{ color: '#757575', fontSize: 14, fontWeight: '700', marginTop: 28.5, marginLeft: 33, }}> Rs.  1,299.00</Text>
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
               <View style={styles.addtocartview}>
                  <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Add to Cart</Text>
               </View>
            </View>




            {/* Footer */}

            <View style={styles.footer}>
               {/* Home Icon */}
               <Image style={styles.iconcontainer} source={require('../../../assets/images/Vector2.png')} />
               {/* Menu Icon */}
               <Image style={styles.iconcontainer} source={require('../../../assets/images/Vector1.png')} />
               {/* Cart Icon */}
               <View>
                  <Image style={styles.iconcontainer} source={require('../../../assets/images/10.png')} />
                  <View style={styles.badge}>
                     <Text style={styles.badgetext}>1 </Text>
                  </View>
               </View>
               <Image style={styles.iconcontainer} source={require('../../../assets/images/11.png')} />
            </View>


         </View>
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

      marginTop: -20,
   },
   hearts: {
      marginLeft: 340,
      marginTop: -270,
      width: 35,
      height: 35,
   },
   colorandsize: {
      flexDirection: 'row',
      marginLeft: 30,
      marginTop: 10,
   },
   addtocartview: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d05c5c',
      height: 65,
      marginTop: 20,
   },
   footer: {
      alignItems: 'center',
      flexDirection: 'row',

      justifyContent: 'space-around',
      backgroundColor: '#FFFFFF',
      bottom: 0,
      left: 0,
      right: 0,
      height: 66,
      marginTop: 0,
   },
   iconcontainer: {
      alignItems: 'center',
   },
   badge: {
      position: 'absolute',
      backgroundColor: '#cdcdcd',
      height: 13,
      width: 13,
      borderRadius: 6.5,
      marginTop: -7,
      marginLeft: 29,
   },
   badgetext: {
      color: 'white',
      fontSize: 10,
      marginTop: -3,
      marginLeft: 3,
      fontWeight: '600',
   }
})





export default ProductDetailScreen