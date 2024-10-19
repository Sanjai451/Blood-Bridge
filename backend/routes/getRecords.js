import express from 'express'
import dotenv from 'dotenv'
// import mongoose from 'mongoose';
// import { Bank } from './models/Bank.js';
// import { User } from './models/User.js';
dotenv.config()
 
const getRouter = express.Router()

// Routes handling
getRouter.post('/',(req,res)=>{
    console.log("inside getRouter")
    console.log(req.body)
    res.send("inside getRouter")
})

export default getRouter
