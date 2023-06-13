const express=require("express");
const {connection }= require("./Configs/db")
const {JobRouter} = require("./Routes/JobRoutes")
require("dotenv").config();
const cors=require("cors");


const app=express()
app.use(express.json())
app.use(cors());
app.use("/masaijobs",JobRouter)


app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("connected to db")
    } catch (error) {
        alert(error)
    }
})