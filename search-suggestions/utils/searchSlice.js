import {createSlice} from "@reduxjs/toolkit"

const searchSlice=createSlice({
    name:"searchSlice",
    initialState:{
          value:false
    },
    reducers:{
        searchCache:(state)=>{
            state.value=!state.value
        }
    }
})

export const {searchCache}=searchSlice.actions;
export default searchSlice.reducer;