import { projects } from "../models/projectsModel.js";

export const addProject = async(req, res)=>{
    const {maintainer, project}=req.body;

    try{
        const Project = await projects.create({maintainer, project});
    
        res.status(201).json({message: Project + " added successfully"});
    }
    catch(err)
    {
        console.log(err);
    }
}