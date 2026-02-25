import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const getAllfilterddata=createAsyncThunk('/product/getall',async(_,{rejectWithValue})=>{

//     try{
//          const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/getAllfilterddata`)
//     return res.data
//     }
   
//     catch(err){
//         return rejectWithValue(err.response?.data?.meassage || "Something went wrong")
//     }
   
// })



export const getAllfilterddata=createAsyncThunk(`/product/getfilterall`,async({search,category,limit,page},{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/getAllfilterddata`,
        {params:{
         search,
         category,
         limit,
         page  
        },withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})


export const getprodbyIdthunk=createAsyncThunk('/product/getprodbyId',async(productId,{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/${productId}`)
         console.log("from thun=",productId)
         
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.meassage || "Something went wrong")
    }
   
})





const ProductSlice=createSlice({
    name:"productoperation",
    initialState:{
        Allfilterddata:[],
        product:null,
        totalProducts:null,
        search:"",
        category:"",
        page:1,
        limit:6,
        totalPages:0,
       
        error:null,
        loading:{
            getallprodloading:false,
            getprodbyIDloading:false,
           addprodloading:false,
           deleteprodloading:false,
           updateprodloading:false,
           
        }
    },

    reducers:{
        setSearchtext:(state,action)=>{
            state.search=action.payload
            state.page=1;
            
        },

        setCategory:(state,action)=>{
            state.category=action.payload
            state.page=1
        },
        setNextPage:(state)=>{
            if(state.page<state.totalPages){
             state.page+=1;
            }
            
        },
        setPrevPage:(state)=>{
            if(state.page>1){
               state.page-=1;
            }
        
        }
    }
        
    
,
    extraReducers:(builder)=>{
         builder
         //getAllfilterddata
         .addCase(getAllfilterddata.pending,(state,)=>{
             state.loading.getallprodloading=true;
             state.error=false;
         })
         .addCase(getAllfilterddata.fulfilled,(state,action)=>{
            state.Allfilterddata=action.payload.data;
            state.totalPages=action.payload.totalPages;
            state.totalProducts=action.payload.totalProducts;
            state.page=action.payload.currentPage
          
           state.loading.getallprodloading=false;
            state.error=false;
         })
         .addCase(getAllfilterddata.rejected,(state,action)=>{
              state.loading.getallprodloading=false;
             state.error=action.payload;
         })

          //getproductById
         .addCase(getprodbyIdthunk.pending,(state,action)=>{
             state.loading.getprodbyIDloading=true;
             state.error=false;
         })
         .addCase(getprodbyIdthunk.fulfilled,(state,action)=>{
            state.product=action.payload.data;
            state.loading.getprodbyIDloading=false;
            state.error=false;
         })
         .addCase(getprodbyIdthunk.rejected,(state,action)=>{
             state.loading.getprodbyIDloading=false;
             state.error=action.payload;
         })


         
    }
})


export const {setSearchtext,setCategory,setNextPage,setPrevPage}=ProductSlice.actions
export default ProductSlice.reducer