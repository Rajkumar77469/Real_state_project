import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('DB Connection Error:', err);
  });
const app=express();

app.listen(3000,()=>{
console.log("server working on port 3000");
})