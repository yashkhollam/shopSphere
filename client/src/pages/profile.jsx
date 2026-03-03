import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { Bars3Icon } from "../library/icons.jsx";

function profile() {
  return (
    <div className="container-fluid"
     style={{ marginTop: "60px", 
              width:"100%"
     }}>
     

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
                     data-bs-target="#profilemenu"/>
                   
                </div>


     {/* slidebar */}
      <div className="offcanvas offcanvas-end" id="profilemenu"
          >
        <div className="offcanvas-header">
          <h1>Profile</h1>

          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
             <ul className="list-group list-inline">
            <li  data-bs-dismiss="offcanvas">
              <NavLink
                to="userinfo"
                className="list-group-item list-group-item-action "
                
              >
                User Info
              </NavLink>
            </li>
            <li  data-bs-dismiss="offcanvas">
              <NavLink
                to="userorders"
                className="list-group-item list-group-item-action "
              >
                My Orders
              </NavLink>
            </li>

            <li  data-bs-dismiss="offcanvas">
              <NavLink
                to="/3"
                className="list-group-item list-group-item-action "
              >
                Address
              </NavLink>
            </li>

             <li  data-bs-dismiss="offcanvas">
              <NavLink
                to="changepassword"
                className="list-group-item list-group-item-action "
              >
                Change Password
              </NavLink>
            </li>

          

            {/* <li className='list-group-item list-group-item-action '>My Orders</li>
          <li className='list-group-item list-group-item-action '>Address</li>
           <li className='list-group-item list-group-item-action '>Logout</li>
        */}
          </ul>

           <button className="btn bg-danger text-light  w-100"
                   style={{
                           marginTop:"100%"
                   }}>
                logout
            </button>
        </div>
      </div>


    {/* big screen */}
      
   <div className=""
        >
     <div className="row p-0 m-0"
          style={{
                  width:"100%"
          }}>
          <div className={`col-12 col-lg-3 d-none d-lg-block`}
               style={{height:"100vh",
                       overflowY:"auto"
               }}>
          <ul className="list-group list-inline">
            <li>
              <NavLink
                to="userinfo"
                className="list-group-item list-group-item-action "
              >
                User Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to="userorders"
                className="list-group-item list-group-item-action "
              >
                My Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/3"
                className="list-group-item list-group-item-action "
              >
                Address
              </NavLink>
            </li>

             <li>
              <NavLink
                to="/3"
                className="list-group-item list-group-item-action "
              >
                Change Password
              </NavLink>
            </li>

          

            {/* <li className='list-group-item list-group-item-action '>My Orders</li>
          <li className='list-group-item list-group-item-action '>Address</li>
           <li className='list-group-item list-group-item-action '>Logout</li>
        */}
          </ul>
        
         <button className="btn bg-danger text-light  w-100"
                   style={{
                           marginTop:"100%"
                   }}>
                logout
            </button>


          </div>
          <div className="col-12 col-lg-9 p-0"
               style={{height:"100vh",
                       overflowY:"auto"
               }}>
               <Outlet/>
          </div>
        </div>
   </div>
        
        
      
    </div>
  );
}
import { Bars3Icon } from "../library/icons";

export default profile;
