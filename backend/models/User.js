import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,  // Corrected to lowercase
  },
  age: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,  // Changed to string for validation
    required: true,
    minlength: 10,  // Corrected to minlength for strings
    maxlength: 12,  // Corrected to maxlength for strings
  },
  email: {  // Corrected spelling of email
    type: String,
  },
  city: {
    type: String,
    required: true,
    lowercase: true,  // Corrected to lowercase
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRequest: [{
    type: mongoose.Schema.Types.ObjectId,  // Use Types.ObjectId
    ref: "Bank",
  }],
});

export const User = mongoose.model("User", UserSchema);
