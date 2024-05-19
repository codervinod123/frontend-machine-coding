import {configureStore} from "@reduxjs/toolkit"
import { searchCache } from "./searchSlice";

const store=configureStore({
      reducer:{
         searchCache:searchCache
      }
})

export default store;