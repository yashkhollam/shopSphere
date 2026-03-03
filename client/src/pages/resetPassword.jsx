import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { resetpassowrdthunk } from '../components/redux/features/userauthSlice';
import {toast} from 'react-hot-toast'

function ResetPassword() {

const location=useLocation()
const navigate=useNavigate()
const email=location?.state?.email;
console.log("email=",email)
const [formdata,setFormdata]=useState({otp:"",password:"",email:email|| ""})

// if(!email){
//   return <Navigate to='/forgotpassword'/>
// }

const dispatch=useDispatch()

const handleform=(e)=>{
   console.log({...formdata,[e.target.name]:e.target.value})
    setFormdata({...formdata,[e.target.name]:e.target.value})
    
}


const submitform=async(e)=>{
  

  e.preventDefault()
  try{
      
       const res=await dispatch(resetpassowrdthunk(formdata)).unwrap()
       toast.success(res.message)
       navigate('/login')
  }

  catch(err){
     return toast.error(err)
  }
}


  return (
    <>
       
            {/* {
              loading.forgotpasswordlaoding&& <Loader/>
            } */}
            <div className="container-fluid form-container">
            
            <form action="" className='login-form'
                            style={{height:"max-Content"}}
                            onSubmit={submitform}>
             <h1 className='heading text-center pb-2'>Verify OTP</h1>
               
               
               <p className='isaccount text-center p-0 m-0 text-muted'
                   style={{fontSize:"18px"}}>Enter OTP send to your</p>
               <p className='text-center fw-bold text-decoration-underline'>{email}</p>
           
       
                 <div className='mt-3'>

                <label className='label'>OTP :</label>
                   <input type="number"
                          className='form-control form-inputs'
                          name='otp'
                           value={formdata.otp}
                          onChange={handleform}
                          />

                   <label className='label'>Password :</label>
                   <input type="password"
                          className='form-control form-inputs'
                          name='password'
                           value={formdata.password}
                          onChange={handleform}
                          />

                    {/* <label className='label'>confirm Password :</label>
                   <input type="password"
                          className='form-control form-inputs'
                          name='confirmpassword'
                           value={formdata.password}
                          onChange={handleform}
                          /> */}
                </div>
                 
{/*        
                 <p style={{fontSize:"15px",color:"gray"}} 
                          className='mt-3 text-end'>
                      
                       
                       <NavLink to={'/forgotpassword'} >
                         forgot password ?
                       </NavLink>
                     </p> */}
                  
       
                     <button
                            className='btn
                             bg-success 
                             text-light
                            
                              d-block
                              mt-3
                              m-auto
                            '
                            type='submit'
       
                            >Verify OTP</button>
       
                          
               
            </form>
       
            </div>
    </>
  )
}

export default ResetPassword