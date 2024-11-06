import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
