import React from 'react'
import style from '../css/aboutus.module.css'
import Footer from '../components/footer';

function Aboutus() {

  const missionData = [
  {
    icon: "⭐",
    title: "Quality Products",
    description: "We provide high-quality and reliable electronics that are carefully selected to deliver great performance, durability, and value for our customers."
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Our goal is to ensure quick and dependable delivery so customers receive their products safely and on time without unnecessary delays."
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "We offer secure and trusted payment methods to protect customer transactions and provide a safe and smooth online shopping experience."
  },
  {
    icon: "💡",
    title: "Innovation & Technology",
    description: "We focus on bringing the latest gadgets and modern technology to our customers, helping them stay updated with innovative digital solutions."
  }
];
  

  return (
  <>
    <div className={`container-fluid p-0 ${style.aboutuscontainer}`}>
      
      <div className={` ${style.herosec}`}>
       
         <h5 className={style.smallheading}>About ShopSphere</h5>
         <h1 className={style.mainheading}>We exist to help you curate the future.</h1>

         <p className={style.aboutdesc}>Fusion Electronics is a collective of engineers, industrial designers, and experience strategists. We scout the highest performing gadgets, stress-test them in our lab, and package them into delightful experiences so you can focus on creating.

Curated Tech Intelligence</p>
      </div>

  

      <div className={style.whoaresec}>
        
 
    <div className={`row  m-0 p-0 ${style.aboutrow}`}>
        <div className="col-12 col-lg-6 p-0">
            <img src="aboutimg.jpg" alt="" className={style.whoarsecimg} />
            
        </div>
        <div className="col-12 col-lg-6">
             <h1 className={style.whoareweheadinhg}>Who We Are ?</h1>

             <div className={style.whoarewedesc}>
              <p className='d-inline '>ShopSphere is an online electronics store dedicated to </p>


              <p className='d-inline text-primary'>bringing the latest gadgets, accessories, and smart
devices to customers at competitive prices.</p>
</div>
        </div>
    </div>

      </div>

  <hr />
       <div className={style.missionsec}>
           <h1 className={style.ourmissionhead}>OUR MISSION</h1>
          <div className={style.missioncardwrappper}>
                 {
            missionData.map((data)=>(
              <div className={style.missiondatacard}>
                    <div className="row w-100">
                <div className="col-12">
                  <div className={style.missionicon}>{data.icon}</div>
                </div>
                <div className="col-12">
                  <div>
                    <h3 className='fw-bold text-dark'>{data.title}</h3>
                    <p className='text-secondary'>{data.description}</p>
                  </div>
                </div>
              </div>
              </div>
             
            ))
           }
          </div>
          
       </div>
    </div>

    <Footer/>
  </>
  )
}

export default Aboutus




//  <img src='bannerimg/aboutusbaner.jpg' alt="bannerimg" srcset=""
//       style={{Height:"100vh",width:"100%",objectFit:"contain"}} 
//               />