import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
// import Product from './pages/products.jsx';
import Signupotpverify from "./pages/signupotpverify.jsx";
import Cart from "./pages/cart.jsx";
import Profile from "./pages/profile.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMeThunk } from "./components/redux/features/userauthSlice.js";
import Addproducts from "./pages/admin/addproducts.jsx";

import { getallcartitemsthunk } from "./components/redux/features/cartSlice.js";
import AllProducts from "./components/allproducts.jsx";
import ProductDetail from "./pages/product.jsx";
import Adminpanel from "./pages/admin/adminpanel.jsx";
import Adminviewallproduct from "./pages/admin/adminviewallproduct.jsx";
import Orders from "./pages/admin/orders.jsx";
import Allusers from "./pages/admin/allusers.jsx";
import Updateproduct from "./pages/admin/updateproduct.jsx";
import AddAddress from "./pages/addAddress.jsx";
import UserAllOrders from "./pages/userallorders.jsx";
import Orderbyid from "./pages/admin/orderbyid.jsx";
import Userinfo from "./pages/userinfo.jsx";
import Forgotpassword from "./pages/forgotpassword.jsx";
import ResetPassword from "./pages/resetPassword.jsx";
import Changepassword from "./pages/changepassword.jsx";
import Aboutus from "./pages/aboutus.jsx";
import Revieworder from "./pages/revieworder.jsx";
import Userprotectedroutes from "./components/protectedroutes/userprotectedroutes.jsx";
import Adminprotectedroutes from "./components/protectedroutes/adminprotectedroutes.jsx";


function App() {
  // const {user,isAuthenticated,getmeloading}=useSelector((state)=>state.userAuth)
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("get thunk run")
    dispatch(getMeThunk()).then((res)=>{ //only if user login the getcart will dispatch

      const  user=res.payload.data
      
       if(user && user.role==="user"){
            dispatch(getallcartitemsthunk());
       }
    })
   
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {path: "/",element: <Home />},
        {path: "/login",element: <Login />},
        {path: "/signup",element: <Signup />},
        {path: "/signupotpverify",element: <Signupotpverify />},
        {path: "/allproducts",element: <AllProducts />},
        {path: `/product/:productId`,element: <ProductDetail />},
        {
        path:'/forgotpassword',element:<Forgotpassword/>
        },
        {
          path:'/resetpassword',
          element:<ResetPassword/>
        },{
          path:'/aboutus',
          element:<Aboutus/>

        },

          {
          element: <Userprotectedroutes/>,
          children: [
            {path: "/cart",element: <Cart />},
            
            {path: "/addaddress",element: <AddAddress />},
            {path: "/orderbyid/:id",element: <Orderbyid />},
            {path:"/revieworder",element:<Revieworder/>},
           
               {path: "/profile",element: <Profile />,
                 children: [
                {index: true,element: <Userinfo />},
                {path:"userorders",element: <UserAllOrders />},
                {path:"userinfo",element: <Userinfo />},
                {path:'changepassword',element:<Changepassword/>},
              ],}],
            },
           

            
            {
              
              element:<Adminprotectedroutes/>,
              children: [
                {
                  path:'/adminpanel',
                  element:<Adminpanel/>,
                  children:[
                        {index: true,element: <Adminviewallproduct />},
                {path: "addproduct",element:<Addproducts />},
                {path: "viewproduct",element:<Adminviewallproduct />},
                {path: "orders",element: <Orders />},
                {path: "allusers",element: <Allusers />},
                {path: "updateproduct/:id",element: <Updateproduct />},
                 { path: "profile", element: <Userinfo /> },
        { path: "changepassword", element: <Changepassword /> }
                  ]
                }
               
                        ],
            },
          ],
        },
      ])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 3000,
          style: {
            marginTop: "30px",
          },
        }}
      />
    </>
  );
}

export default App;
