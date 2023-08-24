'use client'

import { configureStore } from "@reduxjs/toolkit"
import cartItemsReducers from "./itemCount/cartItemsCount"

export const store = configureStore({
    reducer: {
        cartCounter: cartItemsReducers,

    }
})