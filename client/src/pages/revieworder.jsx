import React from 'react'

import styles from '../css/revieworder.module.css'
import { useSelector,useDispatch } from 'react-redux';
import { Deleteicon,PlusIcon,MinusIcon} from '../library/icons';
import Loader from '../components/loader.jsx';
import { decreasecartitemqtythunk,removecartitemthunk,increasecartitemqtythunk, clearCart } from '../components/redux/features/cartSlice';
import { createorderthunk } from '../components/redux/features/orderSlice.js';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'


function Revieworder() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
  const {cart,carttotalprice,carttotaldiscountprice,loading}=useSelector((state)=>state.cartopeartion)
    

   

 let items=[]

for(let cartdata of cart){
   items.push({productId:cartdata.prodId,quantity:cartdata.quantity})   
}
 
  
  let address=JSON.parse(localStorage.getItem("address"))
    const orderdetails={items,shippingAddress:address,paymentMethod:"COD"}

    console.log("adderss=",address)
    

    const submitform=async(e)=>{
       e.preventDefault()
       try{
          let res=await dispatch(createorderthunk(orderdetails)).unwrap()

          toast.success(res.message)

          dispatch(clearCart())
          localStorage.clear("address")
          navigate('/')
          
         
       }

       catch(err){
              toast.error(err)
             
       }
}

  return (
    <>
     {
        loading.getallcartitemloading && <Loader/>
     }
      <div className={`container-fluid ${styles.reviewordercont}`} style={{ marginTop: "80px" }}>
       
       <div className={`row w-100 mt-3 ${styles.row}`}>
        
        <div className="col-12 col-lg-8 " style={{paddingBottom:"30px"}}>
            
                
                
            <div>
           

                <h1 className='fw-bold text-dark'>Shipping Address :</h1>

            <div className='border p-3'>
                <h4 className=' text-warning fw-bold'>Delivered to :</h4>

                <div className='d-flex gap-3'>
                    <p className='p-0 m-0 fw-bold text-secondary'>Name :</p>
                    <p className='p-0 m-0 fw-bold'>{address?.fullname}</p>
                </div>

                <div className='d-flex gap-3'>
                    <p className='p-0 m-0 fw-bold text-secondary'>Phone :</p>
                    <p className='p-0 m-0 fw-bold text-dark'>{address?.phone}</p>
                </div>

                <div className='d-flex flex-column'>

                   

                    <div className='d-flex gap-3'>
                          
                        <p className='p-0 m-0 fw-bold text-secondary text-nowrap'>Address :</p>
                        <p className='p-0 m-0 fw-bold text-dark'>{address?.addressline}</p>
                    </div>

                    <div className='d-flex gap-3'>
                        <p className='p-0 m-0 fw-bold text-secondary '>City :</p>
                        <p className='p-0 m-0 fw-bold text-dark'>{address?.city}</p>
                    </div>

                    <div className='d-flex gap-3'>
                        <p className='p-0 m-0 fw-bold text-secondary '>State :</p>
                        <p className='p-0 m-0 fw-bold text-dark'>{address?.state}</p>
                    </div>

                    <div className='d-flex gap-3 '>
                        <p className='p-0 m-0 fw-bold text-secondary '>PinCode :</p>
                        <p className='p-0 m-0 fw-bold text-dark'>{address?.pincode}</p>
                    </div>

                    <div className='d-flex gap-3'>
                        <p className='p-0 m-0 fw-bold text-secondary '>Country :</p>
                        <p className='p-0 m-0 fw-bold text-dark'>{address?.country}</p>
                    </div>
                 </div>
            

            </div>
            </div>



        <div className='mt-3'>
            <h1 className='fw-bold text-dark'>Order items :</h1>
            <div className=' pe-3 ps-3'>

           
             {
                Array.isArray(cart)&&cart.length>0 ?
                (cart.map((data,index)=>(
                    <div className={`${styles.cartcard}`} key={index}>

                      <div className="row h-100">
                  
                   <div>
                            <p className={styles.discountper}>{data.discountedpercentage}% off</p>
                      </div>
                      
                     <div className={`col-3  ${styles.prodimgcont}`}>
                      <img src={data.productimg}
                       alt=""
                       className={`${styles.cartimg}`}
                         />
                   </div>
                   
                  <div className={`col-8  ${styles.prodinfocont}`}>
                    <span className='d-flex gap-2 '>
                          <p className={`p-0 m-0  ${styles.prodname}`}>{data.prodname}</p>

                    {/* <p className={` ${styles.prodbrand}`}>{data.prodbrand}</p> */}
                    </span>
                   
                  <span className='d-flex gap-5 '>
                      <p className={`${styles.stocks}`}>{data.prodstocks} in stock</p>
                       <p className={` ${styles.prodbrand}`}>{data.prodbrand}</p>
                  </span>
                 
                  {/* <p className={`${styles.proddescription}`}>{`${data.proddescription}......`}</p> */}
                  
                  
                
                  
                <span className='d-flex gap-3 mt-2'>
                  <p className={`text-muted text-decoration-line-through ${styles.prodtotalprice}`}>{data.prodtotalprice}</p>

                  <p className={`${styles.prodtotaldiscprice}`}>₹ {data.prototaldiscprice}</p>
                </span>
                 
                 
                 <div className={`${styles.qtycont}`}>

                {

                 
                  data.quantity===1 ?
                   <Deleteicon className={`text-danger ${styles.minusicon}`} onClick={()=>dispatch(removecartitemthunk(data.prodId))}/>:
                   
                   
                   
                   <MinusIcon className={`${styles.minusicon}`}
                              onClick={()=>dispatch(decreasecartitemqtythunk(data.prodId))}/>

}


                 
                
                 <p className={`${styles.quantity}`}>{data.quantity}</p>
                
                <PlusIcon className={`${styles.plusicon}`} onClick={()=>dispatch(increasecartitemqtythunk(data.prodId))}/>
                 </div>
                 
                 
                 
                 
                  </div>
                  



                      </div>
                   
                  


                    </div>
                )))
                
                
                
                
                :(<h1>empty cart</h1>)
             } 

              </div>
        </div>

        </div>

         <div className={`col-12 col-lg-4 ${styles.totalpricecontainer}`}>
                         <h5 className=''>Price details</h5>
       
                         <div className={`${styles.totalpricewrapper}`}>
                            <span className={`${styles.pricerow}`}>
                             <p>items</p>
                             <p>{cart.length}</p>
                             </span> 
       
                              <span className={`${styles.pricerow}`}>
                             <p>Delivery charges</p>
                             <p className='text-muted text-decoration-line-through '> ₹ 0</p>
                             </span> 
       
       
                              {/* <span className={`${styles.pricerow}`}>
                             <p>Discount applied</p>
                             <p>₹ {""}</p>
                             </span>  */}
       
                           
       
                             <span className={`${styles.pricerow}`}>
                             <p>total</p>
                             <p className='text-muted '>₹ {carttotalprice}</p>
                             </span>
       
                              <span className={`${styles.pricerow}`}>
                             <p>After Discount</p>
                             <p>₹ {carttotaldiscountprice}</p>
                             </span>
       
       
       
                             <div className={styles.ordertotalcont}>
          <span>Final Bill</span>
          <span>₹ {carttotaldiscountprice}</span>
       </div>
       
       <button className='btn bg-warning   w-100 mt-2 fw-bold'
       onClick={submitform}>Place Order</button>
                            
       
       
                         </div>
                    </div>

       </div>

    </div>
    </>
   
  )
}

export default Revieworder