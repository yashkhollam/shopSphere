import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';



export const getallorderthunk=createAsyncThunk('getallorder',async(_,{rejectWithValue})=>{
    try{
   
        // console.log("from thunk",orderdetails)

          const res=await axios.get(`${import.meta.env.VITE_API_URL}/order/getallorderdata`,{withCredentials:true})

          return res.data
    }

    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
}) 




export const getorderbyidthunk=createAsyncThunk('getorderbyid',async(id,{rejectWithValue})=>{
    try{
   
        // console.log("from thunk",orderdetails)

          const res=await axios.get(`${import.meta.env.VITE_API_URL}/order/getorderbyid/${id}`,{withCredentials:true})

          return res.data
    }

    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
}) 


export const updateorderstatusthunk=createAsyncThunk('updateorderstatus',async({id,orderStatus},{rejectWithValue})=>{
    try{
   
         console.log("from thunk",id,orderStatus)

          const res=await axios.patch(`${import.meta.env.VITE_API_URL}/order/updateorderstatus/${id}`,{orderStatus},{withCredentials:true})

          return res.data
    }

    catch(err){
        // console.log(err?.response?.data?.message)
        return rejectWithValue(err?.response?.data?.message)
    }
}) 









const adminorderoprationSlice=createSlice({
    name:"adminorderoperation",
    initialState:{
        allOrders:[],
        order:null,
        error:null,
        loading:{
            getallorderloading:false,
            updateorderstatusloading:false,
            orderbyidloading:false
        }
    },


    extraReducers:(builder)=>{
     builder
     .addCase(getallorderthunk.pending,(state)=>{
        state.loading.getallorderloading=true ;
        state.error=null;
     })

     .addCase(getallorderthunk.fulfilled,(state,action)=>{
        
        state.allOrders=action.payload.data
        state.loading.getallorderloading=false;
        state.error=null;
     })
     .addCase(getallorderthunk.rejected,(state,action)=>{
        
        state.loading.getallorderloading=false;
        state.error=action.payload;
     })

     //get order by Id

      .addCase(getorderbyidthunk.pending,(state)=>{
        state.loading.orderbyidloading=true ;
        state.error=null;
     })

     .addCase(getorderbyidthunk.fulfilled,(state,action)=>{
        
        state.order=action.payload.data
        state.loading.orderbyidloading=false;
        state.error=null;
     })
     .addCase(getorderbyidthunk.rejected,(state,action)=>{
        
        state.loading.orderbyidloading=false;
        state.error=action.payload;
     })

     //update order status
    .addCase(updateorderstatusthunk.pending,(state)=>{
        state.loading.updateorderstatusloading=true ;
        state.error=null;
     })

     .addCase(updateorderstatusthunk.fulfilled,(state,action)=>{
        
        const updatedData=action.payload.data

        state.allOrders=state.allOrders.map((order)=>order._id===updatedData.id? updatedData: order)


        state.loading.updateorderstatusloading=false;
        state.error=null;
     })
     .addCase(updateorderstatusthunk.rejected,(state,action)=>{
        
        state.loading.updateorderstatusloading=false;
        state.error=action.payload;
     })




    }
})



export default adminorderoprationSlice.reducer