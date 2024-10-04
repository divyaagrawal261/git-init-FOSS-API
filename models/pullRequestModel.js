import mongoose from "mongoose";

const pullRequestSchema = new mongoose.Schema({
    prId:{
        type:Number,
        unique:true
    },
    githubUsername:{
        type:String
    }
})

export const pullRequestsId = mongoose.model("pullRequestsIds", pullRequestSchema); 