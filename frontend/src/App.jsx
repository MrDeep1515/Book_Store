import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from './Components/Customer/navbar';
import {Dashboard} from "./Components/Customer/Pages/index"
import BuyNow from './Components/Customer/Pages/buyNow';
import Login from './Components/Customer/Pages/login';
import OrderRegister from './Components/Customer/Pages/orderRegister';
import MyOrders from './Components/Customer/Pages/myOrders';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          path:"",
          element:<Dashboard/>
        },
        {
          path:"buyNow/:id",
          element:<BuyNow/>
        },
        {
          path:"login/:id",
          element:<Login/>
        },
        {
          path:"orderRegister/:id",
          element:<OrderRegister/>
        },
        {
          path:"myOrders",
          element:<MyOrders/>
        }
      ]
      
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;