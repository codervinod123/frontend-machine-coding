import React from 'react'
import Container from "./components/Container";
import Counter from './components/Counter';
import {Provider} from "react-redux"
import store from './utils/store';

const App = () => {
   
   
 

  return (
   <Provider store={store}>
     <div>
       <Counter/>
     </div>
   </Provider>
  )
}

export default App
