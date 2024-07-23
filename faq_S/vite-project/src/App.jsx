import React from 'react'
import Faq from './components/Faq'
import { queData } from './utils/queData'


const App = () => {
  return (
    <div className='w-[100vw] bg-slate-800 flex justify-center border'>
      <Faq que={queData}/>
    </div>
  )
}

export default App