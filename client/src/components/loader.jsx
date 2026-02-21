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
                   height:"100vh",
                  width:"100%",
                  zIndex:"999",
                  top:"0",
                   left:"0",
          }}>
              <div className="spinner-border" role="status" />
         </div>
  )
}

export default Loader