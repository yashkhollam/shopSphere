import React from 'react'
import style from  '../../css/admin.module.css'
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import { ArrowLeftIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { useSelector,useDispatch } from "react-redux";


function Adminpanel() {




const dispatch=useDispatch()
  const navigate=useNavigate()
 const {loading}=useSelector((state)=>state.userAuth)


 
const handlelogout=async()=>{
    try{
          const res=await dispatch(logoutthunk()).unwrap()

          toast.success(res.message)
          navigate('/login')
    }

    catch(err){
        toast.error(err)
    }
}


  return (
   <>
       <div className={`container-fluid p-0 ${style.panelcont}`}>
          <div className='d-lg-none ps-2 pe-2 '
               style={{
                       height:"50px",
                   
                       display:"flex",
                       alignItems:"center",
                       justifyContent:"space-between",
                       boxShadow:"0 2px 4px black",
                       backgroundColor:"black",
                       color:"white",
                       zIndex:999

               }}
              >
                 <ArrowLeftIcon
                     style={{height:"30px",fontSize:"50px",cursor:"pointer"}}
                     onClick={()=>navigate(-1)} />
             
              <Bars3Icon style={{height:"30px"}}
               data-bs-toggle="offcanvas"
               data-bs-target="#adminslidebar"/>
             
          </div>

          <div className='offcanvas offcanvas-end '
                id='adminslidebar'
                tabIndex="-1">
            <div className='offcanvas-header'>
               <h3 className='offcanvas-title'>Admin Dashboard</h3>
               <button className='btn-close'
                       data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">
                 <ul className={`list-group list-inline`}>

             <li  data-bs-dismiss="offcanvas">
                          <NavLink
                            to="/adminpanel/profile"
                            className="list-group-item list-group-item-action "
                            
                          >
                            My info
                          </NavLink>
               </li>

              <li data-bs-dismiss="offcanvas"
                              
                             >
              <NavLink to='/adminpanel/addproduct'
                     className='
                     list-group-item 
                              list-group-item-action
                               '>
                 Add product 
              </NavLink>
             </li>

            
               <li 
                     data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/viewproduct"
                           className='list-group-item list-group-item-action'>
                  View All Product
               </NavLink>
                 </li>


               
                <li
                 data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/orders"
                            className='list-group-item list-group-item-action'>
                     All Orders
                  </NavLink>
                 </li>


                 <li 
                  data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/allusers"
                           className='list-group-item list-group-item-action'>
                     All  Users
                  </NavLink>
                  </li>

                  <li  data-bs-dismiss="offcanvas">
                                <NavLink
                                  to="/adminpanel/changepassword"
                                  className="list-group-item list-group-item-action "
                                >
                                  Change Password
                                </NavLink>
                              </li>

             <button className="btn bg-danger text-light  w-100 mt-5"
                   style={{
                          
                   }}
                   onClick={handlelogout}
                   disabled={loading.logoutloading}>
                {loading.logoutloading? "Logging out":"Logout"}
            </button>
                  
            </ul>
            </div>
          </div> 

         
          <div className={`row g-0 ${style.row}`}>
            <div className={`d-none d-lg-block col-lg-3 ps-2 pe-2 ${style.slidbarlist} `}
                 >

           <ul className={`list-group  list-unstyled `}>
              
               <li  data-bs-dismiss="offcanvas">
                          <NavLink
                            to="/adminpanel/profile"
                            className="list-group-item list-group-item-action "
                            
                          >
                            My info
                          </NavLink>
               </li>

              <li 
                              data-bs-dismiss="offcanvas"
                              
                             >
              <NavLink to='/adminpanel/addproduct'
                     className='list-group-item 
                              list-group-item-action '>
                 Add product 
              </NavLink>
             </li>

            
               <li 
                     data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/viewproduct"
                           className='list-group-item list-group-item-action'>
                  View All Product
               </NavLink>
                 </li>


               
                <li 
                 data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/orders"
                            className='list-group-item list-group-item-action'>
                      ALL Orders
                  </NavLink>
                 </li>


                 <li 
                  data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/allusers"
                           className='list-group-item list-group-item-action'>
                      All Users
                  </NavLink>
                   </li>
                    <li  data-bs-dismiss="offcanvas">
                                <NavLink
                                  to="/adminpanel/changepassword"
                                  className="list-group-item list-group-item-action "
                                >
                                  Change Password
                                </NavLink>
                              </li>

                     <button className="btn bg-danger text-light  w-100 mt-5"
                  
                   onClick={handlelogout}
                   disabled={loading.logoutloading}>
                {loading.logoutloading? "Logging out":"Logout"}
            </button>
                  
            </ul>
         

            </div>
            <div className={`col-12 col-lg-8 p-0   ${style.dynamiccom}`}>
               {
                   <Outlet/>
               }  
            </div>
          </div>
       </div>
   </>
  )
}

export default Adminpanel