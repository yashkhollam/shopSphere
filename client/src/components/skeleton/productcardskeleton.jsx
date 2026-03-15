import React from 'react'
import style from '../../css/skeleton/porductcardskeleton.module.css'

function Productcardskeleton() {
  return (
   <>
   <div className={style.card}>
            <p className={style.category}></p>
           
           <div className={style.cardimg}>

           </div>
            
            
            <h3 className={style.cardtitle}></h3>
        
           <div className="d-flex gap-2">
            <p className={style.cardprice}></p>
             <p className={style.discprice}></p>
           </div>
           
            
            <button className={style.cardbutton}> </button>
  
          </div>
   </>
  )
}

export default Productcardskeleton