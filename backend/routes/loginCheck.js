import express from 'express';
import { User } from '../models/User.js';  // Path to your User model
import { Bank } from '../models/Bank.js';  // Path to your Bank model

const loginRouter = express.Router();

loginRouter.get('/:email/:password', async (req, res) => {
    const email = req.params.email;
    const password = req.params.password

    // console.log(email,password)
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    // console.log('inside the login router get')

    const user_Data = await User.find({email:email});

    console.log(user_Data)

    try {
        if(user_Data[0].email == email && user_Data[0].password === password)
            {
                // Successful login
                return res.status(200).json({ message: 'Login successful!' });
            } else {
                // Invalid credentials
                console.log("invalid user id password")
                // return res.json({ message: 'Invalid email or password.' });
                return res.status(401).json({ message: 'Invalid email or password.' });
            }
    } catch (error) {
        console.log("invalid user id password")
        return res.status(401).json({ message: 'Invalid email or password.' });
    }

   
});

export default loginRouter;
