import mongoose from "mongoose";


const BloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,  // Corrected to lowercase
  },
  age:{
    type:Number,
  },
  bloodGroup:String,
  contact: {
    type: String,  // Use String to store phone numbers
    required: true,
  },
  address: String,
  location: String,
  type : String,
  requiredUnits: {
    type: Number, 
  },
  date: {
    type: Date,
  },
  PostedOn: {
    default: new Date().toLocaleString(),
    type : String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,  // Use Types.ObjectId
    ref: "User",
  },
});

export const Bank = mongoose.model("Bank", BloodBankSchema);
