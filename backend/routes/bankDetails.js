import express from 'express';
import { User } from '../models/User.js';  // Path to your User model
import { Bank } from '../models/Bank.js';  // Path to your Bank model

const bankRouter = express.Router();

bankRouter.get('/',(req,res)=>{
    res.send("inside /users - GET")
})

bankRouter.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId ;
    console.log(userId)
    const user  = await Bank.findById(userId).populate('user')
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

export default bankRouter;
