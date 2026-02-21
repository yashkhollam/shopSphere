import React from 'react'

import '../css/bottomnav.css'
import { NavLink } from 'react-router-dom';
import {Solidhome,Regularhome,RegularCart,SolidCart, RegularProfile,SolidProfile, RegularProduct,SolidProduct} from '../library/icons.jsx'
 const {cart}=useSelector((state)=>state.cartopeartion)



function Bottomnav() {
  return (
   <div className="container-fluid nav-contianer d-sm-none"
       style={{  
               bottom:"0",
                position:"fixed",
            //    width:"100%"
            padding:"0",
            height:"60px",
           
           
            
               
        }}>
    <nav className='navbar'
       style={{ display:"flex",
           
               padding:"5px 30px"}}>
   
         <NavLink to='/home' className='bottomnav-links'>
          {({isActive})=>(
             
         
      <div className={`text-center ${isActive ? "bottomnav-links active":"bottomnav-links"}`}>
        
      
        
            {
            isActive ?
             <Solidhome  className='navitem-icons'/>
            :<Regularhome  className='navitem-icons'/>
          }
        
        
         
         <p className='navitem-text'>home</p>
      </div>

       )}
       </NavLink>
     
       

       {/* <NavLink to='/product' className="bottomnav-links">
       {({isActive})=>(
             
         
      <div className={`text-center ${isActive ? "bottomnav-links active":"bottomnav-links"}`}>
        
      
          {
            isActive ?
             <SolidProduct  className='navitem-icons'/>
            :<RegularProduct  className='navitem-icons'/>
          }
        
         
         <p className='navitem-text'>product</p>
      </div>

       )}
     </NavLink> */}


     <NavLink to='/login' className="bottomnav-links">
       {({isActive})=>(
             
 <div className={`text-center ${isActive ? "bottomnav-links active":"bottomnav-links"}`}>
        
      
          {
            isActive ?
             <SolidProfile  className='navitem-icons'/>
            :<RegularProfile  className='navitem-icons'/>
          }
        
         
         <p className='navitem-text'>profile</p>
      </div>

       )}
     </NavLink>

<NavLink to='/cart' className="bottomnav-links">
       {({isActive})=>(
             
         
       <div className={`text-center ${isActive ? "bottomnav-links active":"bottomnav-links"}`}>
        
      
          {
            isActive ?
             <SolidCart  className='navitem-icons'/>
            :<RegularCart  className='navitem-icons'/>
          }
        
         <p className='cart-count'>{cart.length}</p>
         <p className='navitem-text'>cart</p>
      </div>

       )}
      </NavLink>
    </nav>
   </div>
  )
}

export default Bottomnav