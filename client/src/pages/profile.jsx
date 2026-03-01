import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function profile() {
  return (
    <div className="container-fluid"
     style={{ marginTop: "60px", 
              width:"100%"
     }}>
      <div className=" d-lg-none">
        <button
          className="btn btn-danger"
          data-bs-toggle="offcanvas"
          data-bs-target="#profilemenu"
        >
          menu
        </button>
      </div>


     {/* slidebar */}
      <div className="offcanvas offcanvas-start" id="profilemenu">
        <div className="offcanvas-header">
          <h1>Profile</h1>

          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
            <ul className="list-group list-inline">
            <li>
              <NavLink
                to="userinfo"
                className="list-group-item list-group-item-action "
                data-bs-dismiss="offcanvas"
              >
                User Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to="userorders"
                className="list-group-item list-group-item-action "
                 data-bs-dismiss="offcanvas"
              >
                My Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/3"
                className="list-group-item list-group-item-action "
                 data-bs-dismiss="offcanvas"
              >
                Address
              </NavLink>
            </li>

             <li>
              <NavLink
                to="/3"
                className="list-group-item list-group-item-action "
                 data-bs-dismiss="offcanvas"
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
     <div className="row"
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
          <div className="col-12 col-lg-9"
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

export default profile;
