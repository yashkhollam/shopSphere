import React, { useState } from 'react'
import '../css/signup.css'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { cretaeaccthunk } from '../components/redux/features/userauthSlice.js';
 
function Signup() {
const navigate=useNavigate()
  const dispatch=useDispatch()
  const {createaccloading}=useSelector((state)=>state.userAuth.loading)
  const data={username:"",email:"",password:""}
  const [formadata,setFormdata]=useState(data)


const handleform=(e)=>{
   setFormdata({...formadata,[e.target.name]:e.target.value})
   console.log({...formadata,[e.target.name]:e.target.value})
}


const submitform=async(e)=>{
  e.preventDefault()
    try{
       const res=await dispatch(cretaeaccthunk(formadata)).unwrap()
      const {message}=res
        toast.success(message)
       
      navigate('/signupotpverify',{
        
        state:{
          email:formadata.email,
          
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
          createaccloading && 
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
                   

          }}>
              <div className="spinner-border" role="status" />
              

                
               
          
          </div>
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
                   value={formadata.username}
                   onChange={handleform} />
         </div>
          <div>
            <label className='label'>email :</label>
            <input type="email"
                   className='form-control form-inputs'
                    name='email'
                   value={formadata.email}
                   onChange={handleform} />
         </div>
          <div>
             <label className='label'>password :</label>
            <input type="password"
                   className='form-control form-inputs'
                   name='password'
                   value={formadata.password}
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