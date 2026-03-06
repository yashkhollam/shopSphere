import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/loader'

function Userinfo() {

 const {user,loading}=useSelector((state)=>state.userAuth)

const style={
   userdata:{
      maxWidth:"500px",
      width:"100%",
       border:"2px solid grey",
       borderRadius:"10px",
      height:"max-Content",
      padding:"5px 5px",
      fontWeight:"bold",
      margin:"0",
      marginTop:"7px",
      
      color:"black"
       
   }
}

  return (
   <>
    {loading.getmeloading && <Loader/>}

     <div className='container-fluid' >
         <div className=''>
             <h1 className='text-center mt-2'>Account Information</h1>

             <div className=' mt-4 d-block mx-auto '
                  style={{maxWidth:"500px",width:"100%"}}>
                  
            <div className=''>
                <p className='text-primary fw-bold text-nowrap m-0'>Name :</p>
               
                <p style={style.userdata}>
                  {user?.username.toUpperCase()}</p>

            </div>

             <div className='mt-2'>
                <p className='text-primary fw-bold text-nowrap m-0'>Email :</p>
               
                <p style={style.userdata}>
                  {user?.email}</p>

            </div>


             <div className='mt-2'>
                <p className='text-primary fw-bold text-nowrap m-0'>Role :</p>
               
                <p style={style.userdata}>
                  {user?.role.toUpperCase()}</p>

            </div>

             <div className='mt-2'>
                <p className='text-primary fw-bold text-wrap m-0'> Joined Date :</p>
               
                <p style={style.userdata}>
                  {user?.role}</p>

            </div>

             </div>
         </div>
     </div>
   </>
  )
}

export default Userinfo