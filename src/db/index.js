import mongoose from "mongoose";
import "dotenv/config";
import express from "express";
import { configDotenv } from "dotenv";

const app = express();

const ConnectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(process.env.PORT, () => {
      console.log(`Export for http://localhost:${process.env.PORT}`);
    });

    console.log(
      `\n MongoDB connect SuccessFully ! ${connectionInstant.connection.host}`
    );
  } catch (error) {
    console.error("Connection Failed", error);
    process.exit(1);
  }
};

export default ConnectDB;
