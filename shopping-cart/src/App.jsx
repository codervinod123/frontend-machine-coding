import React from 'react'
import Home from "../src/components/HomePage";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './utils/store';


const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<Header/>,
      children:[
        {
          path:"/",
          element:<Home/>,
          children:[]
        },
        {
          path:"/cart",
          element:<Cart/>,
          children:[]
        }
      ]
    },

  ]
) 

const App = () => {
  return (
      <Provider store={store}>
        <RouterProvider router={appRouter}/>
      </Provider>
  )
}

export default App
