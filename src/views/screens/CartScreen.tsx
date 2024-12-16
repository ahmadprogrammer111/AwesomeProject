import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <View style={styles.container}>

      {/* Header( including avatar may cart text and back ) */}

      <View style={styles.header}>
        <Image style={{ width: 47, height: 47, }} source={require('../../assets/images/Ellipse_4.png')} />
        <Text style={{ color: 'black', fontSize: 24, fontWeight: '700' }}>My Cart</Text>
        <Image style={{ width: 50, height: 47, }} source={require('../../assets/images/5.png')} />
      </View>



      <View>
        {/* Image and name of the text and delete icon*/}

        <View style={styles.imageandtext}>
          <Image style={{ width: 120, height: 170, }} source={require('../../assets/images/14.png')} />
          <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: 7, left: -4 }}>Striped Green Dress</Text>
          <Image style={{ marginTop: 9, }} source={require('../../assets/images/16.png')} />
        </View>

        {/* price */}

        <View style={{ position: 'absolute', }}>
          <Text style={{ color: '#757575', fontWeight: '600', marginTop: 65.7, marginLeft: 167.5, }}>Rs.  1,499.00</Text>
        </View>

        {/* Size and color */}

        <View style={styles.sizes}>
          <Image style={{ width: 37, height: 37, marginRight: 15, }} source={require('../../assets/images/Ellipse_14.png')} />
          <Image style={{ width: 37, height: 37, }} source={require('../../assets/images/Ellipse_12.png')} />
        </View>
      </View>

      <View>
        {/* Image and name of the text and delete icon*/}
        <View style={styles.imageandtext}>
          <Image style={{ width: 120, height: 170, marginTop: -10, }} source={require('../../assets/images/15.png')} />
          <Text style={{ color: 'black', fontSize: 13, fontWeight: '700', marginTop: -5, left: -7 }}>Striped Pink Dress</Text>
          <Image style={{ marginTop: 0, }} source={require('../../assets/images/16.png')} />
        </View>

        {/* price */}

        <View style={{ position: 'absolute', }}>
          <Text style={{ color: '#757575', fontWeight: '600', marginTop: 55.7, marginLeft: 170, }}>Rs.  1,299.00</Text>
        </View>

        {/* Size and color */}

        <View style={styles.sizes2}>
          <Image style={{ width: 37, height: 37, marginRight: 15, }} source={require('../../assets/images/Ellipse_11.png')} />
          <Image style={{ width: 37, height: 37, }} source={require('../../assets/images/Ellipse_13.png')} />
        </View>
      </View>


      <View style={styles.total}>

        <View style={{ width: 180, }}>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>Total:</Text>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>Shipping:</Text>
          <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>Grand Total:</Text>
        </View>


        <View style={{ width: 180, alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>Rs. 2,798.00</Text>
          <Text style={{ fontSize: 18, color: '#454242', fontWeight: '500' }}>Rs. 0.00</Text>
          <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>Rs. 2,798.00</Text>
        </View>

      </View>


      <View style={styles.addtocartview}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Checkout</Text>
      </View>

      {/* Footer */}

      <View style={styles.footer}>
        {/* Home Icon */}
        <Image style={styles.iconcontainer} source={require('../../assets/images/Vector2.png')} />
        {/* Menu Icon */}
        <Image style={styles.iconcontainer} source={require('../../assets/images/9.png')} />
        {/* Cart Icon */}
        <Image style={styles.iconcontainer} source={require('../../assets/images/17.png')} />
        {/*Person Icon */}
        <Image style={styles.iconcontainer} source={require('../../assets/images/11.png')} />
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
  imageandtext: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 35,
    marginRight: 20,

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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 90,
    marginEnd: 20,
    marginStart: 20,
  },
  addtocartview: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d05c5c',
    height: 65,
    marginTop: 5,
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

})




export default CartScreen