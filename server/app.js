import './config/envConfig.js'

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectdb } from './config/dbconnect.js';
import { userRouter } from './routes/userroutes.js';
import { productroute } from './routes/productsroutes.js';
import { usercartrouter } from './routes/usercart.js';

export const app=express()

const PORT=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    // origin:process.env.frontend_url,
    origin:"https://shop-sphere-snowy-psi.vercel.app",
    credentials:true
}))
app.use(cookieParser())


connectdb();


app.use('/userauth',userRouter)
app.use('/product',productroute)
app.use('/usercart',usercartrouter)

app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:["Welcome to shopSphere E-commerce Project By :YASH KHOLLAM",
            "A full-stack, production-ready MERN e-commerce platform with secure authentication, role-based access, and admin management"
            ]
    })
    
})



app.listen(PORT,()=>{
    console.log(`shopSphere server started on PORT ${PORT}`)
})
