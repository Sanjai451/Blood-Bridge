import express from 'express';
import { User } from '../models/User.js';  // Path to your User model
import { Bank } from '../models/Bank.js';  // Path to your Bank model

const userRouter = express.Router();

userRouter.get('/',(req,res)=>{
    res.send("inside /users - GET")
})

userRouter.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId ;
    console.log(userId)
    // Find the user and populate their posts from the Bank model
    // const user = await User.findById(userId).populate('userRequest')
    const user  = await User.findById(userId).populate('userRequest')
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default userRouter;
