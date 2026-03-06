import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

function profile() {
 const dispatch=useDispatch()
  const navigate=useNavigate()
 const {user,loading}=useSelector((state)=>state.userAuth)


 
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
    <div className="container-fluid p-0"
     style={{ marginTop: "60px", 
              width:"100%"
     }}>
     

       <div className='d-lg-none ps-2 pe-2'
                     style={{
                             height:"50px",
                         
                             display:"flex",
                             alignItems:"center",
                             justifyContent:"space-between",
                             boxShadow:"0 2px 4px black",
                             backgroundColor:"black",
                             color:"white"
                     }}
                    >
                   
             
                  
                   <ArrowLeftIcon
                     style={{height:"30px",fontSize:"50px",cursor:"pointer"}}
                     onClick={()=>navigate(-1)} />

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

           
           {
            user?.role==="admin" &&
            <li  data-bs-dismiss="offcanvas">
              <NavLink
                to="/adminpanel"
                className="list-group-item list-group-item-action "
              >
                Admin panel
              </NavLink>
            </li> 
           }
            

          {
            user?.role==="user" && 
             <li  data-bs-dismiss="offcanvas">
              <NavLink
                to="userorders"
                className="list-group-item list-group-item-action "
              >
                My Orders
              </NavLink>
            </li> 
          }
           
           
           


            {/* <li  data-bs-dismiss="offcanvas">
              <NavLink
                to="/3"
                className="list-group-item list-group-item-action "
              >
                Address
              </NavLink>
            </li> */}

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
                   }}
                   onClick={handlelogout}
                   disabled={loading.logoutloading}>
                {loading.logoutloading? "Logging out":"Logout"}
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

            {/* <li>
              <NavLink
                to="/3"
                className="list-group-item list-group-item-action "
              >
                Address
              </NavLink>
            </li> */}

             <li>
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
                   }}
                   onClick={handlelogout}
                   disabled={loading.logoutloading}>
                {loading.logoutloading? "Logging out":"Logout"}
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
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { logoutthunk } from "../components/redux/features/userauthSlice";

export default profile;
