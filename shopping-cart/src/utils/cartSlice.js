import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
         cart:[],
    },
    reducers:{
        addItemToCart:(state,action)=>{
            state.cart=state.cart.push(action.payload);
        }
    }
});

export const {addItemToCart}=cartSlice.actions;
export default cartSlice=cartSlice.reducer;