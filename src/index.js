import dotenv from "dotenv";
import {connectDB} from "./db/index.js"


dotenv.config({
  path:"./env"
}) 

connectDB()    



    

















/*
import express from "express";

const app = express()
;( async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    app.on("error",(e)=>{
      console.log("Error in app to connect db:",e)
      throw e

    })
    app.listen(process.env.PORT,()=>{
      console.log(`app is listening on: ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error in connection: ",error)
    throw error
  }
})()
*/