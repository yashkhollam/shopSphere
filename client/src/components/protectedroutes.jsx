import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from './loader'

function Protectedroutes({role}) {



const {isAuthenticated,isauthChecked,user}=useSelector((state)=>state.userAuth)


if(!isauthChecked){
    return <Loader/>
}



if(!isAuthenticated){
  return  <Navigate  to='/login' replace/>
}


if(role&& user.role!==role){
  return <Navigate  to='/' replace/>
}

  return  <Outlet/>
  
 
  
}

export default Protectedroutes