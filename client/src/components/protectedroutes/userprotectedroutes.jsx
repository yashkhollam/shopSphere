import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader.jsx'

function Userprotectedroutes() {



const {isAuthenticated,isauthChecked,user}=useSelector((state)=>state.userAuth)


if(!isauthChecked){
    return <Loader/>
}



if(!isAuthenticated){
  return  <Navigate  to='/login' replace/>
}



if(user?.role==="admin"){
   return <Navigate  to='/adminpanel' replace/>
}


  return  <Outlet/>
  
 
  
}

export default Userprotectedroutes