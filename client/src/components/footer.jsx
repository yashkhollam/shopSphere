import React from 'react'
import style from '../css/footer.module.css';
import {NavLink} from 'react-router-dom';

function Footer() {
const scrollTop=()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}

  return (
    <footer className={`container-fluid ${style.footercont}`}>
         
  <div className='row'>


     <div className={`col-12 col-md-6 ${style.connectussec}`}>
    <h1 className={style.shopheading}>SHOPSPHERE ELECTRONICS</h1>
     <p className={style.shopsubheading}>ShopSphere is your destination for modern gadgets and smart electronics.Curating cutting-edge gadgets, smart home essentials, and premium accessories to help you live smarter every day.</p>

     <div className='d-flex gap-5 fs-4 mt-5 mb-5'>
      
       <i className="fa-brands fa-solid fa-github text-light rounded-circle bg-dark p-2"></i>
      
       <i className="fa-brands fa-solid fa-linkedin text-light rounded-circle bg-dark p-2"></i>
       
        <i className="fa-brands fa-solid fa-instagram text-light rounded-circle bg-dark p-2"></i>
       
        <i className="fa-solid fa-envelope text-light rounded-circle bg-dark p-2"></i>
     </div>
  </div>
 
 
 <div className={`col-12 col-md-3 ${style.exploresec}`}>
 
  
 <ul className='fs-5 text-muted'>
  <h5 className={style.explorehead}>Explore</h5>
  <li className="">
    <NavLink to='/'
     onClick={scrollTop}
      className='text-muted text-decoration-none'>Home</NavLink>
       </li>
  <li>
    <NavLink to='/allproducts'
              onClick={scrollTop}
             className='text-muted  text-decoration-none'>
         Shop

    </NavLink>
    </li>
  <li>
    <NavLink  className='text-muted  text-decoration-none'
     to='/aboutus'
     onClick={scrollTop}>

      About
    </NavLink>
    </li>
  
  <li>
    <NavLink to='/cart'  className='text-muted  text-decoration-none'
     onClick={scrollTop}>
       Cart
    </NavLink>
   </li>
 </ul>
 </div>

 <div className={`col-12 col-md-3 ${style.custcaresec}`}>
 

  <ul className='fs-5 text-muted'>
     <h5 className={style.custcarehead}>Customer Care</h5>
    <li>
      <NavLink  to='/terms'
      className='text-muted text-decoration-none'
       onClick={scrollTop}>
        Terms & Conditions
        </NavLink></li>


    <li>
      
      <NavLink  className='text-muted  text-decoration-none'
       onClick={scrollTop}>
            Privacy Policy
      </NavLink>
     </li>


    <li>
      <NavLink to='/contactus#faqsec' 
      className='text-muted text-decoration-none'
     
      >
          FAQ
      </NavLink>
      </li>
    
    
    
    <li>
      <NavLink to='/contactus#contactussec'
       className='text-muted text-decoration-none'
      
        >
         Contact Us
      </NavLink>
      </li>
  </ul>
 </div>
   <hr/>
   <div>
      <p className="text-center mt-3">
  © {new Date().getFullYear()} ShopSphere • All rights reserved • 
  <i className="fa-solid fa-laptop-code"></i>Designed & Developed by <strong>Yash Khollam</strong>
</p>
   </div>
  </div>
  


  {/* <div></div>
 <div></div> */}

    </footer>
  )
}

export default Footer