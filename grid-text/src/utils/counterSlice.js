import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:'counterSlice',
    initialState:{
        counter:0,
    },
    reducers:{
        decreaseCounter:(state)=>{
            state.counter=state.counter-1;
        },
        increaseCounter:(state)=>{
            state.counter=state.counter+1;
        }
    }
})

export const {decreaseCounter,increaseCounter}=appSlice.actions
export default appSlice.reducer;