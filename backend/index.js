import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { Bank } from './models/Bank.js';
import { User } from './models/User.js';
import insertRouter from './routes/insertRecords.js';
import getRouter from './routes/getRecords.js';
import blank from './routes/blank.js';
dotenv.config()
 

 
const port = process.env.PORT || 8000;
const mongo_url = process.env.MONGO_URL
const app = express()

//Connect mongodb
mongoose.connect(mongo_url)
    .then((res)=>console.log("Connected MongoDB"))
    .catch((err)=>console.log("error in connection" + err))

// Routes handling
app.use('/',blank)
app.use('/insert',insertRouter)
app.use('/get',getRouter)


app.listen(port,()=>{
    console.log(`Server Running on port ${port}`)
})

