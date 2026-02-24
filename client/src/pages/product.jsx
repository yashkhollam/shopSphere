import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getprodbyIdthunk } from '../components/redux/features/productSlice'
import styles from  '../css/productdetail.module.css';
import { addtocartthunk } from '../components/redux/features/cartSlice';
import{toast} from 'react-hot-toast'

function ProductDetail() {

 const {productId}=useParams()
 const dispatch=useDispatch()
 const {product,getprodbyIDloading,loading}=useSelector((state)=>state.productoperation)

//  console.log("from product com",productId)
 
 useEffect(()=>{
    dispatch(getprodbyIdthunk(productId)) 
 },[productId,dispatch])



 const handlecart=async(productId)=>{
    try{
         const res=await dispatch(addtocartthunk(productId)).unwrap()
         toast.success(res.message)
    }

    catch(err){
      toast.error(err)
    }
 }
  return (
   <div className={`container-fluid ${styles.productcont}`}>
        <div className={`row mt-4 ${styles.productrow}`}>
          <div className="col-sm-12 col-lg-6 p-0">
          <img     /* src='https://cdn8.web4s.vn/media/products/mac-air-m2/macbookairm2-midnight%201.jpg' */
              src={product?.imgurl}
           
                 alt="product-img"
                 className={`${styles.prodimg}`} />
          </div>
            <div className="col-sm-12 col-lg-6 ">
              <h2 className='fw-bold'>{product?.name}</h2>
             
               <div className='d-flex gap-3 mt-3 text-muted'>
               <h4 className=''>Brand :</h4>
               <h4>{product?.brand}</h4>
              
              </div>

               <div className='d-flex gap-2 text-muted mt-2'>
                  <h4 className=''>Category:</h4>
                   <h4>{product?.category}</h4>
              </div>
              
               <p className='mt-2'>{product?.description}</p>
             <div className='d-flex gap-2'>
             
              <p className='text-primary fs-4 fw-bold'>₹ {product?.discountprice}</p>
             </div>

             <div className='d-flex '>
              <p className=' pt-1 pb-1 ps-2 pe-2  text-muted'>In Stock:</p>
               <p className='bg-success text-light pt-1 pb-1 ps-2 pe-2 rounded'>{product?.stocks} Available</p>
             </div>

              

              <button className='btn bg-primary text-light p-2 mt-2'
                      onClick={()=>handlecart(product?._id)}>Add to cart</button>
            </div>
        </div>
   </div>
  )
}

export default ProductDetail