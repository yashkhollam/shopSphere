import React from 'react'
import { UserIcon,
ClipboardDocumentListIcon,
ShieldCheckIcon,
ServerIcon,
EyeIcon,
ArrowPathIcon} from '../library/icons.jsx';

import Footer from '../components/footer.jsx'

function PrivacyPolicy() {
const privacyData = [
  {
    icon: <UserIcon/>,
    title: "Information We Collect",
    description:
      "We collect basic personal information such as your name, email address, and shipping details when you create an account or place an order. This information helps us process orders smoothly and provide better customer support."
  },
  {
    icon: <ClipboardDocumentListIcon/>,
    title: "How We Use Your Information",
    description:
      "Your information is used to manage your account, process orders, and improve our services. It also helps us respond to your inquiries and provide a better overall shopping experience."
  },
  {
    icon: <ShieldCheckIcon/>,
    title: "Data Protection",
    description:
      "We implement appropriate security measures to protect your personal information from unauthorized access or misuse. Our goal is to maintain a safe and secure environment for all users."
  },
  {
    icon: <ServerIcon/>,
    title: "Third-Party Services",
    description:
      "ShopSphere may use trusted third-party services for analytics, hosting, or communication tools. These services support the platform but are not permitted to misuse your personal information."
  },
  {
    icon: <EyeIcon/>,
    title: "Transparency and Control",
    description:
      "We believe in transparency and give users control over their personal information. You can review or update your account details and contact us if you have concerns about your data."
  },
  {
    icon: <ArrowPathIcon/>,
    title: "Policy Updates",
    description:
      "Our privacy policy may be updated occasionally to reflect improvements or legal requirements. We encourage users to review this page periodically to stay informed."
  }
];


    
  return (
   <>
     <div className={`container-fluid`}
          style={{marginTop:"80px"
          ,backgroundColor:"#f4f7fb",
          display:"flex",
          justifyContent:"center",
          height:"fit-content",
          paddingBottom:"80px",
          }}>
        
        <div style={{
               maxWidth:"800px",
               width:"100%",
            //    backgroundColor:"skyblue"
        }}>
            <h5 style={{

           borderTop:"2px solid rgb(76, 187, 239)",
           borderBottom:"2px solid rgb(76, 187, 239)",
           width:"fit-Content",
           display:"block",
           margin:"0 auto",
           fontSize:"15px",
           padding:"10px 10px"

            }}>
                Privacy & Policy
            </h5>
               <h1 style={{
                textAlign:"center",
                fontSize:"45px",
                fontWeight:"bold",
                marginTop:"50px"}}>Your trust is the most valuable tech we protect</h1>
    
         <p style={{fontSize:"17px",
                    textAlign:"center",
                    marginTop:"10px",
                    color:"#0000007f"}}>
           Your privacy is important to us. This page explains how we collect, use, and protect your personal information while you use ShopSphere.</p>
        
        <div style={{
            backgroundColor:"white",
            padding:"10px",
            borderRadius:"30px",
            boxShadow:"rgba(40, 116, 240, 0.08) 0px 36px 50px"}}>
            {
              privacyData.map((item,index)=>(
                 <div key={index}
                 className={`continaer-fluid text-center d-flex align-items-center mt-3`}>
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

export default PrivacyPolicy