import cors from "cors";
import express from "express";
import fs from "fs";
import path from "path";
import { apply, verifyEmail } from "../controllers/signup.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { getStats, updateStats } from "../controllers/statsControllers.js";
import { updateScore } from "../controllers/scoreControllers.js";
import { addProject } from "../controllers/projectControllers.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI, 
  console.log("Database connected successfully"))

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

// app.get("/", (req, res) => {
//   fs.readFile(path.join(__dirname, "public/score.json"), (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(JSON.parse(data.toString()));
//     }
//   });
// });
// app.get("/stats", (req, res) => {
//   fs.readFile(path.join(__dirname, "public/stats.json"), (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(JSON.parse(data.toString()));
//     }
//   });
// })
app.get("/", (req,res)=>{
  res.status(200).json("Welcome to git-init-FOSS-API");
});
app.get("/stats", getStats);
app.put("/update-stats", updateStats);
app.put("/update-score", updateScore);
app.post("/add-project", addProject);

const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/apply", apply);
app.post("/verify", verifyEmail);