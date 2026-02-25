import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from './loader'

function Protectedroutes() {



const {isAuthenticated,isauthChecked}=useSelector((state)=>state.userAuth)


if(!isauthChecked){
    return <Loader/>
}



if(!isAuthenticated){
  return  <Navigate  to='/login' replace/>
}


  return  <Outlet/>
  
 
  
}

export default Protectedroutes