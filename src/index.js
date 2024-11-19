// import express from "express";
// import mongoose from "mongoose";
// import { configDotenv } from "dotenv";
import "dotenv/config";
import ConnectDB from "./db/index.js"; 

ConnectDB()

// const app = express();

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("mongoDB SuccessFully Connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// app.listen(process.env.PORT, () => {
//   console.log(`export for http://localhost:${process.env.PORT}`);
// });
