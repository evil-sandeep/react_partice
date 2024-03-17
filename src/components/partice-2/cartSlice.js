import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: ((state, action) => {
            state.items.push(action.payload)
        }),
        clearCart: ((state) => {
            state.items = []
        }),
        removeLstItem:((state,action)=>{
            state.items.pop(action.payload)
        })
    }

})

export const { addItem, clearCart,removeLstItem } = cartSlice.actions;

export default cartSlice.reducer