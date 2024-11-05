import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;  

connectDB();

app.get("/", (req, res) => {
  res.send("Hi There");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});