import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './CartSlice'
import ProductReducer from './productSlice'

export const store = configureStore({
    reducer: {
        cart: CartReducer,
        product : ProductReducer
    },
})

export default store