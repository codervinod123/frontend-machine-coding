import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const appStore=configureStore({
    reducer:{
        counter:counterSlice
    }
})
export default appStore;