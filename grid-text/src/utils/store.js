import {configureStore} from "@reduxjs/toolkit"
import appSlice from './counterSlice'

const store=configureStore({
     reducer:{
        appSlice:appSlice,
     }
})

export default store;