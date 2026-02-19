import React, { useEffect, useState } from 'react';
// import '../css/navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {MagnifyingGlassIcon,RegularProfile,SolidProfile,RegularCart,SolidCart} from '../library/icons.jsx'
import Profiledropdown from './profiledropdown.jsx';

// function Navbar() {

// const [isshowprofiledropdown,setisshowprofiledropdown]=useState(false)


//   return (
//     <>

//        <div className="container-fluid nav-container p-0 " 
//            >
//         <nav className='navbar p-0  h-100'>
        
//         {/* <NavLink to='/home'>
//             <div className="shopeSpherelogo-cont"
//                style={{cursor:"pointer"}}
//                 >
//                   <img src="shopeSpherelogo.jpeg" alt="shopeSpherelogo" srcset=""
//                   className='logo' />
//                 </div>
//         </NavLink>
//           */}
//          <div className="shopeSpherelogo-cont"
//                style={{cursor:"pointer"}}
//                 >
//                   <img src="shopeSpherelogo.jpeg" alt="shopeSpherelogo" srcset=""
//                   className='logo' />
//                 </div>




//           <div className='search-container'>
//            <MagnifyingGlassIcon className='search-icon'/>
//             <input type="search "
//                    className='form-control'
//                     placeholder='Search for Products,Brands and More ...' 
//                     style={{
//                       paddingLeft:"40px",
                     
//                     }}
//                   />
//           </div>


//           <div className='d-none d-md-flex'>
//              <ul className='d-flex '
//                  style={{
//                   listStyleType:"none",
//                   gap:"45px",
//                   padding:"0 0px 0 0",
//                   margin:"0",
//                   cursor:"pointer"
//                  }}>

//             {/* <NavLink to='/product' className={({isActive})=>`${isActive ? "navbar-link active":"navbar-link"}`}>
//               <li className='navbar-item-text'>Products</li>
//             </NavLink> */}
            
//            <li className="navbar-item"
//                 onMouseEnter={()=>setisshowprofiledropdown(true)}
//                 onMouseLeave={()=>setisshowprofiledropdown(false)}
//                 style={{position:"relative"}}>
 
//     <div className="nav-content" 
        
//          >





//       <RegularProfile className="nav-icon" />
//       <span className="navbar-item-text">Profile</span>
//     </div>
  

//   {isshowprofiledropdown && <Profiledropdown/>}
// </li>

            
             
            
//             <li className='navbar-item '>
//              <NavLink to='/cart' className="navbar-link">
//               <div className='nav-content'>
//                   <RegularCart className='nav-icon'/> 
//                   <span className='navbar-item-text'>Cart</span>
//               </div>
              
//              </NavLink>
//              </li>
              
           

//              </ul>
//           </div>
//         </nav>
//        </div>
//     </>
//   )
// }

// export default Navbar





// import React from 'react'
import '../css/pracnavbar.css'

import {useDispatch} from 'react-redux'
import { setSearchtext } from './redux/features/productSlice.js';

function Navbar() {

 const navigate=useNavigate()
   const [searchdata,setSearchdata]=useState("")
  const [isshowprofiledropdown,setisshowprofiledropdown]=useState(false)

const dispatch=useDispatch();



const handlesearch=(e)=>{
   setSearchdata(e.target.value)
   navigate('/products')
    
}


useEffect(()=>{
   dispatch(setSearchtext(searchdata))
},[searchdata])

  return (
    <>
      <div className="container-fluid p-0 nav-container">
          
         <div className="navbar">
           <ul className='group-list p-0'>
             <li className='logo-cont'>

               <NavLink to='/home'>
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

            <li className='list-items'>

               <NavLink to='/products'>
                   products
               </NavLink>
               
               
             </li>
             

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