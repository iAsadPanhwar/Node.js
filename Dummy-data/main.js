import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/employ.js";


await mongoose.connect("mongodb://127.0.0.1:27017/company");

let app = express()
let port = 3000

app.set("view engine", "ejs")

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length-1))
    return arr[rno]
}

app.get("/", (req,res)=>{
    res.render("index", {foo:"FOO"})
})

app.get("/generate", async (req,res)=>{
    // Clear the collection
    await Employee.deleteMany({})
    // logic to generate data
    let randomNames = ["Ali","Talha","Qasim"];
    let randomLang = ["JavaScript","Java","C++"];
    let randomCities = ["Ghotki","Larkana","Karachi"];

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random()*22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: Math.random()>0.5?true:false
        })
        console.log(e) 
    }
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})