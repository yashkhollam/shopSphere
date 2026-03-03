import React from 'react'
import style from  '../../css/admin.module.css'
import {NavLink, Outlet} from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Adminpanel() {
  return (
   <>
       <div className={`container-fluid p-0  ${style.panelcont}`}>
          <div className='d-lg-none pe-2'
               style={{
                       height:"50px",
                   
                       display:"flex",
                       alignItems:"center",
                       justifyContent:"right",
                       boxShadow:"0 2px 4px black",
                       backgroundColor:"black",
                       color:"white"
               }}
              >
             
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
                      Orders
                  </NavLink>
                 </li>


                 <li 
                  data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/allusers"
                           className='list-group-item list-group-item-action'>
                       Users
                  </NavLink>
                  </li>
            </ul>
            </div>
          </div> 

         
          <div className={`row ${style.row}`}>
            <div className={`d-none d-lg-block col-lg-3 ${style.slidbarlist} `}
                 >

           <ul className={`list-group  list-unstyled`}>
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
                      Orders
                  </NavLink>
                 </li>


                 <li 
                  data-bs-dismiss="offcanvas">
                  <NavLink to="/adminpanel/allusers"
                           className='list-group-item list-group-item-action'>
                       Users
                  </NavLink>
                  </li>
            </ul>
         

            </div>
            <div className={`col-12 col-lg-8  ${style.dynamiccom}`}>
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