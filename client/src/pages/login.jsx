import React, { useState } from 'react'
import '../css/login.css'
import {useNavigate,NavLink, replace} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginthunk } from '../components/redux/features/userauthSlice'
import toast from 'react-hot-toast'
 
function Login() {



  const [formdata,setFormdata]=useState({email:"",password:""})


const dispatch=useDispatch();
const navigate=useNavigate()

const handlenavigation=()=>{
  navigate('/signup')
}



const handleform=(e)=>{
  // console.log({...formdata,[e.target.name]:e.target.value})
  setFormdata({...formdata,[e.target.name]:e.target.value})
}


const submitform=async(e)=>{
  e.preventDefault()
  try{
       const res=await dispatch(loginthunk(formdata)).unwrap()
       toast.success(res.message)
       navigate('/');
       setFormdata({email:"",password:""})
  }
  catch(err){
       toast.error(err)
  }
}


  return (
   <>
     <div className="container-fluid form-container">
     
     <form action="" className='login-form' onSubmit={submitform}>
      <h1 className='heading text-center pb-3'>Login form</h1>
        
         <div className='accconfirmation-cont'
            >
        <p className='isaccount'>Don't have account ? please </p>
        <p className='createAccounttext' onClick={handlenavigation}>create Account</p>
      </div> 

          <div>
            <label className='label'>email :</label>
            <input type="email"
                   className='form-control form-inputs'
                   name='email'
                   value={formdata.email}
                   onChange={handleform}
                   />
         </div>
          <div>
             <label className='label'>password :</label>
            <input type="password"
                   className='form-control form-inputs'
                    name='password'
                   value={formdata.password}
                   onChange={handleform} />
         </div>


          <p style={{fontSize:"15px",color:"gray"}} 
                   className='mt-3 text-end'>
               
                
                <NavLink to={'/forgetpass'} >
                  forgot password ?
                </NavLink>
              </p>
           

              <button
                     className='btn
                      bg-success 
                      text-light
                     
                       d-block
                       mt-5
                       m-auto
                     '
                     type='submit'

                     >Get Started</button>

                     <NavLink to='/signupotpverify'>otp verify</NavLink>
        
     </form>

     </div>
   </>
  )
}

export default Login