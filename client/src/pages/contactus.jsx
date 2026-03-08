import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-hot-toast'
import { usercontactusthunk } from '../components/redux/features/userauthSlice';
import style from '../css/contactus.module.css'
import Footer from '../components/footer.jsx'
import { ChevronDownIcon, ChevronUpIcon } from '../library/icons.jsx';
import { useLocation } from 'react-router-dom';


function ContactUs() {

const location=useLocation()

useEffect(()=>{
    if(location.hash){
        const element=document.querySelector(location.hash)

        if(element){
            element.scrollIntoView({behavior:"smooth"})
        }
    }
},[location])

const [openIndex, setOpenIndex] = useState(null);
const faqs = [
  {
    question: "How do I place an order?",
    answer: "To place an order, browse the products available on ShopSphere and add your desired items to the cart. After that, proceed to checkout, enter your shipping details, and confirm your order using Cash on Delivery."
  },
  {
    question: "What payment methods are available?",
    answer: "Currently, ShopSphere supports Cash on Delivery (COD) as the primary payment method. You can pay the total amount in cash when your order is delivered to your address."
  },
  {
    question: "Do I need to create an account to place an order?",
    answer: "Yes, you need to create an account and log in before placing an order on ShopSphere. This helps us securely manage your orders and provide better customer support when needed."
  },
  {
    question: "How long does delivery take?",
    answer: "Orders are usually delivered within 3 to 5 business days depending on your location. Delivery times may vary slightly based on product availability and shipping conditions."
  },
  {
    question: "What should I do if I face an issue with my order?",
    answer: "If you experience any issue with your order, you can reach out to our support team through the Contact Us page. Our team will review your message and assist you as quickly as possible."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our support team by filling out the contact form available on the Help Center page. Simply provide your details and message, and we will respond as soon as possible."
  }
];

const dispatch=useDispatch()
 const {user,isAuthenticated}=useSelector((state)=>state.userAuth)

const [formdata,setFormdata]=useState({name:"", useremail:"", subject:"", message:""})



const handleAccordoin=(index)=>{

    console.log("index",index)

    setOpenIndex(openIndex===index ? null : index)
}



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
      <div className={`container-fluid p-0 ${style.contactuscont}`} 
         >

        <div className={style.herosec}>
             <h5 className='mb-3'>Need a hand ?</h5>
             <h1>Support that feels human.</h1>
             <p>Whether you have a delivery question or want help planning your dream setup, our specialists are on standby.</p>
        </div>
       

          
          <div className={`faqsec ${style.faqsec}`} id='faqsec'>
              <h1 className='fw-bold text-dark'>Frequently asked questions</h1>
              <p className='text-secondary'>Find answers to common questions about orders, shipping, payments.<br/>
              If you still need help, feel free to contact our support team.</p>


              <div>
                {
                    faqs.map((data,index)=>(
                      <>

                        <hr  className='m-0  pt-2'/>
                        <div className={style.faqcard}>
                            <div className={style.quecont}>
                                 <p className='p-0 m-0 fw-bold'>{data.question}</p>
                                
                                 <p className='p-0 m-0'
                                 onClick={()=>handleAccordoin(index)}>{openIndex===index ?
                                 
                             
                                  <ChevronUpIcon style={{height:"20px",cursor:"pointer"}}/>
                                  :
                                      <ChevronDownIcon style={{height:"20px",cursor:"pointer"}}/>
                                 }</p>
                            </div>
                           
                          {
                             openIndex===index && 
                              <p className='pt-3 pb-2'>{data.answer}</p>
                          }
                           
                        </div>
                                              </>
                    ))
                }
                
  

              </div>
          </div>

          <div className={style.contactsec} id='contactussec'>
              <div className="row w-100" 
              style={{
                   maxWidth:"1300px" ,
                   
                    
              }}>
            
            
            <h1 className='text-center fw-bold text-primary mb-4'>Get in Touch</h1>
            <div className="col-12 col-md-6 p-3">
               
               <h2 className='mt-0 mt-lg-4'>Contact Information</h2>
                <p style={{fontSize:"17px",color:"#00000087",padding:"7px"}}>Have questions about our products or your order? 
                   Our support team is ready to help. Fill out the form below and we'll respond as soon as possible.</p>
               
               <div className='ps-3'>
                  
                  <div className='d-flex gap-4 align-items-center'>

                  
                    <i className={`fa-solid fa-envelope ${style.mailicon} `}
                        ></i>

                    <div>
                        <p className='m-0 p-0 text-dark fw-bold'>Email</p>
                        <p className='m-0 p-0 text-secondary'>shopsphere@gmail.com</p>

                    </div>
                  </div>



                   <div className='d-flex gap-4 mt-3 align-items-center'>
                      <i className={`fa-solid fa-phone ${style.phoneicon}`}
                         ></i>
                       
                       <div>
                        <p  className='m-0 p-0 text-dark fw-bold'>Phone</p>
                        <p className='m-0 p-0 text-secondary'>+ 91 987654321</p>

                    </div>
                  </div>


                   <div className='d-flex gap-4 mt-3 align-items-center'>

                  
                    <i className={`fa-solid fa-location-dot ${ style.locationicon}`}
                   ></i>

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
         


        
      </div>

      <Footer/>
   </>
  )
}

export default ContactUs