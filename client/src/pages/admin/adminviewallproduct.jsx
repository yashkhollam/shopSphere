import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { deleteprodthunk, getadminproductsthunk, setCategory, setNextPage ,setPrevPage, updateprodtrendingstatus} from '../../components/redux/features/admin/adminproductSlice.js';
import Loader from '../../components/loader.jsx'
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';



function Adminviewallproduct() {
  const [isTrending,setIstrending]=useState()

const navigate=useNavigate()
  const dispatch=useDispatch()
        
  const {products,limit,category,page,totalPages,loading}=useSelector((state)=>state.adminproductoperation)

useEffect(()=>{
    dispatch(getadminproductsthunk({category,page,limit}))

   
},[category,limit,page,])



const deleteproduct=async(id)=>{
  try{
      const res=await dispatch(deleteprodthunk(id)).unwrap()
      toast.success(res.message)
  }
  catch(err){
    toast.error(err)
  }
}


const handleprodstatus=(e,id)=>{
  console.log(e.target.checked)
    dispatch(updateprodtrendingstatus({
      id:id,
      isTrending:e.target.checked
    })) 

}

  return (
    <>
        {
          loading.getadminproloading&& <Loader/>
        }
        {
          loading.deleteprodloading&& <Loader/>
        }
      <div className="container-fluid ">
      
      <div className='p-4'>
        <select name="" 
                // value={selectcategory}
                id=""
                className='form-select'
                onChange={(e)=>dispatch(setCategory(e.target.value))}>
          <option value="" disabled selected>Filter by category</option>
         <option value="MobilesTablets">Mobile & Tablet </option>
          <option value="LaptopsComputers">Laptop & Computer</option>
           <option value="AudioDevices">Audio Devices</option>
            <option value="SmartGadgets">Smart Gadgets</option>
            <option value="Gamings">Gamings</option>
        </select>
      </div>

         <table className='table table-bordered text-center table-responsive'>
            <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Stocks</th>
                  <th>isTrending</th>
                  <th colSpan={2}>
                   Actions
                  </th>
                </tr>
            </thead>

            <tbody>

              
              {
                products?.length>0 && products.map((data,index)=>(
                  <tr key={index}>
                   <td>
                    <img src={data?.imgurl}
                         alt="product image"
                         style={{height:"50px",width:"100%",objectFit:"contain"}} />
                   </td>
                    <td style={{verticalAlign:"middle"}}>{data?.name}</td>
                    <td style={{verticalAlign:"middle"}}>{data?.discountprice}</td>
                    <td style={{verticalAlign:"middle"}}>{data?.subcategory}</td>
                    <td style={{verticalAlign:"middle"}}>{data?.stocks}</td>


                    <td style={{verticalAlign:"middle",cursor:"pointer"}}>
                    
                           
                       
                        <input type="checkbox"
                               className='form-check-input fs-2'
                               onChange={(e)=>handleprodstatus(e,data?._id)}
                               checked={data?.isTrending}
                               />
                            
                  
                      
                    </td>
                    <td style={{verticalAlign:"middle"}}>
                     
                      <button className='btn bg-warning'
                      onClick={()=>navigate(`/updateproduct/${data?._id}`)}
                      >edit</button>
                    
                    
                    </td>

                    <td style={{verticalAlign:"middle"}}> 

                      <button className='btn bg-danger text-light'
                              onClick={()=>deleteproduct(data?._id)} >delete</button>
                      
                      </td>
                 </tr>
                ))
              }
              
            </tbody>
         </table>
       
         <div className='d-flex'>
          <button className='btn bg-success text-light'
                  onClick={()=>dispatch(setPrevPage())}>
           
           
            prev
            
            </button>
          
           <h5>{page}/{totalPages}</h5>
          
          <button className='btn bg-danger text-light'
                  onClick={()=>dispatch(setNextPage())}>next</button>
         </div>
      </div>
    </>
  )
}

export default Adminviewallproduct