import React, { useEffect, useState } from 'react';
import styles from '../css/products.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { getallprodthunk } from "./redux/features/productSlice.js"

import { Regularheart,Solidheart } from '../library/icons.jsx';

function Products() {
    //  const [category,setcategory]=useState("all")
// const [search,setsearch]=
const [islike,setIslike]=useState(false)
 
const {Allproducts,searchtext,category}=useSelector((state)=>state.productoperation)
   const dispatch=useDispatch()


useEffect(()=>{

})

useEffect(()=>{
    console.log("component mounted")
    const timer=setTimeout(()=>{
        dispatch(getallprodthunk({searchtext,category}))

    },2000)
    return ()=>clearTimeout(timer)
},[dispatch,searchtext,category])




  return (
   <>
       <div className={`container-fluid  ${styles.products_container}`}> 
        <div className={`${styles.cardcontainer}`}>
            {
                Array.isArray(Allproducts)?(Allproducts.map((data)=>(
                    
                    
                    <div className={`${styles.productcard}`}>
                      
                      
                      
                      
                       <div className={`  ${styles.likecont}`}>
                           <p className={`${styles.prodcategory}`}>{data.subcategory}</p>


                           {
                               islike ? <Solidheart onClick={()=>setIslike(!islike)} className={`text-danger ${styles.heartIcon}`}/> 
                                        :
                                        
                                        <Regularheart  onClick={()=>setIslike(!islike)}  className={` ${styles.heartIcon}`}/>
                           }
                         
                       
                       </div>
                       
                        <img src={data.imgurl} 
                             alt=""
                             className={` ${styles.prodimg}`} />
                        
                        <div className="card-body p-0 ps-2 pe-2 ">
                            <p className='card-title fs-4 p-0 m-0   text-dark '>{data.name}</p>
                       
                        <div className={`fs-5 ${styles.price_cont}`}>
                         <p className='card-text text-muted text-decoration-line-through'>{`₹${data.price}`}</p>
                         <p className='card-text fw-bold text-primary'>{`₹ ${data.discountprice}`}</p>
                        </div>

                          <div className={`d-flex 
                           
                            align-items-center
                            justify-content-between
                            mt-4
                            ${styles.cont}`} >

                            <button className='cart btn text-light bg-warning'>Add to Cart</button>

                            <p className=' card-text'>view Details</p>
                        </div>
                        </div>
                       
                       
                      
                    </div>
                ))):(<h1>product not found</h1>)
            }
        </div>
       </div>
   </>
  )
}

export default Products