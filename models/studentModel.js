import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    contactNumber:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    rollNo:{
        type:String,
        required: true,
        unique:true
    },
    githubUsername:{
        type:String,
        required:true,
        unique:true
    },
    score:{
        type:Number,
        default:0
    },
    easy:{
        type:Number,
        default:0
    },
    medium:{
        type:Number,
        default:0
    },
    hard:{
        type:Number,
        default:0
    }
});

const student = mongoose.model("student", studentSchema);

export default student;