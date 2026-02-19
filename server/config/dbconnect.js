import mongoose from "mongoose";


export const connectdb=async()=>{
    try{
       await mongoose.connect(process.env.dbconnection)
       console.log("Database connected succesfully")
    }
    catch(err){
        console.log(err)
        console.log("Failed to connect Database")
    }
}