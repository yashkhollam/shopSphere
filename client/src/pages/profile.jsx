import React from 'react'
import { NavLink } from 'react-router-dom'

function profile() {
  return (
    <div  style={{marginTop:"60px"}}>
  
  <NavLink to='/adminpanel/addproduct'>
    adminpanel
  </NavLink>
<br/>
  <NavLink to='/addaddress'>add Address</NavLink>

<br />
   <NavLink to='/userorders'>get usersorders</NavLink>

    </div>
  )
}

export default profile