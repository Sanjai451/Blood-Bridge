import express from 'express'
import dotenv from 'dotenv'
// import mongoose from 'mongoose';
// import { Bank } from './models/Bank.js';
// import { User } from './models/User.js';
dotenv.config()
 
const insertRouter = express.Router()

// Routes handling
insertRouter.get('/',(req,res)=>{
    console.log("inside insert")
    res.send("insert")
})

export default insertRouter
