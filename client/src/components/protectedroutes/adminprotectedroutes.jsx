import React from 'react'
import Loader from '../loader'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Adminprotectedroutes() {



const {isAuthenticated,isauthChecked,user}=useSelector((state)=>state.userAuth)

if(!isauthChecked){
    return <Loader/>
}

if(!isAuthenticated){
    return <Navigate to='/login' replace={true}/>
}


if(user.role!=="admin"){
   return <Navigate to='/'/>
}

  return <Outlet/>
}

export default Adminprotectedroutes