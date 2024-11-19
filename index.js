import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB SuccessFully Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// app.get("/", (req, res) => {
//   res.send("hello word");
// });

app.listen(process.env.PORT, () => {
  console.log(`export for http://localhost:${process.env.PORT}`);
});
