

import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgotpasswordthunk } from '../components/redux/features/userauthSlice';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader';



function Changepassword() {

  const [email,setEmail]=useState("")
  const dispatch=useDispatch()


  const {loading}=useSelector((state)=>state.userAuth)
  // const handleform=(e)=>{
  //    setEmail()
  // }

  const navigate=useNavigate()

  const submitform=async(e)=>{
    e.preventDefault()
    try{
       const res=await dispatch(forgotpasswordthunk(email)).unwrap();
    toast.success(res.message)
    setEmail("")
    navigate('/resetpassword',{
      state:{
       email: email
      }
    })
       
    }
    catch(err){
      return toast.error(err)
    }
  }
  return (
    <>
        
            {
              loading.forgotpasswordlaoding&& <Loader/>
            }
            <div className="container-fluid form-container align-items-start">
            
            <form action="" className='login-form'
                            style={{height:"max-Content"}}
                            onSubmit={submitform}>
             <h1 className='heading text-center pb-2'>Change Password</h1>
               
                <div className='accconfirmation-cont'
                   >
               <p className='isaccount text-center p-0 m-0'
                   style={{fontSize:"16px"}}>Enter your register email so we can send you password reset otp</p>
               {/* <p className='createAccounttext' onClick={handlenavigation}>create Account</p> */}
             </div> 
       
                 <div className='mt-3'>
                   <label className='label'>email :</label>
                   <input type="email"
                          className='form-control form-inputs'
                          name='email'
                           value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          />
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
                              mt-5
                              m-auto
                            '
                            type='submit'
       
                            >Get OTP</button>
       
                          
               
            </form>
       
            </div>
          
    </>
  )
}

export default Changepassword