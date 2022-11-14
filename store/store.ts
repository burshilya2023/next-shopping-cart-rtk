import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import CartSlice from "../slices/cartSlice/CartSlice"

import filterSlice from "../slices/filterSlice/filterSlice"
import favoriteSlice from "../slices/favoriteSlice/favoriteSlice"
import { themeReducer } from "../slices/switchThemeSlice/themeSlice"


import pizzaSlice from "../slices/pizzaSlice/pizzaSlice"
import { useDispatch } from "react-redux"

export const store = configureStore({
    reducer: {
        // [fetchPizzas.reducerPath]:fetchPizzas.reducer,//?for RTK query then
        pizza: pizzaSlice,
        filter: filterSlice,
        cart: CartSlice,
        favorite:favoriteSlice,
        theme: themeReducer,
    },
    // middleware:()=>getDefaultMiddleware().concat(fetchPizzas.middleware)
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();