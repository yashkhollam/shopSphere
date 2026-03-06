import React from 'react'
import style from '../css/aboutus.module.css'

function Aboutus() {
  return (
  <>
    <div className={`container-fluid  ${style.aboutuscont}`}>
      
      <div className={`${style.herosec}`}>
         <h5 className={style.smallheading}>About ShopSphere</h5>
         <h1 className={style.mainheading}>We exist to help you curate the future.</h1>

         <p className={style.aboutdesc}>Fusion Electronics is a collective of engineers, industrial designers, and experience strategists. We scout the highest performing gadgets, stress-test them in our lab, and package them into delightful experiences so you can focus on creating.

Curated Tech Intelligence</p>
      </div>



      <div className={style.missionsec}>
        <h5>Our Missions</h5>
 
    <div className="row">
        <div className="col-12 col-lg-2">
            <div>🏆</div>
        </div>
        <div className="col-12 col-lg-10">
             <ul>
                <li>To empower people with innovative technology that improves everyday life.</li>
                <li>To build a trusted platform for discovering modern electronics.</li>
                <li></li>
                <li></li>
                <li></li>
             </ul>
        </div>
    </div>

      </div>
    </div>
  </>
  )
}

export default Aboutus




//  <img src='bannerimg/aboutusbaner.jpg' alt="bannerimg" srcset=""
//       style={{Height:"100vh",width:"100%",objectFit:"contain"}} 
//               />