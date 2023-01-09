const express =require("express")
const app =express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const { request } = require("http")
const { mongo, default: mongoose } = require("mongoose")
const tempelatePath=path.join(__dirname,'../tempelates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))

//mongoose.set('strictQuery',false)

app.get("/",(req,res)=>{
    res.render("login")
})
app.post("/login",async (req,res)=>{

})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.post("/signup",async (req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.pssword
    }
    
  await collection.insertMany([data])
  res.render("home")
})
app.listen(4000,()=>{
    console.log("port connected");
})