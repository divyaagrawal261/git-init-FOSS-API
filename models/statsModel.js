import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
    TotalPR:{
        type:Number,
        default:0
    },
    NumberHard:{
        type:Number,
        default:0
    },
    NumberEasy:{
        type:Number,
        default:0
    },
    NumberMedium:{
        type:Number,
        default:0
    },
    NumberOfActiveContributors:{
        type:Number,
        default:0
    }
})


export const stats=mongoose.model("stats", statsSchema);