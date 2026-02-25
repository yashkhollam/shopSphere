import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {MagnifyingGlassIcon,RegularProfile,SolidProfile,RegularCart,SolidCart} from '../library/icons.jsx'
import Profiledropdown from './profiledropdown.jsx';
import '../css/pracnavbar.css'
import {useDispatch,useSelector} from 'react-redux'
import {setSearchtext} from './redux/features/productSlice.js';



function Navbar() {
  const {cart}=useSelector((state)=>state.cartopeartion)
 const navigate=useNavigate()
   const [searchdata,setSearchdata]=useState("")
  const [isshowprofiledropdown,setisshowprofiledropdown]=useState(false)

  
const dispatch=useDispatch();

// useEffect(()=>{
  
// },[dispatch])

const handlesearch=(e)=>{
  const value=e.target.value
 setSearchdata(value)
 

 if(value.trim()!==""){
   navigate('/allproducts')
  }
  
    
}




useEffect(()=>{

  const timer=setTimeout(()=>{
      dispatch(setSearchtext(searchdata));
  },3000)
   
   return ()=>clearTimeout(timer) 
    
},[searchdata])

  return (
    <>
      <div className="container-fluid p-0 nav-container">
          
         <div className="navbar">
           <ul className='group-list p-0'>
             <li className='logo-cont'>

               <NavLink to='/'>
                    <img src="shopeSpherelogo.jpeg" alt="shopeSpherelogo"
                  className='logo-img img-fluid' />
               </NavLink>
               
               
             </li>

             <li className='searchbar-cont'>

            
                 <div className='search-wrapper'>
                      <MagnifyingGlassIcon className='search-icon'/>


               <input type="text" 
                      className='form-control  searchbar ps-5'
                      placeholder='Search for Products,Brands and More ...'
                    value={searchdata}
                    onChange={handlesearch}
                      // onChange={(e)=>dispatch(setSearchtext(e.target.value))}    
                  />
                 
                 </div>
            
             </li>

            {/* <li className='list-items'>

               <NavLink to='/products'>
                   products
               </NavLink>
               
               
             </li> */}
             

             <li className='d-none d-sm-flex gap-2 ' >
              

               
                <div className='d-flex profile-cont' 
                  onMouseEnter={()=>setisshowprofiledropdown(true)}
                onMouseLeave={()=>setisshowprofiledropdown(false)}
                style={{position:"relative"}}
                  >

                      {isshowprofiledropdown
                   ?  <SolidProfile  className='cart-icon'/> :<RegularProfile  className='profile-icon'/> 
                }
                   
                   
                   <p className='profile-txt'>profile</p>


                   {isshowprofiledropdown && <Profiledropdown/>}
                </div>
                  



                 <NavLink to='/cart'
                  style={{textDecoration:"none",color:"black"}} 
                  className={({isActive})=>(
                    `${isActive ? "navlink active" : "navlink" }`
                  )}>

                
                

                
                {({isActive})=>(
                   <div className='d-flex  cart-cont'>
                    {isActive ? <SolidCart className='cart-icon'/>:<RegularCart  className='cart-icon'/> 
                     }
                      <p className='cart-txt'>cart</p>
                      <p style={{backgroundColor:"yellowgreen",
                                 width:"20px",
                                 height:"20px",
                                 textAlign:"center",
                                  borderRadius:"50%",
                                  position:"absolute",
                                  right:"0"}}>{cart.length}</p>
                    
              </div>
                )}
                
                 
              
              
 </NavLink>
             </li>

             {/* <li className='d-none d-sm-flex' >
             
             </li> */}
           </ul>
         </div>
      </div>
    </>
  )
}

export default Navbar