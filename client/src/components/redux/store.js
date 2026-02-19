import {configureStore} from '@reduxjs/toolkit'
import userAuthSlice from './features/userauthSlice.js'
import ProductSlice from './features/productSlice.js'

export const store=configureStore({
  reducer:{
    userAuth:userAuthSlice,
    productoperation:ProductSlice
  }  
})