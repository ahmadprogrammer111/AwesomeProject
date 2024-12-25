import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, ActivityIndicator, } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'








const HomeScreen = () => {

   const navigation = useNavigation<any>()
   const [productsData, setProductsData] = useState<any>([])
   const [isLoading, setIsLoading] = useState(true)
   const [first, setfirst] = useState('')
   const [isSelected, setIsSelected] = useState<number>(1)


   const handlePress = (buttonId: number) => {
      setIsSelected(buttonId)
   }

   useEffect(() => {
      getdata()
   }, [])


   const getdata = async () => {
      setIsLoading(true)
      const URL = 'https://fakestoreapi.com/products/'

      try {
         const responce = await fetch(URL)

         const data = await responce.json()
         // console.log('data===>', data)
         if (responce.ok) {
            console.log('fetched data======>', data)
            setProductsData(data)
            setIsLoading(false)

         } else {
            Alert.alert('error showing  or fetching data')
            // setIsLoading(false)
         }
      }
      catch (error) {
         const err = JSON.stringify(error)
         console.log('error', error)
         Alert.alert('Check your network and try again', err)
         // setIsLoading(false)

      }
   }

   // console.log('f data======>', productsData[0]?.image)

   const renderitem = ({ item, index }: any) => {
      // console.log('Image data======>', index)

      return <TouchableOpacity
         style={{ marginRight: 40, width: 140 }}
         onPress={() => navigation.navigate('ProductDetailScreen', { item: item, index: index })}>

         <View>
            <Image height={250} width={140} style={{ borderRadius: 25 }} source={{ uri: item?.image }}
               onError={(e) => console.log('Image error', e.nativeEvent.error)}
            />
            <Image style={{ position: 'absolute', top: 20, right: 20 }} source={require('../../../assets/images/8.png')} />

            <Text numberOfLines={1} style={{ width: '100%', color: '#000000', fontFamily: 'Inter_18pt-SemiBold', marginVertical: 5 }}> {item?.title}</Text>
            <Text numberOfLines={1} style={{ width: '100%', color: '#757575', fontFamily: 'Inter_18pt-SemiBold' }}> {item?.price}  $</Text>
         </View>
      </TouchableOpacity>
   }




   return (


      <View style={styles.container}>

         {isLoading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator color='blue' size={'large'} /></View> :
            <View>
               <View>
                  <Image style={styles.circle} source={require('../../../assets/images/4.png')} />
                  <Image style={styles.cImg} source={require('../../../assets/images/1.png')} />
                  <Image style={styles.Imglogo} source={require('../../../assets/images/5.png')} />
               </View>

               <View>

                  <Text style={styles.Textstyle}>Match your style</Text>

                  <View style={styles.searchbarcontainer}>
                     <Icon name='search' size={20} color='#A5A5A5' style={{ padding: 10 }} />
                     <TextInput style={styles.textinput} placeholder='Search' placeholderTextColor="#aaa" value={first} onChangeText={setfirst} />
                  </View>
                  <View style={styles.Tabs}>
                     <TouchableOpacity onPress={() => {
                        handlePress(1)
                     }}
                        style={[styles.tab1, { backgroundColor: isSelected === 1 ? '#F38181' : '#E9E6E6' }]}>
                        <Text style={[styles.trending, { color: isSelected === 1 ? 'white' : 'black' }]}>Trending Now</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => {
                        handlePress(2)
                     }}
                        style={[styles.tab2, { backgroundColor: isSelected === 2 ? '#F38181' : '#E9E6E6' }]}>
                        <Text style={[styles.All, { color: isSelected === 2 ? 'white' : 'black' }]}>All</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => {
                        handlePress(3)
                     }}
                        style={[styles.tab3, { backgroundColor: isSelected === 3 ? '#F38181' : '#E9E6E6' }]}>
                        <Text style={[styles.Now, { color: isSelected === 3 ? 'white' : 'black' }]}>New</Text>
                     </TouchableOpacity>
                  </View>

                  <FlatList
                     renderItem={renderitem as any}
                     data={productsData}
                     horizontal={true}
                     style={{
                        // backgroundColor: 'orange',
                        height: '43%',
                        marginHorizontal: 35,
                        marginBottom: 20,
                     }}
                  />
                  
                  <View style={styles.img1}>
                     <Image style={styles.productimage} source={require('../../../assets/images/6.png')} />
                     <Image style={styles.productimage} source={require('../../../assets/images/3.png')} />
                  </View>
                  <View style={styles.hearts}>
                     <Image source={require('../../../assets/images/8.png')} />
                     <Image source={require('../../../assets/images/8.png')} />
                  </View>
               </View>
            </View>}
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

   Tabs: {
      flexDirection: 'row',
      height: 40,
      width: 345,
      margin: 25,
      marginTop: 20,
      justifyContent: 'space-around',
   },
   tab1: {
      // backgroundColor: '#F38181',
      borderRadius: 17,
      width: 150,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
   },
   trending: {
      // color: 'white',
      fontWeight: '500',
   },
   tab2: {
      // backgroundColor: '#E9E6E6',
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
      // backgroundColor: '#E9E6E6',
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
   productimage: {
      height: 220,
      width: 140,
      borderRadius: 20
   },
   hearts: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginStart: 130,
      marginEnd: 57,
      marginTop: -205,
   },
   price1: {
      // backgroundColor: 'blue',
      height: 70,
      width: '40%',
      marginLeft: 30,
   },
   price2: {
      height: 70,
      width: '40%',
      marginLeft: 15,
   },

   pricetext1: {
      // backgroundColor: 'red',
      color: '#000000',
      fontSize: 14,
      fontWeight: '700',
      height: 25
   },
   pricetext2: {
      // backgroundColor: 'blue',
      color: '#757575',
      fontSize: 14,
      fontWeight: '700'
   },
   searchbarcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 18,
      marginHorizontal: 30,
      height: '10%'
   },
   textinput: {
      color: 'black',
      fontSize: 16,
      width: '83%'
   },
   producttextcontainer: {

      flexDirection: 'row',
      marginTop: 10,
      backgroundColor: 'red',
      height: 70,
   }

})

export default HomeScreen