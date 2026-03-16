import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllfilterddata=createAsyncThunk(`/product/getfilterall`,async({search,category,brand,limit,page},{rejectWithValue})=>{

    try{
        // console.log("from thunk=",brand)
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/getAllfilterddata`,
        {params:{
         search,
         category,
         brand,
         limit,
         page,  
       
        },withCredentials:true})
    return res.data
    }
   
    catch(err){
        return rejectWithValue(err.response?.data?.message || "Something went wrong")
    }
   
})



export const getTrendingproduct=createAsyncThunk('gettrendingproduct',async({limit,isTrending},{rejectWithValue})=>{
    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/getAllfilterddata`,{
            params:{limit,isTrending},withCredentials
            :true
         })
        // console.log("thunk run")
         return res.data
    }

    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
}) 




export const getMostsoldproduct=createAsyncThunk('getMostsoldproduct',async(_,{rejectWithValue})=>{
    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/mostsold`)
       
         return res.data
    }

    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
}) 



export const getprodbyIdthunk=createAsyncThunk('/product/getprodbyId',async(productId,{rejectWithValue})=>{

    try{
         const res=await axios.get(`${import.meta.env.VITE_API_URL}/product/${productId}`)
        
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
         trendingproducts:[],
         mostsold:[],
        product:null,

        totalProducts:null,
        search:"",
        category:"",
        brand:"",
        page:1,
        limit:8,
        totalPages:0,

       
        
    
       
        error:null,
        loading:{
            getallprodloading:false,
            getprodbyIDloading:false,
           addprodloading:false,
           deleteprodloading:false,
           updateprodloading:false,
           trendingprodloading:false,
           updateprodtrendingstatusloading:false,
           mostsoldporductloading:false
           
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
        setBrand:(state,action)=>{
           
           state.brand=action.payload;
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

        //trending prod

       .addCase(getTrendingproduct.pending,(state,action)=>{
             state.loading.trendingprodloading=true;
             state.error=false;
         })
         .addCase(getTrendingproduct.fulfilled,(state,action)=>{
            state.trendingproducts=action.payload.data;
            state.loading.trendingprodloading=false;
            state.error=false;
         })
         .addCase(getTrendingproduct.rejected,(state,action)=>{
             state.loading.trendingprodloading=false;
             state.error=action.payload;
         })

         //most sold product 

         .addCase(getMostsoldproduct.pending,(state,action)=>{
             state.loading.mostsoldporductloading=true;
             state.error=false;
         })
         .addCase(getMostsoldproduct.fulfilled,(state,action)=>{
            state.mostsold=action.payload.data;
            state.loading.mostsoldporductloading=false;
            state.error=false;
         })
         .addCase(getMostsoldproduct.rejected,(state,action)=>{
             state.loading.mostsoldporductloading=false;
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


export const {setSearchtext,setCategory,setBrand,setNextPage,setPrevPage}=ProductSlice.actions
export default ProductSlice.reducer