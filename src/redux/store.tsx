import cartReducer from '../redux/Slices/CartSlice'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/Slices/userSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer)
const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: persistedReducer,
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


