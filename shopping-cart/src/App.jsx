import React from 'react'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'




const appRouter=createBrowserRouter([
  {
    path:"",
    element:<Header/>,
    children:[
      {
        path:"",
        element:<HomePage/>,
        children:[]
      },
      {
        path:"cart",
        element:<Cart/>,
        children:[]
      }
    ]
  },
  {

  }
])

const App = () => {
  return (
       <Provider store={appStore}>
         <RouterProvider router={appRouter}></RouterProvider>
       </Provider>
  
  )
}

export default App
