import { View } from 'react-native'
import React from 'react'
import Contactaddscreen from './views/screens/ContactScreens/Contactaddscreen'
import Contactlistscreen from './views/screens/ContactScreens/Contactlistscreen'
import Contactdetailscreen from './views/screens/ContactScreens/Contactdetailscreen'

import Splash_screen01 from './views/screens/FurnitureScreens/Splash_screen01'
import OnBoarding02 from './views/screens/FurnitureScreens/OnBoarding02'
import Logsignup03 from './views/screens/FurnitureScreens/Logsignup03'
import Login04 from './views/screens/FurnitureScreens/Login04'
import Signup05 from './views/screens/FurnitureScreens/Signup05'
import ForgotPassword06 from './views/screens/FurnitureScreens/ForgotPassword06'
import VerifyOtp07 from './views/screens/FurnitureScreens/VerifyOtp07'
// Importing naivgators


import Icon from 'react-native-vector-icons/Octicons.js'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons.js'
import Icon3 from 'react-native-vector-icons/Fontisto.js'
import Icon4 from 'react-native-vector-icons/MaterialIcons.js'
import Icon5 from 'react-native-vector-icons/Entypo.js'
import Icon6 from 'react-native-vector-icons/Foundation.js'
import Icon7 from 'react-native-vector-icons/Ionicons.js'







import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import { Screen, screensEnabled } from 'react-native-screens'
import PracticeScreen from './views/screens/PracticeScreen'
import Home08 from './views/screens/FurnitureScreens/Home08'
import Search09 from './views/screens/FurnitureScreens/Search09.tsx'
import Product010 from './views/screens/FurnitureScreens/Product010.tsx'
import Productdetailscreen11 from './views/screens/FurnitureScreens/Productdetailscreen11.tsx'
import ProductDetailScreen from './views/screens//ShoppingApp/HomeScreen.tsx'
import Cart12 from './views/screens/FurnitureScreens/Cart12.tsx'
import CheckOut13 from './views/screens/FurnitureScreens/CheckOut13.tsx'
import Message14 from './views/screens/FurnitureScreens/Message14.tsx'
import Account15 from './views/screens/FurnitureScreens/Account15.tsx'
import WeatherHome from './views/screens/WeatherScreens/WeatherHome.tsx'
import WeatherDetail from './views/screens/WeatherScreens/WeatherDetail.tsx'

import HomeScreen from './views/screens//ShoppingApp/CartScreen.tsx'
import CartScreen from './views/screens//ShoppingApp/ProductDetailScreen.tsx'






const App = () => {


   const BottomNavigator = createBottomTabNavigator({
      screens: {
         HomeScreen: {
            screen: HomeScreen,
            options: {
               tabBarIcon: () => <Icon6 name='home' size={35} color='#959292' />
            }
         },
         ProductDetailScreen: {
            screen: ProductDetailScreen,
            options: {
               tabBarIcon: () => <Icon5 name='menu' size={35} color='#959292' />
            }
         },
         CartScreen: {
            screen: CartScreen,
            options: {
               tabBarIcon: () => <Icon7 name='cart-sharp' size={35} color='#959292' />

            }
         }
      },
      screenOptions: { headerShown: false, tabBarShowLabel: false }
   })

   // const BottomNavigator = createBottomTabNavigator({

   //    screens: {
   //       Home: {
   //          screen: Home08, options: { tabBarIcon: ({ color }) => <Icon name='home' size={30} color={color} /> }
   //       },
   //       Product010: {
   //          screen: Product010, options: { tabBarIcon: ({ color }) => <Icon2 name='bookshelf' size={30} color={color} /> }
   //       },
   //       Search09: {
   //          screen: Search09, options: { tabBarIcon: ({ color }) => <Icon3 name='bookmark' size={25} color={color}  /> }
   //       },
   //      Message14: {
   //          screen: Message14, options: { tabBarIcon: ({ color }) => <Icon4 name='chat-bubble-outline' size={30} color={color}  /> }
   //       },
   //       Account15: {
   //          screen: Account15, options: { tabBarIcon: ({ color }) => <Icon2 name='account' size={30} color={color}  /> }
   //       },
   //    },
   //    screenOptions: { tabBarActiveTintColor: 'black', headerShown: false, tabBarShowLabel: false,  },

   // })






   // const StackNavigator = createNativeStackNavigator({

   //    screens: {
   //       Splash_screen01: {
   //          screen: Splash_screen01, options: { headerShown: false }
   //       },
   //       OnBoarding02: {
   //          screen: OnBoarding02, options: { headerShown: false }
   //       },
   //       Account15: {
   //          screen: Account15, options: { headerShown: false }
   //       },
   //       Message14: {
   //          screen: Message14, options: { headerShown: false }
   //       },
   //       CheckOut13: {
   //          screen: CheckOut13, options: { headerShown: false }
   //       },
   //       Cart12: {
   //          screen: Cart12, options: { headerShown: false }
   //       },
   //       Productdetailscreen11: {
   //          screen: Productdetailscreen11, options: { headerShown: false }
   //       },
   //       Search09: {
   //          screen: Search09, options: { headerShown: false }
   //       },
   //       Home08: {
   //          screen:BottomNavigator, options: { headerShown: false }
   //       },
   //       VerifyOtp07: {
   //          screen: VerifyOtp07, options: { headerShown: false }
   //       },
   //       ForgotPassword06: {
   //          screen: ForgotPassword06, options: { headerShown: false }
   //       },
   //       Signup05: {
   //          screen: Signup05, options: { headerShown: false }
   //       },
   //       Login04: {
   //          screen: Login04, options: { headerShown: false }
   //       },
   //       Logsignup03: {
   //          screen: Logsignup03, options: { headerShown: false }
   //       },


   //    }
   // })



   // const StackNavigator = createNativeStackNavigator({
   //    screens: {
   //       Contactlistscreen: Contactlistscreen,
   //       Contactaddscreen: Contactaddscreen,

   //       Contactdetailscreen: Contactdetailscreen
   //    }, 
   //    screenOptions: { headerShown: false }
   // })



   const Navigation = createStaticNavigation(BottomNavigator)

   return (
      <Navigation />
   )
}

export default App



{/* <View style={styles.container}>
      {/* <PracticeScreen/> */}
{/* <Contactdetailscreen/> */ }
{/* <Contactaddscreen /> */ }
{/* <Contactlistscreen/> */ }
// </View> */}