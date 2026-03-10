import React from 'react'
import style from '../css/footer.module.css';
import {NavLink} from 'react-router-dom';

function Footer() {
const scrollTop=()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
    
  })
}

  return (
    <footer className={`container-fluid ${style.footercont}`}>
         
  <div className='row'>


     <div className={`col-12 col-md-6 ${style.connectussec}`}>
    <h1 className={style.shopheading}>SHOPSPHERE ELECTRONICS</h1>
     <p className={style.shopsubheading}>ShopSphere is your destination for modern gadgets and smart electronics.Curating cutting-edge gadgets, smart home essentials, and premium accessories to help you live smarter every day.</p>

    <div className='d-flex gap-5 ' style={{margin:"20px"}}>

  <a href="https://github.com/yashkhollam?tab=repositories" target="_blank" rel="noopener noreferrer">
    <i className={`fa-brands fa-github ${style.giticon}`}></i>
  </a>

  <a href="https://www.linkedin.com/in/yash-khollam-546bb72b2/" target="_blank" rel="noopener noreferrer">
    <i className={`fa-brands fa-linkedin ${style.linkedinicon}`}></i>
  </a>

  <a
  href="https://mail.google.com/mail/?view=cm&to=yashkhollam01@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
    <i className={`fa-solid fa-envelope ${style.mailicon}`}></i>
  </a>

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
      
      <NavLink  to='/privacypolicy'
      className='text-muted  text-decoration-none'

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
    <i className="fa-solid fa-laptop-code"></i> Designed & Developed by {" "}
    <a 
      href="https://yashkhollamportfolio.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className=" fw-bold"
    >
      Yash Khollam
    </a>
  </p>
</div>
  </div>
  


  {/* <div></div>
 <div></div> */}

    </footer>
  )
}

export default Footer