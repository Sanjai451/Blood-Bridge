import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { Bank } from './models/Bank.js';
import { User } from './models/User.js';
import insertRouter from './routes/insertRecords.js';
import getRouter from './routes/getRecords.js';
import blank from './routes/blank.js';
import cors from 'cors'
import bodyParser from 'body-parser'
import requestBlood from './routes/requestBlood.js';
dotenv.config()
 

 
const port = process.env.PORT || 8000;
const mongo_url = process.env.MONGO_URL
const app = express()
app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
app.use(express.json())

//Connect mongodb
mongoose.connect(mongo_url)
    .then((res)=>console.log("Connected MongoDB"))
    .catch((err)=>console.log("error in connection" + err))

// Routes handling
app.use('/',blank)
app.use('/insert',insertRouter)
app.use('/requestBlood',requestBlood)  //for the addition of the request in blood bank
app.use('/get',getRouter)

 
app.listen(port,()=>{
    console.log(`Server Running on port ${port}`)
})

