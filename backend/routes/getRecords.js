import express from 'express'
import dotenv from 'dotenv'
import {Bank} from '../models/Bank.js'
import { User } from '../models/User.js'
dotenv.config()
 
const getRouter = express.Router()

// Routes handling
getRouter.get('/',async(req,res)=>{
    const blood_data = await Bank.find()
    console.log(blood_data)
    console.log("inside getRouter")
    res.json(blood_data)
})

getRouter.get('/:email',async(req,res)=>{
    const email = req.params.email
    const user_data = await User.find({email:email}).populate('userRequest')
    console.log(user_data)
    console.log("inside getRouter for getting user data")
    res.json(user_data)
})

getRouter.get('/:id/getdata',async(req,res)=>{
    const id = req.params.id
    const user_data = await Bank.find({_id:id}).populate('user') //get the recent request only using Bank
    // const user_data = await User.find().populate('userRequest')
    console.log(user_data)
    console.log("inside getRouter")
    // res.json(user_data)
    res.json(user_data)
})


export default getRouter
