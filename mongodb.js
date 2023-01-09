const mongoose=require("mongoose")
mongoose.set('strictQuery',false)

mongoose.connect("mongodb://0.0.0.0:27017/login")
.then(() =>{
    console.log("database connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
      password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("logdetails",LogInSchema)
module.exports=collection