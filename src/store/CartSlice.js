import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        Remove: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
})

export const {add,Remove} = cartSlice.actions;
export default cartSlice.reducer