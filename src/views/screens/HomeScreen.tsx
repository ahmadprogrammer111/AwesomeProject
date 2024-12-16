import { Image, StyleSheet, Text, TextInput, View, } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Searchbar = () => {
   const [first, setfirst] = useState('')



   return (
      <View >
         <View style={styles.Searchbar}>
            <TextInput style={styles.Textinput} placeholder='Search' placeholderTextColor="#aaa" value={first} onChangeText={setfirst} />
         </View>
         <Image style={styles.iconsearch} source={require('../../assets/images/Search.png')} />
      </View>
   )
}

const HomeScreen = () => {
   return (
      <View style={styles.container}>
         <View>
            <View>
               <Image style={styles.circle} source={require('../../assets/images/4.png')} />
               <Image style={styles.cImg} source={require('../../assets/images/1.png')} />
               <Image style={styles.Imglogo} source={require('../../assets/images/5.png')} />
            </View>

            <View>

               {/* Heading*/}
               <Text style={styles.Textstyle}>Match your style</Text>
               {/* Searchbar */}


               <Searchbar />

               {/* Tabs */}
               <View style={styles.Tabs}>

                  <View style={styles.tab1}>
                     <Text style={styles.trending}>Trending Now</Text>
                  </View>

                  <View style={styles.tab2}>
                     <Text style={styles.All}>All</Text>
                  </View>

                  <View style={styles.tab3}>
                     <Text style={styles.Now}> New</Text>
                  </View>

               </View>

               {/* These are two Images   */}

               <View style={styles.img1}>
                  <Image style={{ height: 220, width: 155, }} source={require('../../assets/images/2.png')} />
                  <Image style={{ height: 220, width: 155, }} source={require('../../assets/images/7.png')} />
               </View>

               <View style={styles.hearts}>
                  <Image source={require('../../assets/images/8.png')} />
                  <Image source={require('../../assets/images/8.png')} />
               </View>

               {/* This view is for grouping the two prices */}

               <View style={{ flexDirection: 'row', marginTop: 180, height: 70, }}>

                  <View style={styles.price1}>
                     <Text style={{ color: '#000000', fontSize: 11, fontWeight: '700', height: 25 }}> Polkadot Red Dress</Text>
                     <Text style={{ color: '#757575', fontSize: 11, fontWeight: '700' }}> Rs.  1,499.00</Text>
                  </View>

                  <View style={styles.price2}>
                     <Text style={{ color: '#000000', fontSize: 11, fontWeight: '700', height: 25 }}> Striped Pink Dress</Text>
                     <Text style={{ color: '#757575', fontSize: 11, fontWeight: '700', }}> Rs.  1,299.00</Text>
                  </View>
               </View>

               {/* These are the lower two images */}
               <View style={styles.img1}>
                  <Image style={{ height: 220, width: 155, }} source={require('../../assets/images/6.png')} />
                  <Image style={{ height: 220, width: 155, }} source={require('../../assets/images/3.png')} />
               </View>
               <View style={styles.hearts}>
                  <Image source={require('../../assets/images/8.png')} />
                  <Image source={require('../../assets/images/8.png')} />
               </View>
            </View>


            <View style={styles.footer}>
               {/* Home Icon */}
               <Image style={styles.iconcontainer} source={require('../../assets/images/12.png')} />
               {/* Menu Icon */}
               <Image style={styles.iconcontainer} source={require('../../assets/images/9.png')} />
               {/* Cart Icon */}
               <View>
                  <Image style={styles.iconcontainer} source={require('../../assets/images/10.png')} />
                  <View style={styles.badge}>
                     <Text style={styles.badgetext}>1 </Text>
                  </View>
               </View>
               <Image style={styles.iconcontainer} source={require('../../assets/images/11.png')} />
            </View>

         </View>
      </View>
   )
}


const styles = StyleSheet.create({
    container:
    {
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
    Textstyle: {
       fontSize: 25,
       color: 'black',
       width: 500,
 
       height: 45,
       marginHorizontal: 35,
       marginTop: -10
    },
    Searchbar: {
       backgroundColor: 'white',
       width: 330,
       height: 45,
       color: 'black',
       borderRadius: 18,
       marginHorizontal: 33,
       marginTop: 10,
       alignContent: 'center',
    },
    Textinput: {
       marginHorizontal: 40,
       marginTop: -10,
       height: 63,
       width: 280,
       color: 'black',
       fontSize: 16,
    },
    iconsearch: {
       marginHorizontal: 43,
       marginTop: -37,
       width: 29,
    },
    Tabs: {
       flexDirection: 'row',
       height: 40,
       width: 345,
       margin: 25,
       marginTop: 40,
       justifyContent: 'space-around',
    },
    tab1: {
       backgroundColor: '#F38181',
       borderRadius: 17,
       width: 150,
       height: 35,
       alignItems: 'center',
       justifyContent: 'center',
    },
    trending: {
       color: 'white',
       fontWeight: '500',
    },
    tab2: {
       backgroundColor: '#E9E6E6',
       borderRadius: 17,
       width: 75,
       height: 35,
       alignItems: 'center',
       justifyContent: 'center',
    },
    All: {
       color: '#8A8A8A',
       fontWeight: '500',
    },
    tab3: {
       backgroundColor: '#E9E6E6',
       borderRadius: 17,
       width: 75,
       height: 35,
       alignItems: 'center',
       justifyContent: 'center',
    },
    Now: {
       color: '#8A8A8A',
       fontWeight: '500',
    },
    img1: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginStart: 33,
       marginEnd: 45,
 
    },
    hearts: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginStart: 142,
       marginEnd: 57,
       marginTop: -205,
    },
    price1: {
       height: 70,
       width: 177,
       marginLeft: 30,
    },
    price2: {
       height: 70,
       width: 200,
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
       marginTop: 100,
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
 
 export default HomeScreen