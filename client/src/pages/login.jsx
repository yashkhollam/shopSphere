import React, { useState } from 'react'
import '../css/login.css'
import {useNavigate,NavLink, replace} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { loginthunk } from '../components/redux/features/userauthSlice'
import toast from 'react-hot-toast'
import Loader from '../components/loader'
import { EyeIcon, EyeSlashIcon } from '../library/icons'
 
function Login() {

const [formdata,setFormdata]=useState({email:"",password:""})
const [hidepass,setHidepass]=useState(false)
const dispatch=useDispatch();
const navigate=useNavigate()
const handlenavigation=()=>{
  navigate('/signup')
}

const {loading}=useSelector((state)=>state.userAuth)



const handleform=(e)=>{
  // console.log({...formdata,[e.target.name]:e.target.value})
  setFormdata({...formdata,[e.target.name]:e.target.value})
}


const submitform=async(e)=>{
  e.preventDefault()
  try{
       const res=await dispatch(loginthunk(formdata)).unwrap()
       const {message,data}=res
       toast.success(message)

       
       if(data?.role==="admin"){
        navigate('/adminpanel')
       }
        else{navigate('/')}
       setFormdata({email:"",password:""})
  }
  catch(err){
       toast.error(err)
  }
}


  return (
   <>
     {
       loading.loginloading&& <Loader/>
     }
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
        
         
            
          <div style={{position:"relative"}}>
             
             <label className='label'>password :</label>

            <div className='position-absolute  d-flex justify-content-end  pe-2 mt-3 end-0'
            >
          
          {
            hidepass ? 
           
           <EyeSlashIcon className='eyeicon'
                    onClick={()=>setHidepass(!hidepass)}/>
            : <EyeIcon className='eyeicon'
                    onClick={()=>setHidepass(!hidepass)}/> 

            
          }
           
        
        </div>
            <input type={hidepass ?'password':'text'}
                   className='form-control form-inputs'
                    name='password'
                   value={formdata.password}
                   onChange={handleform} />
           
         
         </div>
        
        


          <p style={{fontSize:"15px",color:"gray"}} 
                   className='mt-3 text-end'>
               
                
                <NavLink to={'/forgotpassword'} >
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

                   
        
     </form>

     </div>
   </>
  )
}

export default Login