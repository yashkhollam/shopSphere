import React, { useEffect, useState } from 'react';
import styles from '../css/products.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { getAllfilterddata, setCategory, setNextPage, setPrevPage } from "./redux/features/productSlice.js"

import { Regularheart,Solidheart } from '../library/icons.jsx';
import { addtocartthunk } from './redux/features/cartSlice.js';
import toast from 'react-hot-toast';
import Loader from './loader.jsx';
import {useNavigate} from 'react-router-dom'


function Allproducts() {
    //  const [category,setcategory]=useState("all")
// const [search,setsearch]=
const navigate=useNavigate()
const [islike,setIslike]=useState(false)
 
const {Allfilterddata,search,category,brand,loading,totalPages,page,limit}=useSelector((state)=>state.productoperation)
   const dispatch=useDispatch()



   

// useEffect(()=>{
//     // console.log("component mounted")
//     const timer=setTimeout(()=>{
//         dispatch(getAllfilterddata({search,category}))
      

//     },2000)
//     return ()=>clearTimeout(timer)
// },[dispatch,search,category])


useEffect(()=>{
    dispatch(getAllfilterddata({search,category,brand,page,limit}))
},[dispatch,page,search,category,brand])


const handleaddcart=async(productId)=>{
    console.log(productId)

  const res= await dispatch(addtocartthunk(productId)).unwrap()

  toast.success(res.message)
 
}


const navigateproduct=(productId)=>{
    navigate(`/product/${productId}`)
    // console.log("product id =",productId)
}

  return (
   <>   
     {
        loading.getallprodloading && <Loader/>
     }
       
       <div className={`container-fluid  ${styles.products_container}`}> 
        <div className={`${styles.cardcontainer}`}>
            {
                Array.isArray(Allfilterddata)?(Allfilterddata.map((data,index)=>(
                    
                    
                    <div className={`${styles.productcard}`} key={index}>
                      
                      
                      
                      
                       <div className={`  ${styles.likecont}`}>
                           <p className={`${styles.prodcategory}`}>{data.subcategory}</p>


                           {
                               islike ? <Solidheart onClick={()=>setIslike(!islike)} className={`text-danger ${styles.heartIcon}`}/> 
                                        :
                                        
                                        <Regularheart  onClick={()=>setIslike(!islike)}  className={` ${styles.heartIcon}`}/>
                           }
                         
                       
                       </div>
                        <p className='ps-2 pe-2 mt-2 ms-2 bg-dark rounded position-absolute text-light'>stock {data.stocks}</p>
                        <img src={data.imgurl} 
                             loading='lazy'
                             alt=""
                             className={` ${styles.prodimg}`} />
                        
                        <div className="card-body ps-3 pe-3 pb-2">
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

                            <button className='cart btn text-light bg-warning'
                            disabled={data.stocks<=0?true:false}
                            
                            onClick={()=>handleaddcart(data._id)}>{data.stocks<=0 ?"out of stock" :"Add to cart" }</button>
                            

                            {/* <p className=' card-text' onClick={()=>navigate(`${`/product/${data._id}`}`)}>view Details</p> */}

                            <p className=' card-text text-primary'
                            style={{cursor:"pointer"}}
                            onClick={()=>navigateproduct(data._id)}>view Details</p>
                        </div>
                        </div>
                       
                       
                      
                    </div>
                ))):(<h1>product not found</h1>)
            }

           
        </div>

         <div className='d-flex align-items-center gap-3 mt-3  justify-content-center'
         style={{paddingBottom:"70px"}}>
                <button className='btn bg-success text-light'
                        disabled={page===1}
                        onClick={()=>dispatch(setPrevPage())}>prev</button>
                <p className=' mb-0 '>{page}/{totalPages}</p>

                <button className='btn bg-danger text-light'
                        disabled={page===totalPages}
                        onClick={()=>dispatch(setNextPage())}>
                            next</button>

            </div>
       </div>
   </>
  )
}

export default Allproducts