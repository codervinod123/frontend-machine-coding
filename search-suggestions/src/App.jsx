import React from 'react'
import SearchBox from './components/SearchBox'
import {Provider} from "react-redux"
import store from '../utils/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className='flex justify-center h-[100vh] w-[100vw] bg-gray-200'>
       <SearchBox/>
     </div>
   </Provider>
  )
}

export default App
