import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





export const getallcartitemsthunk=createAsyncThunk('/cartopeartion/getallcart',async(_,{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/usercart/getcartitems`,{withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})



export const addtocartthunk=createAsyncThunk('/cartopeartion/addtocart',async(productId,{rejectWithValue})=>{

    try{
         const res=await axios.post(`${import.meta.env.VITE_API_URL}/usercart/addtocart/${productId}`,{},{withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})





export const removecartitemthunk=createAsyncThunk('/cartopeartion/removecartitem',async(productId,{rejectWithValue})=>{

    try{
         const res=await axios.delete(`${import.meta.env.VITE_API_URL}/usercart/removecartitem/${productId}`,{withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})



export const increasecartitemqtythunk=createAsyncThunk('/cartopeartion/increasecartitemqty',async(productId,{rejectWithValue})=>{

    try{
         const res=await axios.post(`${import.meta.env.VITE_API_URL}/usercart/increaseqty/${productId}`,{},{withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})



export const  decreasecartitemqtythunk=createAsyncThunk('/cartopeartion/decreasecartitemqty',async(productId,{rejectWithValue})=>{

    try{
         const res=await axios.patch(`${import.meta.env.VITE_API_URL}/usercart/decreaseqty/${productId}`,{},{withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})


const cartSlice=createSlice({
    name:"cartopeartion",
    initialState:{
        cart:[],
        carttotalprice:0,
        carttotaldiscountprice:0,
        deliverycharge:0,
        // product:null,
        error:null,
        loading:{
       
        addcartloading:false,
            removecartitemloading:false,
            getallcartitemloading:false,
            increasecartitemqtyloading:false,
            decreasecartitemqtyloading:false
        }
    },

    
        
    

    extraReducers:(builder)=>{
      builder
  //post
      .addCase(addtocartthunk.pending,(state,)=>{
                   state.loading.addcartloading=true;
                   state.error=false;
               })
               .addCase(addtocartthunk.fulfilled,(state,action)=>{
                
                 state.cart=action.payload.data;
                  state.carttotalprice=action.payload.carttotalprice;
                  state.carttotaldiscountprice=action.payload.carttotaldiscountprice;
                  state.deliverycharge=action.payload.deliverycharge;
                 state.loading.addcartloading=false;
                  state.error=false;
               })
               .addCase(addtocartthunk.rejected,(state,action)=>{
                    state.loading.addcartloading=false;
                   state.error=action.payload;
               })

               //getall

          .addCase(getallcartitemsthunk.pending,(state,)=>{
                   state.loading.getallcartitemloading=true;
                   state.error=false;
               })
               .addCase(getallcartitemsthunk.fulfilled,(state,action)=>{
                  state.cart=action.payload.data;
                  state.carttotalprice=action.payload.carttotalprice;
                  state.carttotaldiscountprice=action.payload.carttotaldiscountprice
                  state.deliverycharge=action.payload.deliverycharge;
                 state.loading.getallcartitemloading=false;
                  state.error=false;
               })
               .addCase(getallcartitemsthunk.rejected,(state,action)=>{
                    state.loading.getallcartitemloading=false;
                   state.error=action.payload;
               })
               
               


               //remove

 .addCase(removecartitemthunk.pending,(state,)=>{
                   state.loading.removecartitemloading=true;
                   state.error=false;
               })
               .addCase(removecartitemthunk.fulfilled,(state,action)=>{
                  state.cart=action.payload.data;
                  state.carttotalprice=action.payload.carttotalprice;
                  state.carttotaldiscountprice=action.payload.carttotaldiscountprice;
                  state.deliverycharge=action.payload.deliverycharge;
                 state.loading.removecartitemloading=false;
                  state.error=false;
               })
               .addCase(removecartitemthunk.rejected,(state,action)=>{
                    state.loading.removecartitemloading=false;
                   state.error=action.payload;
               })


                           //increase

 .addCase(increasecartitemqtythunk.pending,(state,)=>{
                   state.loading.increasecartitemqtyloading=true;
                   state.error=false;
               })
               .addCase(increasecartitemqtythunk.fulfilled,(state,action)=>{
                  state.cart=action.payload.data;
                  state.carttotalprice=action.payload.carttotalprice;
                  state.carttotaldiscountprice=action.payload.carttotaldiscountprice;
                  state.deliverycharge=action.payload.deliverycharge;
                 state.loading.increasecartitemqtyloading=false;
                  state.error=false;
               })
               .addCase(increasecartitemqtythunk.rejected,(state,action)=>{
                    state.loading.increasecartitemqtyloading=false;
                   state.error=action.payload;
               })


    //decrese qty

                            //increase

 .addCase(decreasecartitemqtythunk.pending,(state,)=>{
                   state.loading.decreasecartitemqtyloading=true;
                   state.error=false;
               })
               .addCase(decreasecartitemqtythunk.fulfilled,(state,action)=>{
                  state.cart=action.payload.data;
                  state.carttotalprice=action.payload.carttotalprice;
                  state.carttotaldiscountprice=action.payload.carttotaldiscountprice;
                  state.deliverycharge=action.payload.deliverycharge;
                 state.loading.decreasecartitemqtyloading=false;
                  state.error=false;
               })
               .addCase(decreasecartitemqtythunk.rejected,(state,action)=>{
                    state.loading.decreasecartitemqtyloading=false;
                   state.error=action.payload;
               })


               


      

    }


})


export default cartSlice.reducer