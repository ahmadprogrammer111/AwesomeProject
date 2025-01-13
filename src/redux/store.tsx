import cartReducer from '../redux/Slices/CartSlice'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/Slices/userSlice'
import bloodReducer from '../redux/Slices/BloodSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';




const persistConfig = {
    key: "root",
    storage: AsyncStorage,

};


const persistConfig1 = {
    key: "root1",
    storage: AsyncStorage,
};



const persistedReducer = persistReducer(persistConfig, userReducer)
const persistedReducer1 = persistReducer(persistConfig1, bloodReducer)


const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: persistedReducer,
        blood: persistedReducer1,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export const persistor = persistStore(store)
export default store

// console.log('initial state ', store.getState())

store.subscribe(() => {
    console.log('items in store', JSON.stringify(store.getState(), null, 2))
})


