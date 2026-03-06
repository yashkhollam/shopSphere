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
     <p className={style.shopsubheading}>ShopSphere is your destination for modern gadgets and smart electronics.</p>
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
    <NavLink  className='text-muted text-decoration-none'
     onClick={scrollTop}>
        Support
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
      <NavLink  className='text-muted text-decoration-none'
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
      <NavLink  className='text-muted text-decoration-none'
       onClick={scrollTop}>
          FAQ
      </NavLink>
      </li>
    <li>
      <NavLink  className='text-muted text-decoration-none'
      
       onClick={scrollTop} >
         Contact Us
      </NavLink>
      </li>
  </ul>
 </div>
  </div>
  


  {/* <div></div>
 <div></div> */}

    </footer>
  )
}

export default Footer