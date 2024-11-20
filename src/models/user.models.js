import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      index: true,
      trim: true,
      require: true,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      trim: true,
      require: true,
      index: true,
    },
    avatar: {
      type: String,
      require: [true, "Please Avatar is Required"],
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      trim: true,
      require: [true, "Password is required !"],
    },
    refreshTokan: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: Video,
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.method.generateAccessToken = async function () {
  return await jwt.sign(
    {
      userName: this.userName,
      fullName: this.fullName,
      password: this.password,
    },
    process.env.ACCESS_TOKEN__SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.method.generateRefreshToken = async function () {
  return await jwt.sign(
    {
      userName: this.userName,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
