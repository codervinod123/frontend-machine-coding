import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        product:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.product.push(action.payload);
        }
    }
})

export const {addItems}=cartSlice.actions;
export default cartSlice.reducer;
