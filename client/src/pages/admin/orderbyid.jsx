import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import { getorderbyidthunk } from '../../components/redux/features/admin/adminOrderoperationsSlice'
import Loader from '../../components/loader';
import style from '../../css/getorderbyid.module.css';

function Orderbyid() {

const dispatch=useDispatch()

const {id}=useParams()
console.log(id)

useEffect(()=>{
    dispatch(getorderbyidthunk(id))
},[dispatch,id])


const {order,loading}=useSelector((state)=>state.adminorderoperation)



 
const orderdata=new Date (order?.createdAt).toLocaleDateString("en-GB",{
    day:"2-digit",
    month:"short",
    year:"numeric"
})

  return (
    <>
      {loading.orderbyidloading && <Loader/>}
    
    
     <div className={`container-fluid p-2 ${style.ordercontainer}`}>
     
    <div className={`p-2 ${style.orderSummerycontainer}`}>
      
        
        
            <div className="row ">
                <div className="col-12 col-lg-4">
                      <div className={`${style.orderSummarycard}`}>
                   <h4 className='text-primary'>Order Summary :</h4>
                  <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Order ID :</p>
                    <p className='p-0 m-0'>{order?._id}</p>
                  </div>

                   <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Order Date :</p>
                    <p className='p-0 m-0'>{orderdata}</p>
                  </div>


                   <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Order Status :</p>
                    <p className='p-0 m-0'>{order?.orderStatus}</p>
                  </div>
                 
                  <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Payment method:</p>
                    <p className='p-0 m-0'>{order?.paymentMethod}</p>
                  </div>

                   <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Payment Status :</p>
                    <p className='p-0 m-0'>{order?.paymentStatus}</p>
                  </div>


                   <div className='d-flex gap-3'>
                    <p className='p-0 m-0  fw-bold'>Total Amount :</p>
                    <p className='p-0 m-0 fw-bold'>{order?.totalAmount}</p>
                  </div>

                </div>
            
         <div className={`${style.userinfocard}`}>
            <h4 className='text-primary'>User information :</h4>
               <div className='d-flex gap-3'>
                  <p className='p-0 m-0 fw-bold'>Name :</p>
                  <p className='p-0 m-0'>{order?.shippingAddress?.fullname}</p>
                </div>


                 <div className='d-flex gap-3'>
                  <p className='p-0 m-0 fw-bold'>Email :</p>
                  <p className='p-0 m-0'>{order?.userId?.email}</p>
                </div>  

                 <div className='d-flex gap-3'>
                  <p className='p-0 m-0 fw-bold'>phone :</p>
                  <p className='p-0 m-0'>{order?.shippingAddress?.phone}</p>
                </div>
         </div> 

         <div className={`${style.orderaddresswrapper}`}>
             <h4 className='text-primary'>🚚 Shipping Address</h4>
             <div className={`${style.addresscontianer}`}>
                <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Address line :</p>
                    <p className='p-0 m-0'>{order?.shippingAddress?.addressline}</p>
                </div>

                {/* <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Street :</p>
                    <p className='p-0 m-0'>{order?.shippingAddress?.addressline}</p>
                </div>   */}

                <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>City :</p>
                    <p className='p-0 m-0'>{order?.shippingAddress?.city}</p>
                </div>

                <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>State :</p>
                    <p className='p-0 m-0'>{order?.shippingAddress?.state}</p>
                </div>

                <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Pincode :</p>
                    <p className='p-0 m-0'>{order?.shippingAddress?.pincode}</p>
                </div>

                <div className='d-flex gap-3'>
                    <p className='p-0 m-0 text-muted'>Country :</p>
                    <p className='p-0 m-0'>{order?.shippingAddress?.country}</p>
                </div>
                
                
                

                   
             </div>

        </div> 
                </div>



                <div className="col-12 col-lg-8">
                      <div className={style.productitemwrapper}>
            <h4 className='text-primary'>Order items :</h4>
              {
           
               
                 
                    order?.items?.map((data)=>(
                       <div className={`${style.orderproductscard}`}> 
                        <div className="row">
                            
                            <div className="col-3 d-block m-auto">
                                <img src={data?.prodimage}
                                     alt="" srcset=""
                                     className={`${style.orderprodimg}`} />
                            </div>

                            <div className="col-9">
                               <h5>{data?.productName}</h5>

                               <div className='d-flex gap-2'>
                                   <p className='p-0 m-0 text-muted'>price :</p>
                                   <p className='p-0 m-0 '>₹ {data?.price}</p>
                               </div>

                               <div className='d-flex gap-2'>
                                 <p className='p-0 m-0 text-muted'>qty :</p>
                                  <p className='p-0 m-0'>{data?.quantity}</p>
                               </div>
                             
                             <div className='d-flex gap-2'>
                                 <p className='p-0 m-0  fw-bold'>subtotal :</p>
                                 <p className='p-0 m-0 fw-bold text-decoration-underline'>₹ {data?.subtotal}</p>
                             </div>
                              
                              
                            </div>
                        </div>
                        </div>
                    ))


                
            } 
        </div>
                </div>
           
            </div>
            
            
           
            
               


       
          
            
             
        

    </div>
    
     </div>  
    </>
   
  )
}

export default Orderbyid