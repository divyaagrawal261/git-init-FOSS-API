import { stats } from "../models/statsModel.js";
import student from "../models/studentModel.js";

export const getStats = async(req, res)=>{
    
    const results= await stats.find();
    
    try{
        console.log("GET /stats");
        res.status(200).json(results[0]);
    }
    catch(err)
    {
        console.log("GET /stats");
        console.log(err);
    }
}

export const updateStats = async(req, res) =>{
    const pr= {
        TotalPR:0,
        NumberHard:0,
        NumberEasy:0,
        NumberMedium:0,
        NumberOfActiveContributors:0,
      }
    

    const Students = await student.find();

    Students.forEach(({score, easy, medium, hard})=>{
        if(score>0)
        {
            pr.NumberOfActiveContributors++;
            if(hard>0)
            pr.NumberHard+=hard
            if(medium>0)
            pr.NumberMedium+=medium
            if(easy>0)
            pr.NumberEasy+=easy

            pr.TotalPR=easy+medium+hard
        }
    })

    const Stats=await stats.find()

    const result=await stats.findOneAndUpdate({_id:Stats[0]._id},{
        $set:{
            TotalPR:pr.TotalPR,
        NumberHard:pr.NumberHard,
        NumberEasy:pr.NumberEasy,
        NumberMedium:pr.NumberMedium,
        NumberOfActiveContributors:pr.NumberOfActiveContributors
        }
    })

    res.status(200).json(result);
}