import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { QueryStatus } from '@reduxjs/toolkit/query'



const initialState: any = {
    items: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingitems = state.items.find((item: any) => item.id === action.payload.id)
            if (existingitems) {
                existingitems.quantity += 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item: any) => item.id !== action.payload.id)
        },
        resetCart: (state) => {
            state.items = []
        }
    }
})


export const { addItem, removeItem, resetCart } = CartSlice.actions
export default CartSlice.reducer

