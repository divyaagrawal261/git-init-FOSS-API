import cors from "cors";
import express from "express";
import { apply, verifyEmail } from "../controllers/signup.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { getStats, updateStats } from "../controllers/statsControllers.js";
import { updateScore } from "../controllers/scoreControllers.js";
import { addProject } from "../controllers/projectControllers.js";
import { displayLeaderboard } from "../controllers/leaderboardControllers.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI, 
  console.log("Database connected successfully"))

const app = express();
app.use(cors());
app.use(express.json());

const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req,res)=>{
  res.status(200).json("Welcome to git-init-FOSS-API");
});
app.get("/stats", getStats);
app.put("/update-stats", updateStats);
app.put("/update-score", updateScore);
app.post("/add-project", addProject);
app.get("/leaderboard", displayLeaderboard);
app.post("/apply", apply);
app.post("/verify", verifyEmail);