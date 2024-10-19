//for the addition of the request in blood bank
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Bank } from '../models/Bank.js';
dotenv.config()
 
const requestBlood = express.Router()

// Routes handling
requestBlood.post('/',(req,res)=>{
    console.log(req.body)
    const user_data = new Bank(req.body)
    user_data.save().then((res)=>console.log(res))
    console.log("inside request blood")
    res.status(200).send(`${req.body.name}  successfully`)
})

export default requestBlood
