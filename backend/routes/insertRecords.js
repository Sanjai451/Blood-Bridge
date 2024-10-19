import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { User } from '../models/User.js';
dotenv.config()
 
const insertRouter = express.Router()

// Routes handling
insertRouter.post('/',(req,res)=>{
    console.log(req.body)
    console.log("inside insert")
    // res.send("insert")
    const user_data = new User(req.body)
    console.log(user_data)
    user_data.save().then((res)=>{console.log(`${user_data.name} Inserted successfully`)})
    res.status(200).send(`${user_data.name} Inserted successfully`)
})

export default insertRouter
