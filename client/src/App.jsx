import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import {Toaster} from 'react-hot-toast'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Product from './pages/products.jsx';
import Signupotpverify from './pages/signupotpverify.jsx';
import Cart from './pages/cart.jsx';
import Profile from './pages/profile.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { getMeThunk } from './components/redux/features/userauthSlice.js'
import Protectedroutes from './components/protectedroutes.jsx'
import Addproducts from './pages/addproducts.jsx'
import Products from './components/products.jsx'
function App() {



   
// const {user,isAuthenticated,getmeloading}=useSelector((state)=>state.userAuth)
const dispatch=useDispatch()

useEffect(()=>{
  console.log("get thunk run")
   dispatch(getMeThunk())
},[dispatch])

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/product",
        element:<Product/>
      },
      {
        path:"/signupotpverify",
        element:<Signupotpverify/>
      },
      {
        path:'/products',
        element:<Products/>
      },
       {
        path:"/cart",
        element:
        <Protectedroutes>
            <Cart/>
        </Protectedroutes>
        
      },
      {
        path:'/profile',
        element:<Profile/>
      },{
        path:'/addproduct',
        element:<Addproducts/>
      }
    
    ]
  }
])





  return (
   <>
      <RouterProvider router={router}/>
      <Toaster
              position='top-center'
              reverseOrder={true}
              toastOptions={{
                duration:3000,
                style:{
                  marginTop:"30px"
                }
              }}/>
   </>
  )
}

export default App