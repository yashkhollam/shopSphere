import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/profilelist.css'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {logoutthunk} from '../components/redux/features/userauthSlice.js'

function Profiledropdown() {


const {user,isAuthenticated,logoutloading}=useSelector((state)=>state.userAuth)
const dispatch=useDispatch()
const navigate=useNavigate()
console.log(user)

// const {}


const handlelogout=async()=>{
    try{
          const res=await dispatch(logoutthunk()).unwrap()

          toast.success(res.message)
          navigate('/home')
    }

    catch(err){
        toast.error(err)
    }
}

  return (

    <>

     {
          logoutloading && 
          <div  style={{
                 position:"absolute",
                 background: "rgba(255,255,255,0.4)",
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center",
                //  minHeight:"100vh",
                   height:"100vh",
                  width:"100%",
                  zIndex:"999",
                  top:"0",
                   left:"0",
                   

          }}></div>



        }

      <div className=' profilelistcontainer' 
    style={{
        position:"absolute",
        height:"150px",
        width:"200px",
         backgroundColor:"transparent",
       
        zIndex:"999",
        margin:"0px 0 0px 0",
        
        right:"0px",
         left: "50%",
        transform: "translateX(-50%)",
        top:"100%",
        // paddingTop:"10px"
      
       
        // top:"90%
    }}>

         <ul className='profilegrouplist'
         style={{listStyleType:"none",
                   
                    height:"100%",
                    width:"100%",
                    background:"white",
                    borderRadius:"0 0 10px 10px",
                    boxShadow:"0 0 2px 2px black",
                     fontfamily: "Poppins",
                   
                    padding:"0",
                    display:"flex",
                    flexDirection:"column",
                    marginTop:"10px"
                   
                    // gap:"20px"
                   

                   
                    
                   
        }}>
           
           
           
            <li className='profilelistitems ' >
                { isAuthenticated ? `Hello ${user.username.toUpperCase()}` :"Hello user"}

        </li>
       
        <li  className='profilelistitems'>
             <NavLink to="/profile" className="navbar-link">
            Account

            </NavLink>
        </li>

        {
            isAuthenticated ?
            <li  className='profilelistitems' onClick={handlelogout}>
                logout
            </li>


            :
             <li  className='profilelistitems' >
                 <NavLink to="/login" className="navbar-link">
                   login
                 </NavLink>
                
            </li>
        }


           
        </ul>
  
    </div>
    </>
  
  )
}

export default Profiledropdown