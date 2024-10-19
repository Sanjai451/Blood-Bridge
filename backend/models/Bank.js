import mongoose from "mongoose";

const RequestsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,  // Add required if date is mandatory
  },
  amount: {
    type: Number,
    required: true,  // Add required if amount is mandatory
  },
  contact: {
    type: String,  // Use String to store phone numbers
    required: true,
  },
});

const BloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,  // Corrected to lowercase
  },
  requests: [RequestsSchema],  // Changed `type` to `requests` for clarity
});

export const Bank = mongoose.model("Bank", BloodBankSchema);
