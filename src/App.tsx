import { TouchableOpacity, View } from 'react-native'
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
// import Icon8 from 'react-native-vector-icons/Fontisto.js'



import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import { Screen, screensEnabled } from 'react-native-screens'
import PracticeScreen from './views/screens/PracticeScreen'
import Home08 from './views/screens/FurnitureScreens/Home08'
import Search09 from './views/screens/FurnitureScreens/Search09.tsx'
import Product010 from './views/screens/FurnitureScreens/Product010.tsx'
import Productdetailscreen11 from './views/screens/FurnitureScreens/Productdetailscreen11.tsx'
import ProductDetailScreen from './views/screens/ShoppingApp/ProductDetailScreen.tsx'
import Cart12 from './views/screens/FurnitureScreens/Cart12.tsx'
import CheckOut13 from './views/screens/FurnitureScreens/CheckOut13.tsx'
import Message14 from './views/screens/FurnitureScreens/Message14.tsx'
import Account15 from './views/screens/FurnitureScreens/Account15.tsx'
import WeatherHome from './views/screens/WeatherScreens/WeatherHome.tsx'
import WeatherDetail from './views/screens/WeatherScreens/WeatherDetail.tsx'

import HomeScreen from './views/screens/ShoppingApp/HomeScreen.tsx'
import CartScreen from './views/screens/ShoppingApp/CartScreen.tsx'
import { Provider, useSelector } from 'react-redux'
import store from './redux/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'



import Contactdetailscreen2 from './views/screens/ContactScreens2/Contactdetailscreen2.tsx'
import Contactaddscreen2 from './views/screens/ContactScreens2/Contactaddscreen2.tsx'
import Contactlistscreen2 from './views/screens/ContactScreens2/Contactlistscreen2.tsx'
import { LogLevel, OneSignal } from 'react-native-onesignal';
import ThreadsHome from './views/screens/ThreadsApp/ThreadsHome.tsx'
import ThreadsDetails from './views/screens/ThreadsApp/ThreadsDetails.tsx'
import ThreadsSearch from './views/screens/ThreadsApp/ThreadsSearch.tsx'
import ThreadsCreate from './views/screens/ThreadsApp/ThreadsCreate.tsx'
import ThreadsCreateIcon from './components/ThreadsComponents/ThreadsCreateIcon.tsx'
import ThreadsActivity from './views/screens/ThreadsApp/ThreadsFeed.tsx'
import ThreadsFeed from './views/screens/ThreadsApp/ThreadsFeed.tsx'
import ThreadsProfile from './views/screens/ThreadsApp/ThreadsProfile.tsx'

import ThreadsLogin from './views/screens/ThreadsApp/ThreadsLogin.tsx'
import ThreadsSignUp from './views/screens/ThreadsApp/ThreadsSignUp.tsx'
import ThreadsForgotPass from './views/screens/ThreadsApp/ThreadsForgotPass.tsx'
import ThreadsSplash from './views/screens/ThreadsApp/ThreadsSplash.tsx'
import ThreadsSettings from './views/screens/ThreadsApp/ThreadsSettings.tsx'
import BloodSplashScreen from './views/screens/BloodDonationScreens/BloodSplash.tsx'
import BloodLogin from './views/screens/BloodDonationScreens/BloodLogin.tsx'
import BloodMenu from './views/screens/BloodDonationScreens/BloodMenu.tsx'
import BloodRegister from './views/screens/BloodDonationScreens/BloodRegister.tsx'
import BloodBankDonorsSearch from './views/screens/BloodDonationScreens/BloodBankDonorsSearch.tsx'
import BloodBankSearch from './views/screens/BloodDonationScreens/BloodBankSearch.tsx'
import { DefaultTheme, MD3LightTheme, PaperProvider, ThemeProvider } from 'react-native-paper'
import BloodProfile from './views/screens/BloodDonationScreens/BloodProfile.tsx'
import BloodHome from './views/screens/BloodDonationScreens/BloodHome.tsx'
import { ConnectivityProvider } from './Context/Connection.tsx'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BloodStart from './views/screens/BloodDonationScreens/BloodSplash.tsx'
import BloodVerifyEmail from './views/screens/BloodDonationScreens/BloodVerifyEmail.tsx'







