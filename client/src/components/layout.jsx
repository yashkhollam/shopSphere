

import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Bottomnav from './bottomnav'

function Layout() {
  return (
   <>
     <Navbar/>
     <Bottomnav/>
     <Outlet/>
   </>
  )
}

export default Layout