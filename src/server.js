import cors from "cors";
import express from "express";
import fs from "fs";
import path from "path";
import { apply, verifyEmail } from "../utils/signup.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

await mongoose.connect("mongodb://localhost:27017/git-init-foss",
  console.log("Database connected successfully"))

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "public/score.json"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data.toString()));
    }
  });
});
app.get("/stats", (req, res) => {
  fs.readFile(path.join(__dirname, "public/stats.json"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data.toString()));
    }
  });
})
const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/apply", apply);
app.post("/verify", verifyEmail);