import React from 'react'

function Loader() {
  return (
   <div  style={{
                 position:"absolute",
                  background: "rgba(255,255,255,0.4)",
                
                 display:"flex",
               
                 justifyContent:"center",
                 alignItems:"center",
                //  minHeight:"100vh",
                   height:"100%",
                  width:"100%",
                  zIndex:"999",
                  top:"0",
                   left:"0",


          }}>
            <div style={{display:"flex",
                         alignItems:"center",
                           gap:"5px",
                           backgroundColor:"white",
                           border:"2px solid black",
                           padding:"5px 10px"
            }}>
                  <div className="spinner-border text-primary"
                   role="status"
                    />
              <p className='p-0 m-0 fw-bold'>Please wait</p> 
            </div>
             
         </div>
  )
}

export default Loader