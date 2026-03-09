import React, { useState } from 'react'
import '../css/signup.css'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { cretaeaccthunk } from '../components/redux/features/userauthSlice.js';
import Loader from '../components/loader.jsx';
import { EyeIcon, EyeSlashIcon } from '../library/icons'
 
function Signup() {
const navigate=useNavigate()
  const dispatch=useDispatch()
  const {createaccloading}=useSelector((state)=>state.userAuth.loading)
  const data={username:"",email:"",password:""}
  const [formdata,setFormdata]=useState(data)
  const [hidepass,setHidepass]=useState(false)


const handleform=(e)=>{
   setFormdata({...formdata,[e.target.name]:e.target.value})
  //  console.log({...formdata,[e.target.name]:e.target.value})
}


const submitform=async(e)=>{
  e.preventDefault()
    try{
       const res=await dispatch(cretaeaccthunk(formdata)).unwrap()
      const {message}=res
        toast.success(message)
       
      navigate('/signupotpverify',{
        
        state:{
          email:formdata.email,
          
          from:"/"
        }
      })

     setFormdata({username:"",email:"",password:""}) 
    }

    catch(err){
        toast.error(err)
    }
}




const handlenavigation=()=>{
  navigate('/login')
}

  return (
   <>
      {
          createaccloading && <Loader/>
      }
      
     
     <div className="container-fluid form-container">
     
     <form action="" className='signup-form' onSubmit={submitform}>
      <h1 className='heading text-center pb-1'>Create Account</h1>

      <div className='accconfirmation-cont'
            >
        <p className='isaccount'>Already have account ? please </p>
        <p className='logintext' onClick={handlenavigation}>login</p>
      </div> 

         <div>
            <label className=' label'>Username :</label>
            
            <input type="text"
                   className='form-control form-inputs'
                   name='username'
                   value={formdata.username}
                   onChange={handleform} />
         </div>
          <div>
            <label className='label'>email :</label>
            <input type="email"
                   className='form-control form-inputs'
                    name='email'
                   value={formdata.email}
                   onChange={handleform} />
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

         <button className='btn bg-success text-light d-block m-auto mt-5'
         type="submit"
                 style={{fontFamily:"Poppins"}}>Create Account</button>

       
        
     </form>

     </div>
   </>
  )
}

export default Signup