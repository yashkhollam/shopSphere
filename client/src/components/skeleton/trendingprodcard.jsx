import React from 'react'
import style from '../../css/skeleton/trendingprod.module.css'

function Trendingprodcardskeleton() {
  return (
   <>
  
  
       <div className={style.card}>
           
           
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

export default Trendingprodcardskeleton