import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        addItemToCart:(state,action)=>{
            state.item.push(action.payload);
        }
    }
});

export const {addItemToCart}=cartSlice.actions;
export default cartSlice.reducer;
