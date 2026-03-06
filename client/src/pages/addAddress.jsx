import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { createorderthunk, setAddress } from '../components/redux/features/orderSlice';

function AddAddress() {
const navigate=useNavigate()
const dispatch=useDispatch()
const {cart}=useSelector((state)=>state.cartopeartion)

const data={fullname:"",
            phone:"",
            addressline:"",
            city:"",
            state:"",
            pincode:"",
            country:"india"}

const [formdata,setFormdata]=useState(data)
// const [paymentmethod,setPaymentmethod]=useState()

const handleform=(e)=>{
    console.log({...formdata,[e.target.name]:e.target.value})
    setFormdata({...formdata,[e.target.name]:e.target.value})
}

//  let items=[]

// for(let cartdata of cart){
//    items.push({productId:cartdata.prodId,quantity:cartdata.quantity})   
// }

// const orderdetails={items,shippingAddress:formdata,paymentMethod:"COD"}
// console.log(orderdetails)
// console.log(items)

// console.log("cart=",cart.prodId)
// const submitform=async(e)=>{
//        e.preventDefault()
//        try{
//           let res=await dispatch(createorderthunk(orderdetails)).unwrap()

//           toast.success(res.message)
//           setFormdata({fullname:"",
//             phone:"",
//             addressline:"",
//             city:"",
//             state:"",
//             pincode:"",
//             country:"india"})
//        }

//        catch(err){
//               toast.error(err)
//               console.log(err)
//        }
// }

const submitform=(e)=>{
       e.preventDefault()
  try{
   dispatch(setAddress(formdata))
   navigate('/reviewOrder')
    setFormdata({fullname:"",
            phone:"",
            addressline:"",
            city:"",
            state:"",
            pincode:"",
            country:""})
   
  } 
  catch(err){
       toast.error(err.message)
  }    
       
}

  return (
    <>
       <div className="container-fluid " 
            style={{marginTop:"70px",
                     paddingBottom:"80px",
                     backgroundColor:"#f4f7fb"
                  
            }}>




          <form className='form d-block mx-auto  bg-light border p-3 rounded'
                style={{
                     maxWidth:"800px",
                     boxShadow:"rgba(40, 116, 240, 0.08) 0px 16px 30px"
              
                }}
                onSubmit={submitform}>
            <h2 className='text-center'>Add Address</h2>

        <label className='form-label'>Full Name :</label>
        <input type="text"
               className='form-control'
               name='fullname'
               value={formdata.fullname}
                onChange={handleform}/>

         <label className='form-label mt-2'>phone :</label>
        <input type="Number"
               className='form-control'
               name='phone'
               min={10}
              
               value={formdata.phone}
                onChange={handleform}/>



 <label className='form-label mt-2'>Address line :</label>
        <input type="text"
               className='form-control'
               name='addressline'
               value={formdata.addressline}
                onChange={handleform}/>


 <label className='form-label mt-2'>city :</label>
        <input type="text"
               className='form-control'
               name='city'
               value={formdata.city}
                onChange={handleform}/>



 <label className='form-label mt-2'>state :</label>
        <input type="text"
               className='form-control'
               name='state'
               value={formdata.state}
                onChange={handleform}/>


 <label className='form-label mt-2'>pincode :</label>
        <input type="text"
               className='form-control'
               name='pincode'
               value={formdata.pincode}
                onChange={handleform}/>


 <label className='form-label mt-2'>country :</label>
        <input type="text"
               className='form-control'
               name='country'
               value={formdata.country}
                onChange={handleform}/>

{/* <label className='form-label mt-2'>payment method :</label> */}

{/* <div className='form-check'>
 <label className='form-check-label'>Cash on delivery</label>
  <input type="radio"
        className='form-check-input' />
</div> */}


  <button className='btn bg-warning d-block mt-4 mx-auto' type='submit'> Continue</button>




          </form>
       </div>
    </>
  )
}

export default AddAddress