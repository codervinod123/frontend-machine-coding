import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
   name:'counter',
   initialState:{
      val:10,
      cart:['Value'],
   },
   reducers:{
       increaseValue(state,action){
           console.log(state);
           console.log(action)
           state.val=state.val+1
      },
       decreaseValue(state){
        state.val=state.val-1
       }
  }
})

export const {increaseValue,decreaseValue}=counterSlice.actions;
export default counterSlice.reducer;