const App = () => {


   const persistor = persistStore(store)

   // const bottomNavigator = createBottomTabNavigator({

   //    screens: {
   //       HomeScreen: {
   //          screen: HomeScreen,
   //          options: {
   //             tabBarIcon: ({ color }) => <Icon6 name='home' size={35} color={color} style={{ height: '120%' }} />
   //          }
   //       },
   //       ProductDetailScreen: {
   //          screen: ProductDetailScreen,
   //          options: {
   //             tabBarIcon: ({ color }) => <Icon5 name='menu' size={35} color={color} style={{ height: '120%' }} />
   //          }
   //       },
   //       CartScreen: {
   //          screen: CartScreen,
   //          options: {
   //             tabBarBadge: 0,
   //             tabBarIcon: ({ color }) => <Icon7 name='cart-sharp' size={35} color={color} style={{ height: '120%' }} />,
   //          }
   //       }
   //    },
   //    screenOptions: {
   //       headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#ED6767', tabBarStyle: {
   //          paddingTop: 3
   //       }
   //    }
   // })


   // const BottomNavigator = createBottomTabNavigator({

   //    screens: {
   //       Home: {
   //          screen: Home08, options: { tabBarIcon: ({ color }) => <Icon name='home' size={30} color={color} /> }
   //       },
   //       Product010: {
   //          screen: Product010, options: { tabBarIcon: ({ color }) => <Icon2 name='bookshelf' size={30} color={color} /> }
   //       },
   //       Search09: {
   //          screen: Search09, options: { tabBarIcon: ({ color }) => <Icon3 name='bookmark' size={25} color={color} /> }
   //       },
   //       Message14: {
   //          screen: Message14, options: { tabBarIcon: ({ color }) => <Icon4 name='chat-bubble-outline' size={30} color={color} /> }
   //       },
   //       Account15: {
   //          screen: Account15, options: { tabBarIcon: ({ color }) => <Icon2 name='account' size={30} color={color} /> }
   //       },
   //    },
   //    screenOptions: {
   //       tabBarActiveTintColor: 'black', headerShown: false, tabBarShowLabel: false, tabBarStyle: {
   //          height: '8%',
   //          paddingTop: 10
   //          // alignItems: 'center',
   //          // justifyContent: 'center'
   //       }
   //    },

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
   //          screen: BottomNavigator, options: { headerShown: false }
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
   //       Contactlistscreen: Contactlistscreen2,
   //       Contactaddscreen: Contactaddscreen2,

   //       Contactdetailscreen: Contactdetailscreen2
   //    },
   //    screenOptions: { headerShown: false }
   // })

   // const MenuIcon = () => {
   //    return (
   //       <TouchableOpacity onPress={()=> navigation.navigate('ThreadsProfile1' as never)  }>
   //          <Icon5 name='menu' size={30} color='black' style={{ marginRight: 30 }} />
   //       </TouchableOpacity>
   //    )
   // }

   // const RemoveOpacity = (props: any) => {
   //    return (
   //       <TouchableOpacity {...props} activeOpacity={1} />)
   // }
   // const RemoveRippleEffect = (props: any) => {
   //    return (
   //       <TouchableOpacity {...props} activeOpacity={0} />)
   // }






   // const stack2 = createNativeStackNavigator({
   //    screens: {
   //       ThreadsProfile: ThreadsProfile,
   //       ThreadsSettings: ThreadsSettings
   //    },
   //    screenOptions: {
   //       headerShown: false,
   //       // animation:'slide_from_right'
   //    }
   // })



   // const stack3 = createNativeStackNavigator({
   //    screens: {
   //       ThreadsHome2: ThreadsHome,
   //       ThreadsDetails: ThreadsDetails
   //    },
   //    screenOptions: {
   //       headerShown: false,
   //    }
   // })

   // const stack4 = createNativeStackNavigator({
   //    screens: {
   //       ThreadsSearch1: ThreadsSearch,
   //       ThreadsDetails: ThreadsDetails
   //    },
   //    screenOptions: {
   //       headerShown: false,

   //       // animation:'slide_from_right'
   //    }
   // })

   // const BottomNavigator = createBottomTabNavigator({

   //    screens: {
   //       ThreadsHome: {
   //          screen: stack3, options: {

   //             tabBarButton: (props) => (<RemoveRippleEffect {...props} />
   //             ),
   //             tabBarIcon: ({ color }) => <Icon6 name='home' color={color} size={30} />
   //          }
   //       },
   //       ThreadsSearch: {
   //          screen: stack4, options: {
   //             tabBarButton: (props) => (<RemoveRippleEffect {...props} />
   //             ),
   //             tabBarIcon: ({ color }) => <Icon4 name='search' color={color} size={30} />
   //          }
   //       },
   //       ThreadsCreate: {
   //          screen: ThreadsCreate, options: {
   //             tabBarButton: (props) => (<RemoveOpacity {...props} />
   //             ),
   //             tabBarIcon: ({ color }) => <ThreadsCreateIcon color={color} />
   //          }
   //       },
   //       ThreadsFeed: {
   //          screen: ThreadsFeed, options: {
   //             tabBarButton: (props) => (<RemoveRippleEffect {...props} />
   //             ),
   //             tabBarIcon: ({ color }) => <Icon7 name='heart-half' color={color} size={27} />
   //          }
   //       },
   //       ThreadsProfile1: {
   //          screen: stack2, options: {
   //             // headerShown: true,
   //             // headerTitle: "",
   //             // headerShadowVisible: false,
   //             // headerRight: () => <MenuIcon />,
   //             tabBarButton: (props) => (<RemoveRippleEffect {...props} />
   //             ),
   //             tabBarIcon: ({ color }) => <Icon7 name='person' color={color} size={25} />
   //          }
   //       },
   //    },
   //    screenOptions: {

   //       tabBarStyle: {
   //          paddingTop: 3,
   //          // borderTopWidth: 0,
   //          elevation: 0,
   //          backgroundColor: '#eaeded'
   //       },
   //       headerShown: false,
   //       tabBarShowLabel: false,
   //       tabBarBackground: () => false,
   //       tabBarActiveTintColor: 'black',
   //       tabBarHideOnKeyboard: true,
   //    },
   // })


   // const MainStack = createNativeStackNavigator({
   //    screens: {
   //       ThreadsSplash: ThreadsSplash,
   //       ThreadsLogin: ThreadsLogin,
   //       ThreadsSignUp: ThreadsSignUp,
   //       ThreadsForgotPass: ThreadsForgotPass,
   //       ThreadsHome1: BottomNavigator
   //    },
   //    screenOptions: {
   //       headerShown: false,
   //    }
   // })


   const stack = createNativeStackNavigator({
      screens: {
         BloodStart: BloodStart,
         BloodVerifyEmail: BloodVerifyEmail,
         BloodLogin: BloodLogin,
         BloodRegister: BloodRegister,
         BloodBankSearch: BloodBankSearch,
         BloodBankDonorsSearch: BloodBankDonorsSearch,
         BloodProfile: BloodProfile,
         BloodHome: BloodHome

      },
      screenOptions: {
         headerShown: false,
      }
   })

   const Navigation = createStaticNavigation(stack)


   return (
      <SafeAreaProvider>
         <ConnectivityProvider>
            <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  <PaperProvider  >
                     <Navigation />
                     {/* <PracticeScreen /> */}
                  </PaperProvider>
               </PersistGate>
            </Provider>
         </ConnectivityProvider>
      </SafeAreaProvider>
   )
}




export default App



