import React from 'react'
import Container from "./components/Container";
import Counter from './components/Counter';
import {Provider} from "react-redux"
import appStore from './utils/appStore';

const App = () => {
   
   
  return (
    <Provider store={appStore}>
      <div>
       {/* <Counter/> */}
      </div>
     </Provider>
  )
}

export default App
