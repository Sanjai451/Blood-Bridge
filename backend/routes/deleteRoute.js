import express from 'express';
import { Bank } from '../models/Bank.js';

const deletRoute = express.Router();

deletRoute.delete('/:id', async (req, res) => {

   const { id } = req.params;
   try {
    const deletedDonor = await Bank.findByIdAndDelete(id);
    if (!deletedDonor) {
      return res.status(404).json({ error: "Donor not found" });
    }
    res.status(200).json({ message: "Donor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting donor" });
  }
});

export default deletRoute;
