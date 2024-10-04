import mongoose from "mongoose";

const projectsSchema=new mongoose.Schema(
    {
        maintainer:{
            type:String,
            required:true
        },
        project:{
            type:String,
            required:true
        }
    }
)

export const projects = mongoose.model("projects", projectsSchema);