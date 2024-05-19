import { configureStore } from "@reduxjs/toolkit";
import cartSLice from "./cartSLice";


const store=configureStore({
  reducer:{
    cartSlice:cartSlice
  }
})
export default store;