import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-hot-toast'
import { usercontactusthunk } from '../components/redux/features/userauthSlice'
import Footer from '../components/footer.jsx'


function ContactUs() {


const style={
   mailicon:{
    color:"#ef1616",
    fontSize:"18px",
    backgroundColor:"#ef98a4a5",
    padding:"14px",
    borderRadius:"50%",
   },

   phoneicon:{
    color:"#3c8341",
    fontSize:"18px",
    backgroundColor:"#98f299a5",
    padding:"14px",
    borderRadius:"50%",
   },

   locationicon:{
    color:"#1650ef",
    fontSize:"18px",
    backgroundColor:"#8ecfefa5",
    padding:"14px 16px",
    borderRadius:"50%",

   }
}


const dispatch=useDispatch()
 const {user,isAuthenticated}=useSelector((state)=>state.userAuth)

const [formdata,setFormdata]=useState({name:"", useremail:"", subject:"", message:""})

const handelform=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
    console.log({...formdata,[e.target.name]:e.target.value})
} 


const submitform=async(e)=>{
    e.preventDefault()
   try{
      const res=await dispatch(usercontactusthunk(formdata)).unwrap()

      toast.success(res.message)
   }
   catch(err){
     toast.error(err)
   }
}
  return (
   <>
      <div className="container-fluid p-0" 
          style={{marginTop:"60px",
                   display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
          }}>
          
          <div className="row w-100" 
              style={{
                   maxWidth:"1300px" ,
                   
                    
              }}>
            
            
            <h1 className='text-center fw-bold text-primary mt-4 mb-4'>Get in Touch</h1>
            <div className="col-12 col-md-6 p-3">
               
               <h2 className='mt-0 mt-lg-4'>Contact Information</h2>
                <p style={{fontSize:"17px",color:"#00000087",padding:"7px"}}>Have questions about our products or your order? 
                   Our support team is ready to help. Fill out the form below and we'll respond as soon as possible.</p>
               
               <div className='ps-3'>
                  
                  <div className='d-flex gap-4 align-items-center'>

                  
                    <i className='fa-solid fa-envelope'
                        style={style.mailicon}></i>

                    <div>
                        <p className='m-0 p-0 text-dark fw-bold'>Email</p>
                        <p className='m-0 p-0 text-secondary'>shopsphere@gmail.com</p>

                    </div>
                  </div>



                   <div className='d-flex gap-4 mt-3 align-items-center'>
                      <i className="fa-solid fa-phone"
                         style={style.phoneicon}></i>
                       
                       <div>
                        <p  className='m-0 p-0 text-dark fw-bold'>Phone</p>
                        <p className='m-0 p-0 text-secondary'>+ 91 987654321</p>

                    </div>
                  </div>


                   <div className='d-flex gap-4 mt-3 align-items-center'>

                  
                    <i className="fa-solid fa-location-dot"
                        style={style.locationicon}></i>

                    <div>
                        <p  className='m-0 p-0 text-dark fw-bold'>Location</p>
                       
                        <p className='m-0 p-0 text-secondary'>Pune,India</p>

                    </div>
                  </div>
                 
                 
                 
                  </div>

                  

                
            

            </div>
              <div className="col-12 col-md-6">

              <form className='form p-3' onSubmit={submitform}>

              <label className='form-label'>Your Name</label>
               <input  className='form-control'
                       type="text"
                       value={user?.username}
                       disabled={true}
                       name='name'
                       onChange={handelform}
                       style={{height:"50px",borderRadius:"17px"}}/>

                <label className='form-label mt-3'>Your Email</label>
               <input  className='form-control'
                       type="email"
                       value={user?.email}
                       disabled={true}
                       name='useremail'
                       onChange={handelform}
                       style={{height:"50px",borderRadius:"17px"}}/>

            
                <label className='form-label mt-3'>Subject</label>
               <input  className='form-control'
                       type="text"
                       value={formdata.subject}
                       name='subject'
                       onChange={handelform}
                       style={{height:"50px",borderRadius:"17px"}}/>



                <label className='form-label mt-3'>Message</label>
               <input  className='form-control'
                       type="text"
                       value={formdata.message}
                       name='message'
                       onChange={handelform}
                       style={{height:"100px",borderRadius:"17px",paddingBottom:"55px"}}/>

                <button className='btn bg-primary text-light d-block mt-5 mx-auto w-100'
                         type="submit">Send Mail</button>

              </form>

              </div>
          </div>


        
      </div>

      <Footer/>
   </>
  )
}

export default ContactUs