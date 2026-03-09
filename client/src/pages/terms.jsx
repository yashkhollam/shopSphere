import React from 'react'
import { ShieldCheckIcon,InformationCircleIcon,CreditCardIcon,SolidProfile,LockClosedIcon,ArrowPathIcon} from '../library/icons';

import Footer from '../components/footer.jsx'

function Terms() {

const termsData = [
  {
    icon: <ShieldCheckIcon/>,
    title: "Use of the Website",
    description:
      "Users must use ShopSphere only for lawful purposes and must not misuse the platform. Any attempt to damage, disrupt, or interfere with the website’s functionality is strictly prohibited."
  },
  {
    icon: <InformationCircleIcon/>,
    title: "Product Information",
    description:
      "We strive to provide accurate product descriptions, specifications, and pricing on our website. However, minor errors or updates may occur, and we reserve the right to correct them when necessary."
  },
  {
    icon: <CreditCardIcon/>,
    title: "Orders and Payments",
    description:
      "All orders placed on ShopSphere are subject to product availability and confirmation. Currently, we support Cash on Delivery as the primary payment method for purchases."
  },
  {
    icon: <SolidProfile/>,
    title: "Account Responsibility",
    description:
      "Users are responsible for maintaining the confidentiality of their account credentials. Any activity performed through your account will be considered your responsibility."
  },
  {
    icon: <LockClosedIcon/>,
    title: "Security and Privacy",
    description:
      "We take reasonable steps to protect your personal information and maintain a secure platform. However, users should also take precautions when sharing sensitive information online."
  },
  {
    icon: <ArrowPathIcon/>,
    title: "Changes to Terms",
    description:
      "ShopSphere reserves the right to update or modify these terms at any time. Continued use of the website after changes are made indicates your acceptance of the updated terms."
  }
];


    
  return (
   <>
     <div className={`container-fluid`}
          style={{marginTop:"60px"
          ,backgroundColor:"#f4f7fb",
          display:"flex",
          justifyContent:"center",
          height:"fit-content",
          paddingBottom:"80px",
          }}>
        
        <div style={{
               maxWidth:"1000px",
               width:"100%",
            //    backgroundColor:"skyblue"
        }}>
               <h1 style={{
                textAlign:"center",
                fontSize:"50px",
                fontWeight:"bold",
                marginTop:"50px"}}>Terms & Conditions</h1>
    
         <p style={{fontSize:"17px",
                    textAlign:"center",
                    marginTop:"10px",
                    color:"#0000007f"}}>
            By accessing and using ShopSphere, you agree to comply with the following terms and conditions. 
         These terms govern your use of our website, products, and services.</p>
        
        <div style={{
            backgroundColor:"white",
            padding:"10px",
            borderRadius:"30px",
            boxShadow:"rgba(40, 116, 240, 0.08) 0px 36px 50px"}}>
            {
              termsData.map((item,index)=>(
                 <div className={`continaer-fluid text-center d-flex align-items-center mt-3`}>
                  <div className="row">
                     <div className="col-12 col-lg-4 d-flex align-items-center">
                       
                       
                       <div style={{
                        width:"70px",
                        display:"block",
                        margin:"auto",
                        color:"#2072d7"
                        }}>
                         {item.icon}
                        </div> 
                        
                        
                        </div>
                    
                     <div className="col-12 col-lg-6">
                        <h5 className='fw-bold'>{item.title}</h5>
                        <p>{item.description}</p>
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

export default Terms