import express from 'express'
import dotenv from 'dotenv'
// import mongoose from 'mongoose';
// import { User } from './models/User.js';
import {Bank} from '../models/Bank.js'
dotenv.config()
 
const getRouter = express.Router()

// Routes handling
getRouter.get('/',async(req,res)=>{
    const blood_data = await Bank.find()
    console.log(blood_data)
    console.log("inside getRouter")
    res.json(blood_data)
})


export default getRouter
