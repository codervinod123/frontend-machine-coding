import React from 'react'
import fileData from './utils/fileData'
import FileSystem from './components/FileSystem'

const App = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-black'>
      <FileSystem files={fileData}/>
    </div>
  )
}

export default App
