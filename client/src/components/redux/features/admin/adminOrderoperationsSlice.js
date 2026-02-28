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
        error:null,
        loading:{
            getallorderloading:false,
            updateorderstatusloading:false
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

     //update order status
    .addCase(updateorderstatusthunk.pending,(state)=>{
        state.loading.updateorderstatusloading=true ;
        state.error=null;
     })

     .addCase(updateorderstatusthunk.fulfilled,(state,action)=>{
        
        // state.allOrders=action.payload.data
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