import React, { useEffect, useState } from 'react'
import '../css/signupotpverify.css'
import { NavLink ,Navigate, useLocation, useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { accOTPverifythunk } from '../components/redux/features/userauthSlice'

function Signupotpverify() {


  const location=useLocation()
  const navigate=useNavigate()
 const email=location.state?.email;
 const dispatch=useDispatch()



 
 const [formdata,setFormdata]=useState({otp:"",email:email})


 const handleform=(e)=>{
 setFormdata({...formdata,[e.target.name]:e.target.value});
 console.log({...formdata,[e.target.name]:e.target.value})

 }


 const submitform=async(e)=>{
  try{
       e.preventDefault();
       const res=await dispatch(accOTPverifythunk(formdata)).unwrap();

       const {message}=res;
       toast.success(message);
       navigate('/login');
      //  email="";
       setFormdata({otp:"",email:""})
  }

  catch(err){
    toast.error(err)
  }
 }



 useEffect(()=>{
   if(!email){
    toast.error("email not found !! pleasr try again");
    navigate('/signup')
   }
 },[email])

  return (
   <>
      <div className="container-fluid form-container">
     
     <form action="" className='OTP-verify-form' onSubmit={submitform}>
    
      <h1 className='heading text-center pb-3'>verify OTP</h1>

        <div className='email-contianer'>
        <span>Enter the verification code we  sent </span><br/> to <span className='text-dark text-decoration-underline'>{email}</span>
      </div>
        
       
          <div className='mt-2'>
             <label className='label ps-2'>OTP :</label>
            <input type="text"
                   className='form-control form-inputs'
                   name='otp'
                   value={formdata.otp}
                   onChange={handleform} />
         </div>

         <button className='btn bg-warning text-light d-block m-auto mt-3' type='submit'>Verify OTP</button>

       <div style={{fontFamily:"Poppins",marginTop:"15px"}}>
          <span>Didn't receive OTP ?</span>
          <NavLink className='ms-2'>Resend OTP</NavLink> 
       </div>
        
     </form>

     </div>
   </>
  )
}

export default Signupotpverify