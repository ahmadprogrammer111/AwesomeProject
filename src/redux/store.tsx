import cartReducer from '../redux/Slices/CartSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:  {
       cart: cartReducer}
})

export default store


// console.log('initial state ', store.getState())

store.subscribe ( ()=>{
console.log('items in store', JSON.stringify(store.getState(), null, 2 ))
})


