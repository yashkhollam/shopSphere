import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';



export const getallorderthunk=createAsyncThunk('getallorder',async(_,{rejectWithValue})=>{
    try{
   
        // console.log("from thunk",orderdetails)

          const res=await axios.get(`${import.meta.env.VITE_API_URL}/order/getorderdata`,{withCredentials:true})

          return res.data
    }

    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
}) 




export const createorderthunk=createAsyncThunk('createorder',async(orderdetails,{rejectWithValue})=>{
    try{
   
        console.log("from thunk",orderdetails)

          const res=await axios.post(`${import.meta.env.VITE_API_URL}/order/createorder`,orderdetails,{withCredentials:true})

          return res.data
    }

    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
}) 





const productorderSlice=createSlice({
    name:"productOrders",
    initialState:{
        userOrders:[],
        error:null,
        loading:{
            createorderloading:false,
            getuserorderloading:false
        }
    },


    extraReducers:(builder)=>{
     builder
     .addCase(createorderthunk.pending,(state)=>{
        state.loading.createorderloading=true ;
        state.error=null;
     })

     .addCase(createorderthunk.fulfilled,(state)=>{
        
        state.loading.createorderloading=false;
        state.error=null;
     })
     .addCase(createorderthunk.rejected,(state,action)=>{
        
        state.loading.createorderloading=false;
        state.error=action.payload;
     })


     .addCase(getallorderthunk.pending,(state)=>{
        state.loading.getuserorderloading=true ;
        state.error=null;
     })

     .addCase(getallorderthunk.fulfilled,(state,action)=>{
        state.userOrders=action.payload.data
        state.loading.getuserorderloading=false;
        state.error=null;
     })
     .addCase(getallorderthunk.rejected,(state,action)=>{
        
        state.loading.getuserorderloading=false;
        state.error=action.payload;
     })


    }
})



export default productorderSlice.reducer