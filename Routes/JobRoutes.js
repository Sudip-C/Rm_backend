const express=require("express");
const {JobModel} =require("../Models/JobModel");


const JobRoute=express.Router()

JobRoute.post("/create",async(req,res)=>{
    try{
        const job=new JobModel(req.body)
        await job.save()
        res.status(200).send({"msg":"New Job has been added."})
    }catch(error){
        res.status(400).send({"msg":error.message})
    }
})

JobRoute.get("/",async(req,res)=>{
try{
    const jobs=await JobModel.find()
res.status(200).send(jobs)
}catch(error){
    res.status(400).send({"msg":error.message})
}
})

module.ecxports={
    JobRoute
}