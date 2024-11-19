import mongoose from "mongoose";
const UserData = new mongoose.Schema(
  {
    userName: { type: String, require: true },
    email: { type: String, require: true, unique: true, lowercase: true },
    password: { type: String, require: true },
    gender: { type: String, require: true },
    dob: { type: Number, require: true },
    mobile: { type: Number, unique: true, require: true },
    address: { type: String, require: true },
    pincode: { type: Number, require: true },
    state: { type: String, require: true },
    city: { type: String, require: true },
    contry: { type: String, require: true },
    Image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserData);
