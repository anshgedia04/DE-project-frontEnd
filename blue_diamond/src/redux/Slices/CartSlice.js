import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],  
    reducers:{
        add:(state,action) => {
            state.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state))      
        },
        remove:(state,action) => {
            const updatedState = state.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(updatedState));
            return updatedState;
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;