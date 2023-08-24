'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const cartCounter = createSlice({
    name: 'cartCounter',
    initialState,
    reducers: {
        addToCart: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
            state.value
        }

    }
})

export const { addToCart, decrement } = cartCounter.actions
export default cartCounter.reducer