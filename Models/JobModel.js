const mongoose=require("mongoose");

const JobSchema=mongoose.Schema({

 company:{type:String},
 location:{type:String},
 role:{type:String},
 level:{type:String},
 position:{type:String},
 language:{type:String},
 contract:{type:String}
},{
    versionKey:false
})

const JobModel=mongoose.model("Jobs",JobSchema)


module.exports={
    JobModel
}